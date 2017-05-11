<template>
<div>
  <div class="title">
    <span class="text">体测时间：</span>
    <span class="icondate">
        <span  @click="shwoDetial(detailShow)">2017-05-03 10:30:07</span>
        <i :class="rotere" @click="shwoDetial(detailShow)"></i>
        <transition name="fade">
          <ul v-show="detailShow">
            <li><span>2017-05-03 10:30:07</span></li>
            <li><span>2017-05-03 10:30:07</span></li>
            <li><span>2017-05-03 10:30:07</span></li>
            <li><span>2017-05-03 10:30:07</span></li>
            <li><span>2017-05-03 10:30:07</span></li>
            <li><span>2017-05-03 10:30:07</span></li>
            <li><span>2017-05-03 10:30:07</span></li>
          </ul>
        </transition>
    </span>
  </div>
  <div class="detial-right">
    <div class="top">
      <div class="head">
            <svg id="tablet-loader" width="128" height="128" viewBox="-12.5 -12.5 450 450" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="red" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#efefef" stroke-linecap="round" stroke-dasharray="1327" stroke-dashoffset="0" stroke-width="30" d="M212.2,1.8 C268.528634,1.8 321.511013,23.7365639 361.480176,63.5198238 C401.263436,103.303084 423.2,156.285463 423.2,212.8 C423.2,269.128634 401.263436,322.111013 361.480176,362.080176 C321.696916,401.863436 268.714537,423.8 212.2,423.8 C155.685463,423.8 102.888987,401.863436 62.9198238,362.080176 C23.1365639,322.296916 1.2,269.314537 1.2,212.8 C1.2,156.471366 23.1365639,103.488987 62.9198238,63.5198238 C102.888987,23.7365639 155.871366,1.8 212.2,1.8"></path></g>
          <g stroke="red" stroke-width="1" fill="none" fill-rule="evenodd"><path id="tablet-circle" data-length="1327" stroke="#49badc" stroke-linecap="round" 
          stroke-dasharray="1327" stroke-dashoffset="500" stroke-width="30" d="M212.2,1.8 C268.528634,1.8 321.511013,23.7365639 361.480176,63.5198238 C401.263436,103.303084 423.2,156.285463 423.2,212.8 C423.2,269.128634 401.263436,322.111013 361.480176,362.080176 C321.696916,401.863436 268.714537,423.8 212.2,423.8 C155.685463,423.8 102.888987,401.863436 62.9198238,362.080176 C23.1365639,322.296916 1.2,269.314537 1.2,212.8 C1.2,156.471366 23.1365639,103.488987 62.9198238,63.5198238 C102.888987,23.7365639 155.871366,1.8 212.2,1.8"></path></g>
          </svg>
          <div class="headicon"><img src="./head.jpg" height="500" width="500"></div>
      </div>
      <div class="headdetial">
        <div class="source">
          <span class="text">综合评分：<font class="bule">100分</font></span>
          <span class="righttext">体质评级：LV.1 <i></i></span>
        </div>
        <div class="twod">
          <span class="text">基本身体成分</span>
          <span class="ione green">达标</span>
        </div>
        <div class="twod mm7">
          <span class="text">基本身体成分</span>
          <span class="ione green">达标</span>
        </div>
        <div class="twod mm7">
          <span class="last">
            <span class="llas">
              <span class="text">基本身体成分</span>
              <span class="ione green">达标</span>
            </span>          
            <span class="leftd">身体年龄：24</span>
          </span>        
        </div>
      </div>    
    </div>
    <div class="bottom">
      <span class="item"><font>泥巴串串</font><i></i> </span>
      <span>昵称：Libra串串</span>
      <span>电话：134****7807</span>
    </div>
  </div>
  <div class="titlelist">
    基本身体成分 <span class="green">达标</span>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      detailShow: false,
      rotere: null
    };
  },
  methods: {
    shwoDetial(data) {
      if(data) {
        this.detailShow = false;
        this.rotere = null;
      }else{
        this.detailShow = true;
        this.rotere = `rotere`;
      };
    }
  }
};
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
  .icondate
    float right
    margin-right 10px
    position relative
    padding 0 5px
    span
      display inline-block
      height 100%
    i
      display inline-block
      width 15px
      height 11px
      background-image url('triangle.png')
      background-repeat no-repeat
      background-size 15px 11px
      background-position center left
      transition all 0.2s
    .rotere
      transform: rotate(180deg);  
    ul
      position absolute
      background-color #fff
      max-height 200px
      overflow auto
      width 188px
      transition all 0.2s
      &.fade-leave, &.fade-enter-active
        opacity 1
        top 0px
      &.fade-enter, &.fade-leave-active
        top -5px
        opacity 0
      li
        border-bottom 1px solid #ddd
.detial-right
  padding-top 34px
  border-bottom 1px solid #ccc
  .top
    display flex
    .head
      flex 0 0 132px
      width 128px
      height 128px
      text-align center
      margin 0 30px
      position relative
      .headicon
        position absolute
        width 84px
        height 84px
        top 50%
        left 50%
        margin-top -42px
        margin-left -42px
        overflow hidden
        border-radius 50%
        img
          width 100%
          height 100%
          display block
    .headdetial
      flex 1
      border-bottom 1px solid #CCCCCC
      padding-left 10px
      color #333
      .source
        margin-top 9px
        display flex
        align-items baseline
        .text
          flex 1
          font-size 18px
          .bule
            color #49badc
        .righttext
          vertical-align bottom
          flex 1
          font-size 12px
          i
            display inline-block
            width 12px
            height 12px
            background url('./help.png') no-repeat
            background-size 12px 12px
            vertical-align top
            margin-left 2px
      .twod
        font-size 12px
        margin-top 17px
        &.mm7
          margin-top 7px  
        .ione
          display inline-block
          padding 3px 6px
          margin-left 7px
          &.green
            background-color #3fc371
            color white
            border-radius 4px
            text-align center
        .last
          display flex
          width 100%
          align-items baseline
          .llas
            flex 1
          .leftd
            flex 1          
  .bottom
    display flex
    color #333333
    .item
      flex 0 0 128px
      width 128px
      margin 0 30px
    span
      flex 1
      text-align center
      height 50px
      line-height 50px
      font-size 12px
      width 128px
      i
        display inline-block
        width 12px
        height 12px
        background url('./woman.png') no-repeat
        background-size 12px 12px 
        vertical-align: text-top
.titlelist
  padding-left 15px
  width 100%
  height 50px
  line-height 50px
  background-color #efefef
  .green
    color #3fc371  
    margin-left 4px
</style>
