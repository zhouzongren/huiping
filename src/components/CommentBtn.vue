<template>
  <button :class="classObj" @click="!disable &&  $emit('btnClicked')">
    <slot></slot> <span v-if="weight"></span>{{weight}}
    <!--<div class="num"></div>-->
  </button>
</template>
<script>
  export default {
    data: () => ({
    }),
    props: {
      weight: Number | String,
      disable: Boolean
    },
    computed: {
      classObj: function () {
        return {
          _default: +this.weight < 4,
          _light: +this.weight >= 4,
          'b-react': !this.disable
        }
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
  button {
    height: 2.5rem;
    width: auto;
    line-height: 2.5rem;
    padding:0 1rem ;
    font-size: 1.8rem;
    border: solid 1px;
    border-radius: 1.25rem;
    outline:none;
    background-color: white;
    margin: 0.5rem 0.5rem;
    transition: all 0.3s;
  }
  ._default{
    border-color: rgb(100,100,100);
    color : rgb(100,100,100);
  }
  ._default.b-active{
    color: white;
    background-color : rgb(100,100,100);
  }
  ._light{
    border-color: orange;
    color:orange;
  }
  ._light.b-active{
    color: white;
    background-color: orange;
  }
  span{
    margin: 0 0.5rem;
    height: auto;
    width: 1px;
    border-left: solid 1px ;
  }
</style>
