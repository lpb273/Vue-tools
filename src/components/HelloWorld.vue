<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <div class="box"></div>
    <input type="text" v-model="valInp">
    <textarea name="" id="" cols="30" rows="10" v-model="valTextarea"></textarea>
    <button @click="QRCodeBuild">begin</button>
    <canvas id="canvas"></canvas>
    <img :src="headerImg" alt="" srcset="">
    <button @click="hashImg">hash</button>
    <p>
      <router-link to="/validate">表单验证</router-link>
      <router-link to="/input">输入框</router-link>
    </p>
    <!-- <child-one @upup="change" :child-msg="parentMsg"></child-one> -->
    <child-one @receiveChildData="change" :child-msg="msg"></child-one>
    <child-two></child-two>
    <p>
      <router-link to="emojis">to emojis</router-link>
    </p>
    <p>
      <router-link to="/zrender">zrender</router-link>
    </p>
  </div>
</template>

<script>
import Identicon from "identicon.js";
import crypto from "crypto";
import childOne from "./ChildOne";
import childTwo from "./ChildTwo";
export default {
  name: "HelloWorld",
  components: {
    childOne,
    childTwo
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      valInp: "",
      valTextarea: "",
      imgSrc: "",
      headerImg: "",
      parentMsg: {
        arr: [1, 2, 3, 4],
        str: "000"
      }
    };
  },
  methods: {
    change(msg) {
      this.msg = msg;
    },
    QRCodeBuild() {
      if (this.valTextarea) {
        var QRCode = require("qrcode");
        var canvas = document.getElementById("canvas");

        QRCode.toCanvas(
          canvas,
          this.valTextarea,
          {
            width: 400,
            errorCorrectionLevel: "H",
            color: {
              dark: "#8B2500",
              light: "#F0F0F0"
            }
          },
          function(error) {
            if (error) console.error(error);
            console.log("success!");
          }
        );
      }
    },
    hashImg() {
      if (this.valInp) {
        let hash = crypto.createHash("md5");
        hash.update(this.valInp);
        var options = {
          foreground: [
            parseInt(Math.random() * 255),
            parseInt(Math.random() * 255),
            parseInt(Math.random() * 255),
            255
          ],
          background: [240, 240, 240, 255],
          margin: 0.1,
          size: 400,
          format: "svg"
        };
        var data = new Identicon(hash.digest("hex"), options).toString();
        this.headerImg = "data:image/svg+xml;base64," + data;
      }
    }
  },
  mounted() {
    // this.QRCodeBuild();
    this.hashImg();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
<style src="./01.css">

</style>
