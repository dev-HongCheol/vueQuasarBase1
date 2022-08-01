<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-ma-md">
      <h6>버튼을 누르면 아래쪽 내용이 변경됩니다. router로 아래쪽을 변경해요.</h6>
      <q-btn
        color="deep-purple"
        push
        text-color="black"
        label="htmlBase"
        @click="goTodoPage('htmlBase')"
      />
      <q-btn
        color="pink"
        push
        text-color="black"
        label="vueBase"
        @click="goTodoPage('vueBase')"
      />
      <q-btn
        color="light-blue"
        push
        text-color="black"
        label="end"
        @click="goTodoPage('end')"
      />
    </div>

    <q-page-container>
      <div style="border: 1px solid red;">
        <router-view :key="$route.fullPath" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goTodoPage = (url) => {
  router.push(url)
}
</script>
<style scoped>
</style>
