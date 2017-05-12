<template>
<div class="itemlist">
	<ul>
		<li class="itemd">
      <span class="ime wicon">当前体重(KG)</span>
      <span class="cen">66.6</span>  
      <span><i class="rig green">标准</i></span>
    </li>
    <li class="itemd">
      <span class="ime bicon">体格指数(bmi)</span>
      <span class="cen">21.6</span>  
      <span><i class="rig blue">偏低</i></span>
    </li>
    <li class="itemd">
      <span class="ime bicon">脂肪</span>
      <span class="cen">21.6</span>  
      <span><i class="rig yellow">偏高</i></span>
    </li>
	</ul>
</div>
</template>

<script>
  export default{
    props: {
      item: {
        type: Object
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.itemlist
  .itemd
    display flex
    height 40px
    line-height 40px
    background-color white
    margin-bottom 5px
    .ime
      padding-left 50px
    .cen
      text-align center 
    span
      flex 1
      .rig
        display inline-block
        height 20px
        width 36px
        font-style normal
        font-size 12px
        line-height 20px
        margin-top 10px
        margin-right 10px
        text-align center
        color white
        border-radius 4px
        float right
        &.green
          background-color #3fc371
        &.yellow
          background-color #ffbd24
        &.blue
          background-color #49badc   
    .wicon
      background url('./wicon.png') 10px center no-repeat
      background-size 30px 30px
    .bicon
      background url('./bicon.png') 10px center no-repeat
      background-size 30px 30px  
    .cicon
      background url('./cicon.png') 10px center no-repeat
      background-size 30px 30px
    .dicon
      background url('./dicon.png') 10px center no-repeat
      background-size 30px 30px
    .eicon
      background url('./eicon.png') 10px center no-repeat
      background-size 30px 30px
    .ficon
      background url('./ficon.png') 10px center no-repeat
      background-size 30px 30px
    .gicon
      background url('./gicon.png') 10px center no-repeat
      background-size 30px 30px
    .iicon
      background url('./iicon.png') 10px center no-repeat
      background-size 30px 30px
    .jicon
      background url('./jicon.png') 10px center no-repeat
      background-size 30px 30px
    .kicon
      background url('./kicon.png') 10px center no-repeat
      background-size 30px 30px
    .micon
      background url('./micon.png') 10px center no-repeat
      background-size 30px 30px
    .nicon
      background url('./nicon.png') 10px center no-repeat
      background-size 30px 30px
    .oicon
      background url('./oicon.png') 10px center no-repeat
      background-size 30px 30px
    .hicon
      background url('./hicon.png') 10px center no-repeat
      background-size 30px 30px
</style>
