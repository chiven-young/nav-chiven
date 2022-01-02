<template>
  <div class="nav-list">
    <div class="section-title">热门</div>
    <a id="navstar"></a>
    <img src="../../assets/logo.png">
    <n-grid cols="1 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
      <n-grid-item v-for="item in navData.webNavList" v-bind:key="item.index" class="card-content">
        <img :src="item.imgUrl" class="card-img"/>
        <div class="card-info">
          <div class="card-title">{{item.title}}</div>
          <div class="card-desc">{{item.desc}}</div>
        </div>
      </n-grid-item>
    </n-grid>
  </div>
  <n-back-top :right="100" />
</template>

<script setup>
import { reactive,onMounted} from 'vue'
import axios from 'axios'

const navData = reactive({
    webNavList: [],
    webNavAll: [],
});
const getNavListData = async ()=>{
    axios
    .get('../src/assets/json/navlist.json')
    .then(response => (navData.webNavList = response.data.navList))
    .catch(function (error) { // 请求失败处理
        console.log(error);
    });
    console.log('获取数据get=============');
    console.log('打印数据=====',this.navDava.webNavList);
};
// const getWebNav = async ()=>{
//     let result = await axios.post('/src/assets/json/navlist.json', {})
//     let list = result;
//     navData.webNavAll = list;
//     console.log('获取数据post=============')
// };
onMounted(()=>{
    getNavListData();
    // getWebNav();
    console.log('mounted=============')
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.nav-list {
    padding: 16px 8px;
}
.section-title {
  font-size: 26px;
  padding: 16px 0;
}
.card-content {
  height: 80px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
  cursor: pointer;
  margin: 8px;
  position: relative;
  outline: 1px solid rgba(128,128,128,0.1);
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
.card-content:hover {
  box-shadow: 2px 2px 18px rgba(128,128,128,0.5);
}
.card-img {
    display: inline-block;
    height: 36px;
    width: 36px;
    border-radius: 50%;
}
.card-info {
  width: auto;
  display: inline-block;
  padding: 8px;
}
.card-title {
  font-size: 14px;
}
.card-desc {
  font-size: 12px;
  opacity: 0.6;
  overflow: hidden;
  white-space: nowrap;
}
</style>