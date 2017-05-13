<template>
<div class="lineall">
  <div class="line">
    <span class="green">
      <span class="into">100BPM/MIN</span>
    </span>
    <span class="yellow">
      <span class="into">100BPM/MIN</span>
    </span>
    <span class="red"></span>
    <i class="smile"><img src="./person.png" height="22" width="22"></i>
  </div>
  <div class="font">
    <span>标准</span>
    <span>偏高</span>
    <span>超高</span>
  </div>
  <slot name="zhanwei"></slot>  
  <div class="linetitle">
    <slot name="title"></slot>
  </div>
  <div class="linetext">
    <slot name="text"></slot>
  </div>
</div>  
</template>
<script>
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.lineall
  .line
    height 7px
    display flex
    position relative
    .smile
      position absolute
      left 66%
      top -8px
    span
      position relative
      flex 1
      &.green
        background-color #3fc371
      &.yellow
        background-color #ffb325
      &.red
        background-color #fe5432
      .into
        position absolute
        right -30px
        top -22px
        font-size 12px
        color #666
  .font
    display flex
    font-size 12px
    color #666
    margin-top 7px
    span
      text-align center
      flex 1      
  .linetitle
    font-size 15px
    color #333
    font-weight 600
    margin-top 22px
  .linetext
    font-size 12px
    margin-top 8px
    padding-bottom 35px
</style>
