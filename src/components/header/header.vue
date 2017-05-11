<template>
	<div class="header">
    <div class="logo"></div>
    <div class="input">
      <input type="text" placeholder="请输入手机/姓名/昵称"/>
      <i class="icon"><img src="./fangdaj.png" height="35" width="36"></i>
    </div>
	</div>
</template>

<script>
export default{};
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
