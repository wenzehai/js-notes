<template>
  <div id="app">
    <van-cell-group>
      <van-cell class="listBox" v-for="(item, index) in List" >
        <img class="headImg" :src="item.imageURL"/>
        <span class="user">{{item.user}}</span>
        <span class="type">类型：{{item.type}}</span>
        <span class="money">
          <span class="num add minus">{{item.num}}</span><span class="sep">|</span>
          <span class="rest">余{{item.rest}}</span>
        </span>
        <span class="time">{{item.time}}</span>
      </van-cell>
    </van-cell-group>

  </div>
</template>

<script>
import { Cell, CellGroup, Icon, Card,Button } from 'vant';

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Card.name]: Card,
    [Button.name]: Button
  },
  data:function () {
    return {
      List:[{
        user:'张三',
        type:'发起认购',
        num:-200,
        rest:587878.00,
        time:'2017-01-01 09:09:00',
        imageURL:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
      },
        {
          user:'李四',
          type:'发起认购',
          num:-500,
          rest:2587.00,
          time:'2017-01-01 09:07:00',
          imageURL:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
        },
        {
          user:'张三',
          type:'出售认购',
          num:+200,
          rest:45124.00,
          time:'2017-01-01 09:06:00',
          imageURL:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
        },],
        add:true,
        minus:true
    }
  }
};
</script>

<style>

/*原生形式*/

.van-cell-group {
  padding-left: 15px;
  background-color: #fafafa;
}
.listBox {
  width: 100%;
  background: #fafafa;
  height: 80px;
  position: relative;
  border-bottom: 1px solid #e9e9e9;
  margin-top: 10px;
}
.headImg {
  width: 50px;
  height:50px;
  border-radius: 50%;
  border: 1px solid #d4d4d4;
  overflow: hidden;
  top: 15px;
  left: 0;
  position: absolute;
}

.listBox .user {
  position: absolute;
  left: 65px;
  top: 18px;
  font-size:14px;
  width: 45%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
  text-align: left;
}
.listBox .type {
  position: absolute;
  left: 65px;
  top: 40px;
  font-size:12px;
  color: #666;
}
.listBox .add {
  color: #f8d03b;
}
.listBox .minus {
  color: #f83418;
}
.listBox .time {
  position: absolute;
  right: 15px;
  top: 40px;
  font-size:12px;
  color: #666;
}
.listBox .money {
  position: absolute;
  right: 15px;
  top: 18px;
  font-size:12px;
  color: #0cc74f;
  background: #fafafa;
}
.listBox .money .sep {
  margin: 0 6px;
}

body {
  background-color: #f8f8f8;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
</style>
