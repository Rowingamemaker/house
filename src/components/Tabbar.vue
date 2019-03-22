<template>
<!-- 底部导航 -->
    <div class="tabbar">

      <ul class="tabbar-items">
        <li v-for="(item,index) in tabbarItem" :key="index" @click="hoge(index)">
          <a href="#">
            <img :src="active !== index?item.icon:item.selectIcon" alt="">
            <span>{{item.text}}</span>
          </a>
        </li>
      </ul>

    </div>
</template>

<script>
export default {
  name: "TABBAR",
  data() {
    return {
      tabbarItem: [
        {
          text: "首页",
          icon: require("../assets/tabbar-icon/home.png"),
          selectIcon: require("../assets/tabbar-icon/home-active.png")
        },
        {
          text: "我的",
          icon: require("../assets/tabbar-icon/my.png"),
          selectIcon: require("../assets/tabbar-icon/my-active.png")
        }
      ],
      active: 0
    }
  },
  methods: {
    hoge(index) {
      this.active = index
      if(index == 0) {
        this.$router.push('/home')
      }else {
        this.$router.push('/my')
      }
    }
  }
}
</script>


<style scoped>
/*底部导航布局 */
.tabbar {
    border-top: 0.1px solid rgb(187, 186, 186);
    width: calc(100vw);
    position: fixed;
    bottom: 0rem;
    padding: 0.5rem 0rem;
    background-color: rgb(255, 255, 255);
}
/* 底部导航中元素的样式 */
.tabbar-items {
    list-style: none;
    margin: 0rem;
    padding-left: 0rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.tabbar-items>li>a {
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: rgb(49, 49, 49);
    font-size: 0.9rem;
}
.tabbar-items>li>a>img {
    width: 1.2rem;
    margin-bottom: 0.2rem;
}
.release {
    transform: scale(2.3);
}
</style>

