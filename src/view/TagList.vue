<template>
   <!--<comment-btn :weight="15">按钮</comment-btn>-->
  <div v-if="tagList && tagList.length" class="tag-list" :style="max_height">
    <p>点击标签可查看相关评论</p>
     <comment-btn  v-for="(tag, index) in tagLists" :weight="tag.count" v-if="collapse(index)" :key="index">{{tag.tagName}}</comment-btn>
    <div v-if="tagLists.length > 6">
      <span class="glyphicon" :class="[expand?'glyphicon-chevron-up':'glyphicon-chevron-down']" aria-hidden="true" @click="expand = !expand"></span>
    </div>
  </div>
</template>

<script>
  import CommentBtn from '../components/CommentBtn.vue'
  export default {
    data: () => ({
//      collapse: true,
      expand: false,
      tagLists: []
    }),
    components: {
      CommentBtn
    },
    props: {
      tagList: Array
    },
    created: function () {
      this.tagLists = this.tagList.concat(this.tagList)
    },
    methods: {
      collapse: function (i) {
        if (this.expand) {
          return true
        }
        return i < 6
      }
    },
    computed: {
      max_height: function () {
        return this.expand ? {maxHeight: '60rem'} : {maxHeight: '15rem'}
      }
    }
  }
</script>

<style scoped>
  p{
    font-size: 1.5rem;
    font-family: SimSun, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #aaa;
  }
  .tag-list{
    transition: max-height 0.8s;
    text-align: center;
    max-height: 15rem;
    overflow: hidden;
    border-bottom: solid 1px gainsboro;
    box-shadow: 0 1px 1px gainsboro;
  }
</style>
