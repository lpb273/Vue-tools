<template>
  <div>
    <div class="box" id="main"></div>
    <div v-html="text">
        
    </div>
  </div>
</template>
<script>
import zrender from "zrender";
export default {
  data() {
    return {
      text:''
    };
  },
  methods: {
    draw() {
      var opts = {
        renderer: "svg",
        background:'#64c2f7'
      }
      var zr = zrender.init(document.getElementById("main"), opts);
      zr.dom.style.backgroundColor = opts.background;
      var w = zr.getWidth();
      var h = zr.getHeight();
      var r = 30;
      var circle = new zrender.Circle({
        shape: {
          cx: r,
          cy: h / 2,
          r: r
        },
        style: {
          fill: "transparent",
          stroke: "#F00"
        },
        silent: true
      });
      circle
        .animate("shape", false)
        .when(5000, { cx: w - r })
        .when(10000, { cx: r })
        .done(function() {
          // Animation done
        })
        .start();
      zr.add(circle);
    }
  },
  mounted() {
    this.draw();
  }
};
</script>
<style scoped>
.box {
  width: 400px;
  height: 400px;
}
</style>

