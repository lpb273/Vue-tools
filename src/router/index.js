import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Validate from '@/components/Validate'
import ShareWechat from '@/components/ShareWechat'
import Input from '@/components/Input'
import ChildOne from '@/components/ChildOne'
import ChildTwo from '@/components/ChildTwo'
import Emojis from '@/components/Emojis'
import Zrender from '@/components/Zrender'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [{
          path: 'childone',
          component: ChildOne
        },
        {
          path: '/childtwo',
          component: ChildTwo
        }
      ]
    },
    {
      path: '/validate',
      name: 'validate',
      component: Validate
    },
    {
      path: '/sharewechat',
      name: 'sharewechat',
      component: ShareWechat
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/emojis',
      name: 'emojis',
      component: Emojis
    },
    {
      path: '/zrender',
      name: 'zrender',
      component: Zrender
    }
  ]
})
