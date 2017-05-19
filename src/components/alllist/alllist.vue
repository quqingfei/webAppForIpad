<template>
<div>
  <div class="title">
    <span class="text">体测列表</span>
    <span class="iconupdate" @click="updateAllList"><img src="./update.png" height="16" width="16"></span>
  </div>
  <div class="alllist" v-scroll="onScroll">
    <ul>
      <li class="list-item" :class="{'active':item.active,'unactive':!item.active}" v-for="(item, $index) in list" @click="emitMyEvent(item, $index)">
        <div class="header-img"><img :src="imgt+item.headIcon+'&style=52h_52w_0e'" height="500" width="500"></div>
        <div class="list-detial">
          <div class="list_detial_left">
            <div class="list_detial_left_top">昵称：{{item.nickName}}</div>
            <div class="list_detial_left_bot">电话：{{item.phone}}</div>
          </div>
          <div class="list_detial_right">
            <div class="list_detial_right_top"><span>姓名：{{item.realName}}</span><img src="./man.png" alt="" /></div>
            <div class="list_detial_right_bot">{{item.bodyExamTime | times}}</div>
          </div>
        </div>
      </li>
      <li class="nomessage">没有数据了</li>
    </ul>
  </div>
</div>

</template>

<script>
import { Event } from '@/pub.js';
export default {
  data() {
    return {
      imgt: '/fatburn/file/FileCenter!showImage2.zk?name=',
      list: [],
      boxHeight: null,
      staticAllist: null,
      i: 1,
      once: true
    };
  },
  created() {
    this.addAllList();
  },
  mounted() {
    this.staticAllist = this.$el.getElementsByClassName('alllist')[0].clientHeight;
  },
  updated() {
    if(this.once){
      this.$el.getElementsByClassName('list-item')[0].click();
      this.once = false;
    }
  },
  methods: {
    emitMyEvent(item, index) {
      Event.$emit('my-event', item.userId);
      this.$store.commit(`setUserId`, item.userId);
      this.$nextTick(function() {
        this.list.forEach(el => {
          el.active = false;
        });
        this.$set(item, 'active', true);
      });
    },
    onScroll: function(item, position) {
      this.$nextTick(function() {
        this.boxHeight = this.$el.getElementsByTagName('ul')[0].clientHeight;
        if (this.staticAllist >= (this.boxHeight - position.scrollTop)) {
          this.i++;
          this.addAllList();
        };
      });
    },
    updateAllList() {
      this.i = 1;
      this.list = [];
      this.addAllList();
    },
    addAllList() {
      this.$ajax.get('/fatburn/ngym/GymMembersAction!listCustomer.zk', {
        params: {
          requstType: 'examTime',
          page: this.i,
          rows: 30,
          type: 'effect'
        }
      })
      .then(function (response) {
        if(response.data.rows.length <= 0){
          this.$el.getElementsByClassName('nomessage')[0].style.display = `block`;
        };
        for(let i = 0; i < response.data.rows.length; i++){
          this.$set(response.data.rows[i], 'active', false);
          this.list.push(response.data.rows[i]);
        };
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
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
  height calc(100vh - 64px - 30px - 14px - 46px)
  overflow auto
  .nomessage
    display none
    line-height 40px
    text-align center
    color #999
  .list-item
    border-bottom 1px solid #ddd
    display flex
    color #666666
    &.active
      background-color #c2e4ee !important
    &.unactive
      background-color #ffffff !important  
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
