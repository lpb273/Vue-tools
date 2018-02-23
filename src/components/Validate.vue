<template>
  <div>
    <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text"
      placeholder="Email">
    <span v-show="errors.has('email')" class="help is-danger">
      {{ errors.first('email') }}
    </span>
    <div>
      <span id="share"></span>
      <span>
        <a href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2F127.0.0.1%3A8080%2F%23%2Fvalidate&showcount=1&desc=%E5%88%86%E4%BA%AB%E7%9A%84%E7%90%86%E7%94%B1&summary=%E5%88%86%E4%BA%AB%E7%9A%84%E6%91%98%E8%A6%81&title=%E5%88%86%E4%BA%AB%E7%9A%84%E6%A0%87%E9%A2%98&site=%E5%88%86%E4%BA%AB%E8%87%AA%E5%88%98%E9%B9%8F%E6%B3%A2%E7%9A%84%E5%8D%9A%E5%AE%A2&pics=&style=204&width=98&height=22" target="_blank">
        <span class="qq-share"></span>
        </a>
      </span>
      <span class="we-chat">
        <router-link :to='"/sharewechat?share_url=" + pushUrl'target="_blank">
          <span class="wechat-share"></span>
        </router-link>
      </span>
      <span>
        <a href="http://service.weibo.com/share/share.php?appkey=2757215167&title='2222'&url=&searchPic=false&style=204" target="_blank">
          <span class="weibo-share"></span>
        </a>
      </span>
    </div>

  </div>

</template>
<script>
  export default {
    data() {
      return {
        weboImg:'../../static/weibo.png',
        pushUrl:''
      }
    },
    methods: {
      shareWeChat(){
        this.pushUrl = window.location.href;
      },
      QQShare() {
        (function () {
          var p = {
            url: location.href,
            showcount: '1',/*是否显示分享总数,显示：'1'，不显示：'0' */
            desc: '分享的理由',/*默认分享理由(可选)*/
            summary: '分享的摘要',/*分享摘要(可选)*/
            title: '分享的标题',/*分享标题(可选)*/
            site: '分享自',/*分享来源 如：腾讯网(可选)*/
            pics: '',/*分享图片的路径(可选)*/
            style: '204',
            width: 98,
            height: 22
          };
          var s = [];
          for (var i in p) {
            s.push(i + '=' + encodeURIComponent(p[i] || ''));
          }
          document.getElementById('share').innerHTML = [
            '<a version="1.0" class="qzOpenerDiv" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?',
            s.join('&'), '" target="_blank"><img src="../../static/qq.png" alt="" srcset=""></a>'
          ].join('');
          // document.write(['<a version="1.0" class="qzOpenerDiv" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?',s.join('&'),'" target="_blank"><img src="../../static/qq-hover.png" alt="" srcset=""></a>'].join(''));
        })();
      }
    },
    created() {},
    mounted() {
      // this.QQShare()
      this.shareWeChat()
    },
    updated() {

    }
  }

</script>

<style scoped>
  .ahsre {
    width: 50px;
    height: 50px;
    background: red;
    display: inline-block;
  }

  .we-chat {
    width: 32px;
    height: 32px;
  }
.weibo-share{
  width: 32px;
  height: 32px;
  display: inline-block;
  background-image: url('../../static/weibo.png')
}
.weibo-share:hover{
  width: 32px;
  height: 32px;
  display: inline-block;
  background-image: url('../../static/weibo-hover.png')
}
.wechat-share{
  width: 32px;
  height: 32px;
  display: inline-block;
  background-image: url('../../static/wechat.png');
  cursor: pointer;
}
.wechat-share:hover{
  width: 32px;
  height: 32px;
  display: inline-block;
  background-image: url('../../static/wechat-hover.png');
  cursor: pointer;
}
.qq-share{
  width: 32px;
  height: 32px;
  display: inline-block;
  background-image: url('../../static/qq.png')
}
.qq-share:hover{
  width: 32px;
  height: 32px;
  display: inline-block;
  background-image: url('../../static/qq-hover.png')
}
</style>
