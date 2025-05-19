<template>
  <div class="left-menu">
    <router-link to="/vue" class="logo-container">
      <img :src="logoImg" alt="happyjob" class="main-logo" />
    </router-link>

    <div class="profile-container">
      <img :src="logoImage" alt="logoImage" class="profile-img" />
      <div class="profile-info">
        <div class="user-id">{{ user.loginId }}</div>
        <button class="logout-btn" @click="handleLogout">로그아웃</button>
      </div>
    </div>

    <ul class="menu-list">
      <li v-for="menuAttrt in user.usrMnuAtrt" :key="menuAttrt.mnu_id" class="menu-item group">
        <div class="menu-header" :class="{ active: activeParent === menuAttrt.mnu_id }">
          <img :src="menuIcon" alt="menu" class="menu-icon" />
          <div class="menu-title">{{ menuAttrt.mnu_nm }}</div>
        </div>

        <div class="submenu-container" :class="{ flex: activeParent === menuAttrt.mnu_id }">
          <router-link
            v-for="node in menuAttrt.nodeList"
            :key="node.mnu_id"
            :to="`/vue${node.mnu_url}`"
            class="submenu-item"
            :class="{ active: activeLink === node.mnu_id }"
            @click="handleLinkClick(node.mnu_id, menuAttrt.mnu_id)"
          >
            <div :id="node.mnu_id">{{ node.mnu_nm }}</div>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import logoImg from '@/assets/logo_img.png';
import logoImage from '@/assets/logo.svg';
import menuIcon from '@/assets/menu.png';
import { useUserInfo } from '@/stores/loginInfoState';

const router = useRouter();
const activeLink = ref(null);
const activeParent = ref(null);
const { user, setUserData } = useUserInfo();

onMounted(() => {
  const storedUserInfo = sessionStorage.getItem('userInfo');
  if (storedUserInfo) {
    try {
      const parsedData = JSON.parse(storedUserInfo);
      setUserData(parsedData);
    } catch (error) {
      console.error('Error parsing user info:', error);
    }
  } else {
    console.log('No stored user info found'); // 저장된 데이터가 없는 경우
  }
});

const handleLinkClick = (menuId, parentId) => {
  activeLink.value = menuId;
  activeParent.value = parentId;
};

const handleLogout = async () => {
  try {
    // 로그아웃 로직 구현
    await router.push('/');
    sessionStorage.removeItem('userInfo');
  } catch (error) {
    console.error('로그아웃 실패:', error);
  }
};
</script>

<style lang="css" scoped>
@import './styled.css';
</style>
