<template>
  <div class="_container">
    <div class="row">
      <img class="brand-logo" :src="comObj.brandLogo.url" :alt="comObj.name">
    </div>
    <div class="row">
      <img class="commodity-logo" :src="comObj.commodityLogo.url" :alt="comObj.commodityName">
    </div>
    <div class="row">
      <p>{{comObj.commodityName}}</p>
    </div>
  </div>
</template>
<script>
 export default {
   props: {
     comObj: Object
   }
 }
</script>
<style scoped>
  ._container{
    text-align: center;
    padding: 0 30px;
    background-color: white;
    border-bottom: 1px solid rgb(220,220,220);
    box-shadow:0 1px 1px rgb(220,220,220);
  }
  .brand-logo{
    width:15%;
    height: auto;
    float: left;
  }
  .commodity-logo{
    width: 60%;
    height: auto;
  }
  p{
    font-size: 2rem;
    font-weight: bold;
  }
</style>
