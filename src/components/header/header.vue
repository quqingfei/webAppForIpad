<template>
	<div class="header">
    <div class="logo"></div>
    <div class="input">
      <input type="text" v-model="text" placeholder="请输入手机/姓名/昵称"/>
      <i class="icon" v-if="btn==1" @click="search"><img src="./fangdaj.png" height="35" width="36"></i>
      <router-link to="/alllist">
        <i class="icon" v-if="btn==2" style="background-color:#ffbc3a"  @click="close"><img src="./close.png" height="35" width="36"></i>
      </router-link>
    </div>
	</div>
</template>

<script>
export default{
  data() {
    return {
      text: '',
      btn: 1
    };
  },
  methods: {
    search() {
       if(this.text === ''){
        return false;
      }else{
        if(/^1[34578]\d{9}$/.test(this.text)) {
          this.$store.commit(`showOne`, Number(this.text));
        } else {
          this.$store.commit(`showOne`, this.text);
        };
        // this.$router.push('/onelist');
        this.$router.replace('/onelist');
        this.btn = 2;
      }
    },
    close() {
      console.log(222);
      this.btn = 1;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  height 64px
  background-color #3c3c3c
  overflow hidden
  width 100%
  .logo
     width 128px
     height 15px
     float left
     background-image url('logo.png')
     background-repeat no-repeat
     background-size 128px 15px
     margin-left 12.5px
     margin-top 24.5px
  .input
    float right
    margin-top 15px
    margin-right 30px
    position relative
    input
      height 32px
      border 1px solid #cccccc
      line-height 32px
      padding-left 8px
      width 242px
      background-color #3c3c3c
      color white
      border-radius 4px
      outline none
      font-size 14px
    .icon
      position absolute
      height 34px
      width 34px
      background-color #49badc
      right 0px
      top 0px
      border-bottom-right-radius 4px
      border-top-right-radius 4px
      img
        width 17px
        height 17px
        margin-top 8px
        margin-left 8px  
</style>
