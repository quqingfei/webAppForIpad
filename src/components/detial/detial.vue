<template>
<div style="position:relative">
  <transition name="fade">
  <div class="detial" :class="dldl">
      <div class="detail-wrapper clearfix">
          <div class="detail-main">
             <div class="tctcenter">体质评级等级说明</div>
                  <div class="ctexplan" style="color: #d0cfd1;">体质评级是根据人体的BMI、水分、心率、肺活量等各项身体数据进行的评级，由低到高，共分为心肺减脂、增肌塑形、功能进阶、专业巩固四个等级。</div>
                  <div class="ctelev">
                      <div class="letit speap">体测评级分级</div>
                      <div class="speap deepvlue">LV.1 心肺减脂阶段 </div>
                      <div class="speap deepvlue">LV.2 增肌塑形阶段 </div>
                      <div class="speap deepvlue">LV.3 功能进阶阶段 </div>
                      <div class="speap deepvlue">LV.4 专业巩固阶段 </div>
                  </div>
                  <div class="ctexplan">当通过LV.1心肺减脂及LV.2增肌塑形两个训练阶段后，您才可以具备进行高级阶段的晋级。同时会根据您的数据评估，为您推荐2个高级训练阶段进行选择，选择LV.3或LV.4，作为身体发展的方向。</div>

          <div class="ctexplan">LV.3 功能性进阶：发展身体综合素质，包括（爆发、平衡、协调、灵敏、反应、速度）配合相应运动技术从而提高运动表现。例：篮球运动及羽毛球运动等需要具备的是人体综合素质而非肌肉力量与体积。</div>

          <div class="ctexplan">LV.4 专业巩固阶段：发展身体的心肺功能及肌肉力量与耐力、柔韧性，并控制身体成分、将人体的肌肉通过艺术的形式展现出来。例：传统健美、古典健美、女子健身小姐、女子比基尼健身等。</div>
          </div>
      </div>
      <div class="detail-close" @click="shwoExplan(explanShow)"><img src="./close.png" class="tcclose"></div>
  </div>
  </transition>
  <div class="title">
    <span class="text">体测时间：</span>
    <span class="icondate">
        <span @click="shwoDetial(detailShow)">2017-05-03 10:30:07</span>
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
  <div class="rightitem">
    <div class="detial-right">
      <div class="top">
        <div class="head">
              <svg id="tablet-loader" width="128" height="128" viewBox="-12.5 -12.5 450 450" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="red" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#efefef" stroke-linecap="round" stroke-dasharray="1327" stroke-dashoffset="0" stroke-width="30" d="M212.2,1.8 C268.528634,1.8 321.511013,23.7365639 361.480176,63.5198238 C401.263436,103.303084 423.2,156.285463 423.2,212.8 C423.2,269.128634 401.263436,322.111013 361.480176,362.080176 C321.696916,401.863436 268.714537,423.8 212.2,423.8 C155.685463,423.8 102.888987,401.863436 62.9198238,362.080176 C23.1365639,322.296916 1.2,269.314537 1.2,212.8 C1.2,156.471366 23.1365639,103.488987 62.9198238,63.5198238 C102.888987,23.7365639 155.871366,1.8 212.2,1.8"></path></g>
            <g stroke="red" stroke-width="1" fill="none" fill-rule="evenodd"><path id="tablet-circle" data-length="1327" stroke="#49badc" stroke-linecap="round" 
            stroke-dasharray="1327" stroke-dashoffset="500" stroke-width="30" d="M212.2,1.8 C268.528634,1.8 321.511013,23.7365639 361.480176,63.5198238 C401.263436,103.303084 423.2,156.285463 423.2,212.8 C423.2,269.128634 401.263436,322.111013 361.480176,362.080176 C321.696916,401.863436 268.714537,423.8 212.2,423.8 C155.685463,423.8 102.888987,401.863436 62.9198238,362.080176 C23.1365639,322.296916 1.2,269.314537 1.2,212.8 C1.2,156.471366 23.1365639,103.488987 62.9198238,63.5198238 C102.888987,23.7365639 155.871366,1.8 212.2,1.8"></path></g>
            </svg>
            <div class="headicon"><img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg" height="500" width="500"></div>
        </div>
        <div class="headdetial">
          <div class="source">
            <span class="text">综合评分：<font class="bule">100分</font></span>
            <span class="righttext">体质评级：LV.1 <i @click="shwoExplan(explanShow)"></i></span>
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
    <div class="bodylist">
      <v-list :item="item"></v-list> 
    </div>
    <div class="titlelist">
      基本身体成分 <span class="blue">偏低</span>
    </div>
    <div class="bodylist bg">
      <div class="heart">
        <span class="text xinglv">静态心率</span><span class="num">66</span>
      </div>
      <div class="font">
        静态心率又称为安静心率，是指在清醒、不活动的安静静态状下，每分钟心跳次数
      </div>
      <div class="chartline">
        <v-line>
          <div slot="title">评估建议：</div>
          <div slot="text">静态心率又称为安静心率，是指在清醒、不活动的安静静态状下，每分钟心跳次数</div>
        </v-line>
      </div>
    </div>
    <div class="titlelist">
      运动安全血压 <span class="yellow">偏高</span>
    </div>
    <div class="bodylist bg">
      <div class="heart">
        <span class="text shousuo">收缩压</span><span class="num">114</span>
      </div>
      <div class="font">
        收缩压就是当心脏收缩时，动脉内的压力最高，此时内壁的压力称为收缩压，收缩压≤120mmHg称为理想血压＜90mmHg(12kpa)
      </div>
      <div class="chartline">
        <v-line></v-line>
      </div>
    </div>
    <div class="bodylist bg">
      <div class="heart">
        <span class="text shuzhang">舒张压</span><span class="num">70</span>
      </div>
      <div class="font">
        舒张压就是当心脏舒张时，动脉血管弹性回缩时，产生的压力称为舒张压，又叫低压。成人正常的舒张压＜90mmHg(12kpa)
      </div>
      <div class="chartline">
        <v-line>
          <div slot="zhanwei"><br><br><br></div>
          <div slot="title">评估建议：</div>
          <div slot="text">舒张压就是当心脏舒张时，动脉血管弹性回缩时，产生的压力称为舒张压，又叫低压。成人正常的舒张压＜90mmHg(12kpa)</div>
        </v-line>
      </div>
    </div>
    <div class="titlelist">
      体重控制
    </div>
    <div class="wcontrcl">
      <div class="itemw">
        <div class="value">65.8kg</div>
        <div class="key">理想体重</div>
      </div>
      <div class="itemw">
        <div class="value">65.8kg</div>
        <div class="key">体重控制</div>
      </div>
      <div class="itemw">
        <div class="value">65.8kg</div>
        <div class="key">脂肪控制</div>
      </div>
      <div class="itemw">
        <div class="value">65.8kg</div>
        <div class="key">肌肉控制</div>
      </div>      
    </div>
    <div class="titlelist">
      体重控制
    </div>
    <div class="iid">
      <div class="square fat1">
          <div class="content">隐形肥胖型</div>
      </div>
      <div class="square center fat2">
          <div class="content">偏胖型</div>
      </div>
      <div class="square fat3">
          <div class="content">肥胖型</div>
      </div>
      <div class="square fat4">
          <div class="content">偏瘦肌肉型</div>
      </div>
      <div class="square center fat5">
          <div class="content">标准型</div>
      </div>
      <div class="square fat6">
          <div class="content">非常肌肉型</div>
      </div>
      <div class="square fat7">
          <div class="content">偏瘦型</div>
      </div>
      <div class="square center fat8">
          <div class="content">标准肌肉型</div>
      </div>
      <div class="square fat9">
          <div class="content">运动不足型</div>
      </div>
    </div>
    <div class="titlelist">
      近7次体测数据
    </div>
    <div class="chartline">
      <div class="linetitle">
          <div class="lineitem">
            <div class="item item0">体重</div>
          </div>
          <div class="lineitem">
            <div class="item item1">心率</div>
          </div>
          <div class="lineitem">
            <div class="item item2">血压</div>
          </div>
          <div class="lineitem">
            <div class="item item3">肌肉占比</div>
          </div>
      </div>
      <div class="chart">
        line-chart
      </div> 
    </div>
    <div class="titlelist">
      近期体测照片：
    </div>
    <div class="picturebox">
      <div class="pictured">            
        <div class="seee">
          <table>
            <tbody>
              <tr>
                <td onclick="indes($(this))"><i class="">11/8</i><img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg" height="74" width="74"></td>
                <td onclick="indes($(this))"><i class="cilic">11/8</i><img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg" height="74" width="74"></td>
                <td onclick="indes($(this))"><i class="cilic">11/8</i><img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg" height="74" width="74"></td>
                <td onclick="indes($(this))"><i class="cilic">11/8</i><img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg" height="74" width="74"></td>
                <td onclick="indes($(this))"><i class="cilic">11/8</i><img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg" height="74" width="74"></td>
                <td onclick="indes($(this))"><i class="cilic">11/8</i><img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg" height="74" width="74"></td>
                <td onclick="indes($(this))"><i class="cilic">11/8</i><img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg" height="74" width="74"></td>
                <td onclick="indes($(this))"><i class="cilic">11/8</i><img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg" height="74" width="74"></td>
                <td onclick="indes($(this))"><i class="cilic">11/8</i><img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg" height="74" width="74"></td>
                <td onclick="indes($(this))"><i class="cilic">11/8</i><img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg" height="74" width="74"></td>
                <td onclick="indes($(this))"><i class="cilic">11/8</i><img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg" height="74" width="74"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="bighead">
        <img src="http://zkfilecenter.img-cn-hangzhou.aliyuncs.com/zkFiles/2016128/2016128-103545872.jpg@_1wh.jpg">
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
  import vList from '@/components/list/list';
  import vLine from '@/components/line/line';
  export default {
    data() {
      return {
        detailShow: false,
        explanShow: false,
        rotere: null,
        dldl: null,
        item: {
          type: Object
        }
      };
    },
    computed: {
      userId() {
        return this.$store.state.userId;
      }
    },
    watch: {
      userId: function(val, oldVal){
        console.log('new: %s, old: %s', val, oldVal);
        this.$ajax.get('/fatburn/ngym/GymBodyExamAction!list.zk!list.zk', {
          params: {userId: val, orderByDesc: 'gmtCreate'}
        }).then(res => {
          this.item = res.data;
          console.log(res);
        });
      }
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
      },
      shwoExplan(data) {
        if(data) {
          this.explanShow = false;
          this.dldl = null;
        }else{
          this.explanShow = true;
          this.dldl = `shiw`;
        };
        console.log(this.explanShow);
      }
    },
    components: {
      vList,
      vLine
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
      z-index 100
      transition all 0.2s
      &.fade-leave, &.fade-enter-active
        opacity 1
        top 0px
      &.fade-enter, &.fade-leave-active
        top -5px
        opacity 0
      li
        border-bottom 1px solid #ddd
.rightitem
  height: 81vh;
  overflow: auto;
  .detial-right
    padding-top 34px
    border-bottom 1px solid #ccc
    background-color white
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
    margin-left 15px
    height 50px
    line-height 50px
    .green
      color #3fc371  
      margin-left 4px
    .blue
      color #49badc  
      margin-left 4px 
    .yellow
      color #ffbd24  
      margin-left 4px   
  .bodylist
    margin 0 10px
  .bg
    background-color white  
    .heart
      padding 6px
      height 30px
      line-height 30px
      .text
        display inline-block
        height 100%
        padding-left 49px
        font-size 15px
        color #666
        &.xinglv
          background url('./kicon.png') 10px center no-repeat
          background-size 30px 30px
        &.shousuo
          background url('./micon.png') 10px center no-repeat
          background-size 30px 30px
        &.shuzhang
          background url('./nicon.png') 10px center no-repeat
          background-size 30px 30px  
      .num
        font-size 15px
        color #333
        font-weight bold
        margin-left 20px
    .font
      font-size 12px
      color #333
      margin 23px 18px 0 18px
    .chartline
      margin 67px 10px 0 10px
  .wcontrcl
    background-color white
    display flex
    height 105px
    text-align center
    font-size 14px
    margin 0 10px
    .itemw
      flex 1
      .value
        border 1px solid #49badc
        color #49badc
        width 73px
        height 22px
        margin 30px auto 8px auto
        line-height 22px
        border-radius 2px
      .key
        color #333
  .iid
    font-size 0
    position relative
    overflow hidden
    margin 0 10px
    .square
      display inline-block
      position relative
      width 32.3%
      background #fff
      margin-bottom 7px
      &.center
        margin-right 7px
        margin-left 7px
      &.fat1
        background #fff url('./yxfat_03.png') center 30% no-repeat
        background-size 44%
      &.fat2
        background #fff url('./sf_03.png') center 30% no-repeat
        background-size 44%
      &.fat3
        background #fff url('./f_03.png') center 30% no-repeat
        background-size 44%
      &.fat4
        background #fff url('./solean_03.png') center 30% no-repeat
        background-size 44%
      &.fat5
        background #fff url('./lean_03.png') center 30% no-repeat
        background-size 44%
      &.fat6
        background #fff url('./mm_03.png') center 30% no-repeat
        background-size 44%
      &.fat7
        background #fff url('./b_03.png') center 30% no-repeat
        background-size 44%
      &.fat8
        background #fff url('./bm_03.png') center 30% no-repeat
        background-size 44%
      &.fat9
        background #fff url('./sportdie_03.png') center 30% no-repeat
        background-size 44%                
      &:after
        content ""
        display block
        padding-bottom: 100%
      .content
        position absolute
        color #333
        font-size 16px
        width 100%
        text-align center
        bottom 6%
        color #999
  .chartline
    margin 0 10px
    background-color white
    color #999
    font-size 14px
    .linetitle
      overflow hidden
      width 100%
      padding-top 22px
      padding-bottom 22px
      .lineitem
        float left
        width 25%
        .item
          width 75px
          height 26px
          background-color #efefef
          text-align center
          line-height 26px
          margin 0 auto
          border-radius 2px
          &.item0
            color white
            background-color #ffbc3a
          &.item1
            color white
            background-color #17e277
          &.item2
            color white
            background-color #17dee1
          &.item3
            color white
            background-color #e23d17
    .chart
      height 270px
      text-align center
      line-height 270px
      color #666
      font-size 40px
  .picturebox 
    margin 0 10px
    background-color white
    padding 8px
    .pictured
      .seee
        overflow-y hidden
        width 100%
        margin-bottom 6px  
        td
          position relative
          margin-right 6px
          i
            position absolute
            width 74px
            height 74px
            background rgba(0,0,0,0.6)
            text-align center
            line-height 124px
            font-size 16px
            color #ccc
            top 0px
            font-style normal
            transition all 0.2s
            &.cilic
              line-height 24px
              top 50px
          img
            width 74px
            height 74px
            display block
            margin-right 6px
  .bighead
    width 100%
    img
      width 100%          
.detial
  position absolute
  width 100%
  z-index 101
  top 0
  left 0
  height 100%
  overflow auto
  display none
  background-color rgba(7,17,27,0.8)
  .detail-wrapper
    min-height 100%
    .detail-main
      padding-bottom 64px
      color white
      .tctcenter
        text-align center
        color #ffbd3b
        font-size 18px
        padding-top 12px
      .ctexplan
        margin 15px 16px 10px 16px
        font-size 14px
        text-align Justify
      .ctelev
        margin 0 16px
        padding 6px 10px
        border 1px dashed #30302f
        border-radius 15px
        .speap
          margin 4px 0
        .letit 
          color #858786
          font-size 14px
        .deepvlue
          color #4d6784
          font-size 14px 
  .detail-close
    position relative
    width 32px
    height 32px
    margin -64px auto 0 auto
    clear both
    text-align center
    color white
    .tcclose
      height 50px
      width 50px
      border-radius 50%
      background rgba(255,255,255,0.1)
      position absolute
      bottom 10px
      left 50%
      margin-left -25px
  .clearfix
    display inline-block
    &:after
      display block
      content "."
      height 0
      line-height 0
      clear both
      visibility hidden 
.shiw
  display block    
</style>
