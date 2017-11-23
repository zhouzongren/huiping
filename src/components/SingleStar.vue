<template>
  <div class="template">
    <div class="text"><span class="badge">灰度</span><div><span>{{star}}</span></div></div>
    <div class="star-back" :style="styleObject"><img :src="starBack" class="star-back"></div>
  </div>
</template>
<script>
  import starMask from '../assets/star_mask.png'
  import starNo from '../assets/star_no.png'
  import starWave from '../assets/star_wave.png'
  export default {
    data: () => ({
//      starNo: 7
    }),
    props: {
      starNo: Number | String
    },
    computed: {
      star: function () {
        return +this.starNo > 0 ? this.starNo : '评论不足'
      },
      starBack: function () {
        console.log(starMask)
        return +this.starNo > 0 ? starMask : starNo
      },
      styleObject: function () {
        if (this.starNo > 0) {
          return {
            'background': 'url(' + starWave + ') no-repeat',
            'background-size': '100% 200%',
            'background-position': `0% ${+this.starNo * 10}%`
          }
        }
      }
    }
  }
</script>
<style scoped>
  .template{
    text-align: center;
  }
  .text{
    display: inline-block;
    vertical-align: middle;
  }
  .star-back{
    display: inline-block;
    width: 3rem;
    height: 3rem;
    vertical-align: middle;
  }
</style>
