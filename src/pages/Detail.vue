<template>
  <div class="page p-ab detail">
    <comment v-if="loaded" :comObj="comObj[id]"></comment>
    <div class="add-to-cart" @click=""></div>
    <div class="edit-to-comment"></div>
  </div>
</template>

<script>
  import comment from '../view/Comment.vue'
  export default {
    components: {
      comment
    },
    data () {
      return {
        id: 0,
        comObj: {},
        loaded: false
      }
    },
    methods: {
      init: function () {
        this.id = +this.$route.params['id']
        this.request('commentItem.json').then(res => {
//          数据解构
          let { commodity, brand, starNo, tagShowList, comment, next, admireIdList } = res
          let { id, commodityName, logo: commodityLogo } = commodity
          let { id: brandId, brandName, logo: brandLogo } = brand
          comment.forEach(item => {
            item.parise = admireIdList.indexOf(item.id) > -1
          })
//          赋值
          this.$set(this.comObj, this.id, {
            id, commodityLogo, commodityName, brandLogo, brandName, brandId, starNo, tagShowList, comment, admireIdList, next
          })
          this.loaded = true
        })
      }
    },
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        vm.init()
      })
    }
  }
</script>

<style scoped>
  .detail{
    min-height: 100%;
  }
  .add-to-cart{
    height: 2rem;
    width: 2rem;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: url("../assets/icon/ico_add_inv.png") center no-repeat;
    background-size: contain;
  }
  .edit-to-comment{
    position: fixed;
    height: 4rem;
    width: 4rem;
    z-index: 2;
    bottom: 2rem;
    right:2rem;
    border-radius: 2rem;
    background:rgba(0,0,0,.7) url("../assets/icon/ico_compose.png") center no-repeat;
    background-size: 60% 60%;
  }
</style>
