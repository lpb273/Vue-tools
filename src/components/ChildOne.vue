<template>
  <div>
    <h1>child1</h1>
    <!-- <span v-for="(item,index) in childMsg.arr">{{item}}</span>
    <p>{{childMsg.str}}</p> -->
    <p>{{childMsg}}</p>
    <div @click="changeParentData">改变父组件</div>
    <div @click="give">给我兄弟</div>
  </div>

</template>
<script>
import vm from '../vm';
export default {
  props: ["childMsg"],
  data() {
    return {};
  },
  methods: {
    changeParentData() {
      this.$emit("receiveChildData", "我要改变父组件的数据");
    },
    give(){
      vm.$emit('blur','我是你兄弟'); //触发事件
    }
  }
};
</script>
