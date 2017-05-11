<template>
<div>
  <div class="title">
    <span class="text"><i><img src="./head.jpg" height="500" width="500"></i><span>体测次数</span><em>5次</em></span>
  </div>
  <div class="alllist">
    <ul>
      <li class="list-item active">
        <div class="header-img">
          <div class="source">100</div>
          <div class="text">综合评分</div>
        </div>
        <div class="list-detial">
          <div class="list_detial_left">
            <div class="list_detial_left_top">昵称：Libra串串</div>
            <div class="list_detial_left_bot">电话：134****7807</div>
          </div>
          <div class="list_detial_right">
            <div class="list_detial_right_top"><span>姓名：泥巴串串</span><img src="./man.png" alt="" /></div>
            <div class="list_detial_right_bot">2017-05-03 10:30:07</div>
          </div>
        </div>
      </li>
      <li class="list-item active">
        <div class="header-img">
          <div class="source">100</div>
          <div class="text">综合评分</div>
        </div>
        <div class="list-detial">
          <div class="list_detial_left">
            <div class="list_detial_left_top">昵称：Libra串串</div>
            <div class="list_detial_left_bot">电话：134****7807</div>
          </div>
          <div class="list_detial_right">
            <div class="list_detial_right_top"><span>姓名：泥巴串串</span><img src="./man.png" alt="" /></div>
            <div class="list_detial_right_bot">2017-05-03 10:30:07</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>


</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.title
  height 45px
  background-color #f9f9f9
  width 100%
  border-bottom 1px solid #ddd
  font-size 16px
  line-height 45px
  .text
    font-weight 700
    color #333333
    margin-left 12px
    display inline-block
    vertical-align top
    i
      display inline-block
      width 33px
      height 33px
      overflow hidden
      border-radius 50%
      margin-top 6px
      margin-right 11px
      vertical-align top
      img        
        width 100%
        height 100%
        display block
    span
      display inline-block
    em
      color #49badc
      display inline-block
      margin-left 5px
      font-style normal
.alllist
  font-size 12px
  height 79vh
  overflow auto
  .list-item
    border-bottom 1px solid #ddd
    display flex
    color #666666
    &.active
      background-color #c2e4ee
    &:nth-child(2n)
      background-color: #F9F9F9
    .header-img
      flex 0 0 77px
      width 77px
      height 41px
      overflow hidden
      display inline-block
      margin-top 23px
      text-align center
      border-right 1px solid #ccc
      margin-right 15px
      margin-bottom 21px
      color #3c3c3c      
      .source
        font-size 24px
        letter-spacing: 4px
        height 28px
        font-weight 600
      .text
        font-size 10px
    .list-detial
      flex 1
      font-size 12px
      .list_detial_left
        width 50%
        float left
        .list_detial_left_top
          margin-top 23px
        .list_detial_left_bot
          text-overflow ellipsis
          margin-top 17px
          white-space nowrap
          overflow hidden
      .list_detial_right
        width 50%
        float left
        .list_detial_right_top
          margin-top 23px          
          img
            width 12px
            height 12px
            vertical-align top
            margin-left 4px
        .list_detial_right_bot
          margin-top 17px
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
</style>
