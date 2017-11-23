<template>
  <div class="page p-sc">
    <comment-top :comObj="comObj"></comment-top>
    <single-star :starNo="comObj.starNo"></single-star>
    <tag-list :tagList="comObj.tagShowList"></tag-list>
    <article-list></article-list>
  </div>
</template>
<script>
  import CommentTop from '../view/CommentTop.vue'
  import TagList from '../view/TagList.vue'
  import SingleStar from '../components/SingleStar.vue'
  import ArticleList from '../view/ArticleList.vue'
  export default {
    props: {
      comObj: Object
    },
    components: {
      CommentTop, TagList, SingleStar, ArticleList
    },
    data: () => ({
    }),
    methods: {
    }
  }
</script>
<style>

</style>
