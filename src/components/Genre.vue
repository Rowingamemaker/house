<template>
    <!-- 
    说明：分类组件
    作者：王巽
    邮箱：wongxun@qq.com
    -->
    <div class="genre">
      <div class="genre-item" 
        v-for="(item,index) in genreItem" 
        :key="index">
        <img :src="item.icon"/>
        {{item.name}}
      </div>
      
    </div>
</template>

<script>
export default {
    name: "GENRE",
    data() {
        return {
            genreItem: [{
                name: "公寓",
                icon: require('../assets/genre-icon/gongyu.png')
            },{
                name: "整租",
                icon: require('../assets/genre-icon/zhengzu.png')
            },{
                name: "合租",
                icon: require('../assets/genre-icon/hezu.png')
            },{
                name: "发布房源",
                icon: require('../assets/genre-icon/fabu.png')
            }]
        }
    }
}
</script>

<style scoped>
.genre {
  margin-top: 0.3em;
  display: flex;
  justify-content:space-evenly;
}
.genre-item {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.genre-item>img {
  display: block;
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.3em;
}
</style>


