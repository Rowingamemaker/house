<template>
    <div class="box">
        <div class="search-box">
            <search struct="noRight" tips="小区、商圈、地铁"></search>
            <!-- 热门搜索 -->
            <div class="hot">
                <p>热门搜索</p>
                <div class="hot-list">
                    <span v-for="(item,index) in hotList" :key="index">{{item}}</span>
                </div>
            </div>
        </div>
        <!-- 历史记录 -->
        <div class="history">
            <p>
                搜索历史
                <i class="fa fa-trash" aria-hidden="true"></i>
            </p>
            <ul>
                <li>幸福</li>
                <li>幸福</li>
            </ul>
        </div>
    </div>
</template>
<script>
//搜索框
import SEARCH from '../components/Search.vue'
export default {
    name: "SEARCH",
    data() {
        return {
            hotList:["一室一厅","一室一厅","一室一厅","一室一厅"]
        }
    },
    components: {
        "search": SEARCH,
    }
}
</script>

<style scoped>
.box {
    background-color: #f3f3f3;
}
.search-box {
    background-color: white;
    margin-top: -0.6em;
}
.hot {
    padding: 0em 1em;
}
.hot>p {
    color: rgb(189, 189, 189);
    margin-bottom: 0.8em;
}
.hot-list {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.hot-list > span {
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    padding: 0.3em 1em;
    background-color: #f3f3f3;
}
.history {
    background-color: white;
    height: 5em;
    margin-top: 0.8em;
    padding: 0.5em 1em;
}
.history>p {
    color: rgb(189, 189, 189);
    margin-top: 0em;
    display: flex;
    justify-content: space-between;
}
.history>ul {
    list-style: none;
    padding-left: 0em;
}
.history>ul>li {
    border-bottom: 0.1px solid rgb(226, 225, 225);
    padding: 1em 0em;
}
</style>


