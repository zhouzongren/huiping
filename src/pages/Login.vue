<template>
  <div class="p-ab page ">
    <div class="login">
      <div  class="row ">
        <img src="../assets/logo.png" alt="">
        <form class="form-horizontal">
          <div class="form-group">
            <div class="col-sm-12">
              <input type="text" class="form-control input-lg" id="userName" placeholder="User Name" v-model="user">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-12">
              <input type="password" class="form-control input-lg" id="inputPassword3" placeholder="Password" v-model="passwords">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-12">
              <button type="submit" class="btn btn-lg btn-block btn-success" @click.prevent="submit"> {{loginMsg}}  </button>
              <p class="text-danger" v-if="errorMsg">{{errorMsg}}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'Login',
    data () {
      return {
        loginMsg: 'login',
        errorMsg: '',
        user: '',
        passwords: ''
      }
    },
    methods: {
      submit: function () {
        this.errorMsg = ''
        this.loginMsg = 'Login...'
        setTimeout(() => {
          this.request('user.json').then(
            res => {
              if (res.name === this.user && res.password === this.passwords) {
                this.setName(res.name)
                this.$router.push(`detail/${1}`)
              } else {
                this.errorMsg = '账号或密码错误'
              }
              this.loginMsg = 'login'
            },
            error => {
              this.errorMsg = error.msg
              this.loginMsg = 'login'
            }
          )
        }, 1000)
      },
      ...mapMutations({
        setName: 'updatename'
      })
    }
  }
</script>

<style scoped>
  .login{
    text-align: center;
    font-family: SansSerif ;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
  }
  .form-horizontal{
    /*font-size: 20px;*/
    /*margin: 0 auto;*/
    /*max-width: 300px;*/
  }
  .form-group{
    /*margin-left: calc( -15px - 25%);*/
  }

</style>
