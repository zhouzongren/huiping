<template>
  <div class="container" id="_app" @touchstart="touch">
    <transition :name="page_slide_method">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  //  import store from './vuex/store'
  function hasClass (e, className) {
    return e && e.className.split(' ').indexOf(className) > -1
  }
  function addClass (e, className) {
    if (e) {
      let classArr = e.className.split(' ')
      if (!(classArr.indexOf(className) > -1)) {
        classArr.push(className)
        e.className = classArr.join(' ')
        return true
      }
      return false
    }
    return false
  }
  function removeClass (e, className) {
    if (e) {
      let arr = e.className.split(' ')
      let i = arr.indexOf(className)
      if (i > -1) {
        arr.splice(i, 1)
        e.className = arr.join(' ')
        return true
      }
      return false
    }
    return false
  }
  export default {
    name: 'app',
    data () {
      return {
        page_slide_method: '',
        lastActive: null
      }
    },
    methods: {
      touch: function (event) {
        let e = event.target
        let app = document.getElementById('_app')
        while (e !== app) {
          if (hasClass(e, 'b-react')) {
//            this.untouch()
            if (hasClass(e, 'b-active')) {
              removeClass(e, 'b-active')
              this.lastActive = null
            } else {
              addClass(e, 'b-active')
              if (this.lastActive) {
                removeClass(this.lastActive, 'b-active')
              }
              this.lastActive = e
            }
            break
          }
//          冒泡
          e = e.parentNode || app
        }
      }
    },
    watch: {
      '$route' (to, from) {
        let toDepth = to.meta.depth
        let frDepth = from.meta.depth
        if (!(toDepth !== frDepth && frDepth && toDepth)) {
          this.page_slide_method = ''
        } else {
          this.page_slide_method = toDepth > frDepth ? 't-slide-l' : 't-slide-r'
        }
      }
    }
  }
</script>
<style>
  @import "style.css";
</style>
