<template>
<div class="itemlist">
	<ul>
		<li class="itemd" v-for="data in listitem">
      <span class="ime" :class="data.class">{{data.itemName}}</span>
      <span class="cen">{{data.itemValue}}</span>  
      <span>
      <i class="rig green" :class="data.value[0]">{{data.value[1]}}</i>
    <!--   <i class="rig blue">偏低</i>
      <i class="rig yellow">偏高</i> -->
      </span>
    </li>
	</ul>
</div>
</template>

<script>
  export default{
    props: {
      list: null
    },
    computed: {
      listitem() {
        let newlist = [];
        for(let i = 0; i < this.list.length; i++){
          newlist.push({itemName: this.list[i].itemName, itemValue: this.list[i].itemValue, value: this.domain(this.list[i].stateString), class: this.classlist(this.list[i].itemName)});
        }
        return newlist;
      }
    },
    methods: {
      domain(val) {
        let ri = '';
        let res = '';
        switch(val){
            case '严重不足': ri = 'blue'; res = '偏低'; break;
            case '偏低': ri = 'blue'; res = '偏低'; break;
            case '不达标': ri = 'yellow'; res = '超标'; break;
            case '标准': ri = 'green'; res = '标准'; break;
            case '达标': ri = 'green'; res = '标准'; break;
            case '正常': ri = 'green'; res = '标准'; break;
            case '充足': ri = 'green'; res = '充足'; break;
            case '偏高': ri = 'yellow'; res = '偏高'; break;
            case '严重超标': ri = 'yellow'; res = '超标'; break;
            case '严重偏高': ri = 'yellow'; res = '偏高'; break;
        };
        return [ ri, res ];
      },
      classlist(val) {
        let ib = '';
        switch(val){
          case '当前体重(KG)': ib = 'wicon'; break;
          case '体格指数(BMI)': ib = 'bicon'; break;
          case '脂肪': ib = 'cicon'; break;
          case '肌肉': ib = 'dicon'; break;
          case '水分': ib = 'eicon'; break;
          case '蛋白质': ib = 'ficon'; break;
          case '内脏脂肪': ib = 'gicon'; break;
          case '皮下脂肪': ib = 'hicon'; break;
          case '骨量':ib = 'iicon'; break;
          case '基础代谢': ib = 'jicon'; break;
          case '身体年龄': ib = 'oicon'; break;
        }
        return ib;
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
      color #666
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
