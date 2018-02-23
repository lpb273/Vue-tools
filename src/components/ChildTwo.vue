<template>
<div>
    <h1>child2</h1>
  <p>{{brotherMsg}}</p>
</div>

</template>
<script>
import vm from '../vm';
export default {
  data() {
    return {
      brotherMsg: "初始值"
    };
  },
  methods: {
    get() {
      vm.$on("blur", arg => {
        this.brotherMsg = arg; // 接收
        console.log(this.brotherMsg)
      });
    }
  },
  created(){
    this.get();
  },
  mounted() {
    this.get();
  }
};
</script>
