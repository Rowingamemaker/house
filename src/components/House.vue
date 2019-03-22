
<template>
    <!-- 
    说明：全部房源展示
    作者：王巽
    邮箱：wongxun@qq.com
    -->
    <div class="house-all">
        <!-- 标题 -->
        <h5>&nbsp;&nbsp;全部房源</h5>
        <!-- 房源列表 -->
        <ul>
          <li v-for="(item,index) in houseData" :key="index">
              <a href="#">

                  <!-- 缩略图 -->
                  <img :src="item.imgURL" alt="">

                  <!-- 房源简介列表 -->
                  <div class="brief">

                      <p>{{item.title}}</p>
                      <p>{{item.acreage}}&sup2;{{item.type}}</p>
                      <p>
                          <!-- fontawesome图标 -->
                          <i class="fa fa-map-marker" aria-hidden="true"></i>
                          {{item.position}}
                      </p>
                      <p><b>{{item.rent}}</b>元/月</p>
                  </div>
              </a>
          </li>
          <!-- 底部等待图标 -->
          <li><mt-spinner v-if="spinner" type="fading-circle"></mt-spinner></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HOUSEALL",
    mounted(){

      //检测用户是否滚动到底部
      window.onscroll = function() {

        if(window.scrollY === (document.body.offsetHeight-424)) {
          console.log("到底了")
        }
      }
    },
    data() {
      return {
        houseData:[
          {   
              //缩略图地址
              imgURL: require("../assets/dataimg/1.png"),
              //标题
              title: "整租-浦东新区-申江豪城",
              //面积
              acreage: "80.0m",
              //户型
              type: "2室1厅1卫",
              //位置
              position: "距离8号线思杨702米",
              //房租
              rent: "7600"
          }
        ],
          
        spinner: true
      }
    },
    methods: {
    }
}
</script>

.<style scoped>
.house-list {
  overflow: scroll;
  height: 10em;
  background-color: #fe9112;
  height: 50vw;
}
/* 组件定位 */
.house-all {
  padding: 0em 0.9em;
  margin-top: -0.2em;
}
.house-all>ul {
  list-style: none;
  padding-left: 0em;
  margin: 0em;
}
.house-all>ul>li>a {
  text-decoration: none;
  color: black;
  display: flex;
}
.house-all>ul>li {
  padding: 0.5em 0em;
  border-bottom: 0.1px solid rgb(233, 233, 233);
}
.house-all>ul>li:last-child {
  margin-bottom: 3.5em;
  display: flex;
  justify-content: center;
  border-bottom: none;
  margin-top: 0.5em;
}
.house-all>ul>li>a>img {
  width: 7em;
  height: 5em;
}
.brief>p {
  margin: 0em;
  padding-left: 3vw;
}
.brief>p:nth-child(1) {
  font-weight: bold;
}
.brief>p:nth-child(2) {
  font-size: 0.5em;
  color: rgb(173, 173, 173);
}
.brief>p:nth-child(3) {
  font-size: 0.5em;
  color: rgb(173, 173, 173);
}
.brief>p:nth-child(4) {
  color: #fe9112;
}
.house-all>h5 {
  font-size: 1.2em;
  letter-spacing: 0.12em;
  line-height: 1.8em;
  margin-bottom: 0.2em;
}
.house-all>h5::before {
  content: "";
  color: #fe9112;
  font-size: 2rem;
  width: 5px;
  height: 0.9em;
  display: block;
  background-color: #fe9112;
  position: absolute;
}
</style>


