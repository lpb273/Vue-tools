<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        localUrl: ''
      }
    },
    methods: {
      getParame() {
        console.log(this.$route.query.share_url);
        this.localUrl = this.$route.query.share_url;
        this.QRCodeBuild();
      },
      QRCodeBuild() {
        if (this.localUrl) {
          var QRCode = require('qrcode');
          var canvas = document.getElementById('canvas');

          QRCode.toCanvas(canvas, this.localUrl, {
            width: 400,
            errorCorrectionLevel: 'H',
            color: {
              dark: '#8B2500',
              light: '#F0F0F0'
            }
          }, function (error) {
            if (error) console.error(error)
            console.log('success!');
          })
        }
      },
    },
    mounted() {
      this.getParame();
    }
  }

</script>
<style scoped>


</style>
