<template>
  <q-page>
    <button @click="popup()">
      html 기본보기
    </button>
    <h5>
      해당 소스는 /public/1_기본.html 파일이에요.
    </h5>
  </q-page>
</template>

<script setup>
const popup = () => {
  window.open('/1_기본.html')
}
</script>
