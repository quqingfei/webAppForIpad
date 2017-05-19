<template>
<div>
  <div class="title">
    <span class="text"><i><img :src="headImg" height="52" width="52"></i><span>体测次数</span><em>{{bodyExamCount}}次</em></span>
  </div>
  <div class="alllist"  v-scroll="onScroll">
    <ul>
      <li class="list-item" :class="{'active':item.active,'unactive':!item.active}" v-for="(item, $index) in lists" @click="emitMyEvent(item, $index)">
        <div class="header-img">
          <div class="source">{{item.score.toFixed(0)}}</div>
          <div class="text">综合评分</div>
        </div>
        <div class="list-detial">
          <div class="list_detial_left">
            <div class="list_detial_left_top">昵称：{{nickName}}</div>
            <div class="list_detial_left_bot">电话：{{phone}}</div>
          </div>
          <div class="list_detial_right">
            <div class="list_detial_right_top"><span>姓名：{{realName}}</span><img src="./man.png" alt="" /></div>
            <div class="list_detial_right_bot">{{item.examTime | times}}</div>
          </div>
        </div>
      </li>
      <li class="nomessage">没有数据了</li>
    </ul>
  </div>
</div>
</template>

<script>
  export default {
  data() {
    return {
      head: '2016419-141212538.png',
      imgt: '/fatburn/file/FileCenter!showImage2.zk?name=',
      i: 1,
      lists: [],
      realName: '-',
      nickName: '-',
      phone: '-',
      headIcon: null,
      bodyExamCount: 0
    };
  },
  created() {
    this.isTrue();
  },
  computed: {
    oneText() {
      return this.$store.state.oneText;
    },
    headImg() {
      return this.imgt + this.headIcon + `&style=33h_33w_0e`;
    }
  },
  methods: {
    isTrue() {
      if(this.oneText === ``){
        return false;
      };
      let data = {
        requstType: 'examTime',
        page: this.i,
        rows: 30,
        type: 'effect'
      };
      if(typeof (this.oneText) === `number`){
        data.phone = this.oneText;
      } else {
        data.nickName = this.oneText;
      }
      this.$ajax.get('/fatburn/ngym/GymMembersAction!listCustomer.zk', {
        params: data
      }).then(response => {
        if(response.data.rows.length <= 0){
          this.headIcon = this.head;
          this.$el.getElementsByClassName('nomessage')[0].style.display = `block`;
        }
        if(response.data.STATUS){
          let self = response.data.rows[0];
          this.realName = self.realName;
          this.nickName = self.nickName;
          this.phone = self.phone;
          this.headIcon = self.headIcon ? self.headIcon : this.head;
          this.$ajax.get('/fatburn/ngym/GymBodyExamAction!list.zk!list.zk', {
            params: {userId: response.data.rows[0].userId, orderByDesc: 'gmtCreate'}
          }).then(res => {
            this.bodyExamCount = res.data.bodyExamCount;
            for(let i = 0; i < res.data.rows.length; i++){
              this.$set(res.data.rows[i], 'active', false);
              this.lists.push(res.data.rows[i]);
            };
          });
        }else{
          if(response.data.ERROR === `未登录`){
            alert(`请重新登陆！`);
          }
        }
      });
    },
    onScroll(item, position) {
      this.$nextTick(function() {
        this.boxHeight = this.$el.getElementsByTagName('ul')[0].clientHeight;
        if (this.staticAllist >= (this.boxHeight - position.scrollTop)) {
          this.i++;
          this.isTrue();
        };
      });
    },
    emitMyEvent(item, index) {
      this.$nextTick(function() {
        this.lists.forEach(el => {
          el.active = false;
        });
        this.$set(item, 'active', true);
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
  height calc(100vh - 64px - 30px - 14px - 46px)
  overflow auto
  .nomessage
    line-height 40px
    text-align center
    display none
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
        color #49badc
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
