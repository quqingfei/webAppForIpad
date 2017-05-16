<template>
<div>
  <div class="title">
    <span class="text">体测列表</span>
    <span class="iconupdate"><img src="./update.png" height="16" width="16"></span>
  </div>
  <div class="alllist">
    <ul>
      <li class="list-item active" v-for="item in list" @click="emitMyEvent">
        <div class="header-img"><img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg" height="500" width="500"></div>
        <div class="list-detial">
          <div class="list_detial_left">
            <div class="list_detial_left_top">昵称：{{item.nick}}</div>
            <div class="list_detial_left_bot">电话：{{item.phone}}</div>
          </div>
          <div class="list_detial_right">
            <div class="list_detial_right_top"><span>姓名：{{item.name}}</span><img src="./man.png" alt="" /></div>
            <div class="list_detial_right_bot">{{item.time}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

</template>

<script>
import { Event } from '@/pub.js';
export default {
  data() {
    return {
      list: [{
        name: `串串`,
        phone: `1309981259`,
        nick: `滴答滴`,
        time: `2017-02-15 20:30:08`
      }],
      hello: 123
    };
  },
  methods: {
    emitMyEvent() {
      Event.$emit('my-event', this.hello);
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
    font-weight 600
    color #333333
    margin-left 12px
    display inline-block
    vertical-align top
  .iconupdate
    width 33px
    height 33px
    background-color #CCCCCC
    display inline-block
    float right
    margin-right 10px
    margin-top 6px
    border-radius 4px
    transition all 0.2s
    &:active
      background-color #49badc
    img
      width 16px
      height 16px
      margin-top 8px
      margin-left 8px
      display block
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
      flex 0 0 52px
      width 52px
      height 52px
      border-radius 50%
      overflow hidden
      margin 16.5px 13.5px 16.5px 15px
      display inline-block
      img
        width 100%
        height 100%
        display block
    .list-detial
      flex 1
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
