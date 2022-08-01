<template>
  <q-page>
    <div class="text-h6">
      변수 랜더링 : {{ quasarApp }}
    </div>
    <hr>
    :속성 을 쓰면 넣을 바인딩됩니당
    <input
      :value="inpuText"
      class="input-text"
    >
    <hr>
    model을 통한 데이터 바인딩
    <input
      v-model="inpuText"
      class="input-text"
    >
    확인 : {{ inpuText }}
    <br>

    클릭 이벤트 추가
    <button
      class="btn text-red-5 bg-green-1"
      @click="addListItem"
    >
      추가
    </button><br>

    <q-list
      bordered
      separator
      class="q-ma-md"
    >
      <q-item>
        <q-item-section>
          <div
            v-if="listItems.length > 5"
          >
            * 너무 많이 입력했어요. 그만 입력해요 ):
          </div>
          <div
            v-else
          >
            * 입력 후 추가 버튼을 누르면 아래에 추가됩니다 :)
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>Q</q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-item-label>U</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        v-for="(item, index) in listItems"
        :key="item"
      >
        <q-item-section>
          <q-item-label>{{ index }}번. {{ item }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
const inpuText = ref('기본값')
const quasarApp = 'Hong App'

const listItems = ['A', 'S']

const addListItem = () => {
  if (inpuText.value.length === 0) return
  listItems.push(inpuText.value)

  inpuText.value = ''
}

watchEffect(() => {

})

</script>

<style scoped>
.input-text{
  padding: 3px;
  color: cornflowerblue;
}

.btn{
  font-size: 1.05rem;
}
</style>
