<template>
  <div class="notice-container">
    <div class="input-box">
      제목: <input />
      <input type="date" />
      <input type="date" />
      <button>검색</button>
      <button>등록</button>
    </div>
  </div>
</template>

<script setup></script>

<!-- style scoped는 해당 컴포넌트에서만 스타일을 적용시키는 방법이다.
    그러나, scoped는 컴파일 시점에 고유한 속성을 컴포넌트 요소에 추가하는데,
    외부 css 파일은 이 고유 속성을 알지 못하므로 스타일이 적용안된다.

    scoped을 사용하지 않고, css파일을 import 하거나, <style scoped> 안에 css를 구성해야한다.
-->

<style>
@import './styled.css';
</style>
