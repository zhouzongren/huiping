<template>
  <div class="con" v-if="show">
    <div class="title"><h2>精选测评<span class="close" @click="show=false">×</span></h2></div>
    <div v-for="(item, index) in list.list" class="item" v-if="list.list && index<2">
      <img :src="'https://nos.netease.com/huiping/'+item.articleImgUrl" :alt="item.articleShowTitle">
      <div class="content">
        <h2>{{item.articleShowTitle}}</h2>
        <img :src="item.source.logo" alt=""><a>来自{{item.source.articleSourceName}}</a>
      </div>
    </div>
    <div class="tail" v-if="list.list &&list.list.length>0">
      <h3 class="text-center">全部测评({{list.list.length}})</h3>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      list: {
        list: []
      },
      show: true
    }),
    props: {
      id: Number
    },
    methods: {
      init: function () {
        this.request('getArticles.m.json').then(res => {
          this.$set(this.list, 'list', res.info)
//          this.list = res.info
        })
      }
    },
    created: function () {
      this.init()
    }
  }
</script>
<style scoped>
  .title{
    padding: 0 2rem .5rem 2rem;
    box-shadow: 0 0.1rem 0.1rem rgb(200,200,200);
  }
 .title, .title h2{
   font-size: 2rem;
 }
  .item{
    padding: 0.5rem 2rem;
    position: relative;
    height: 10rem;
    border-bottom: solid 0.05rem rgb(220,220,220);
  }
  .item>img{
    position: absolute;
    height: 8rem;
    width: 8rem;
    top:1rem;
    left: 2rem;
    border-radius: 0.2rem;
    vertical-align: center;
  }
  .item .content{
    display: inline-block;
    height: 8rem;
    margin-left: 10rem;
  }
  .item .content h2{
    font-size: 2rem;
    height: 4rem;
  }
  .item .content img{
    height: 2rem;
    width: auto;
  }
  .tail{
    border-bottom: solid 0.05rem rgb(220,220,220);
    margin-bottom: 2rem;
  }
  .tail h3{
    margin: 1rem 0;
  }
</style>
