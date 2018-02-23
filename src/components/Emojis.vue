<template>
  <div>
    <ul>
      <li v-for="(item,index) in emojisList" :key="index">
        <span class="icon-box">
          <span class="num">{{index}}</span>
          <span class="item">{{item}}</span>
        </span>
      </li>
    </ul>

  </div>
</template>
<script>
import emojis from 'emojis-list'
export default {
  data(){
    return{
      emojisList:[]
    }
  },
  methods:{
    show(){

    }
  },
  mounted(){
    this.emojisList = emojis;
  }
}
</script>
<style scoped>
ul{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
ul li{
  list-style: none;
}
.icon-box{
  width: 80px;
  height: 80px;
  margin: 10px;
  background: gray;
  display: inline-block;
  text-align: center;
  color: #fff;
  overflow: hidden;
}
.num{
  float: left;
  margin: 5px 0 0 5px;
}
.item{
  float: left;
  font-size: 20px;
  line-height: 80px;
}
</style>


