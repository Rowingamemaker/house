<template>
    <div id="my">
        <div class="mytop">
            <div class="use-box">
                <div class="use-head"></div>
                <div class="use-mes">
                    <p>编辑个人资料</p>
                    <p>积分: 8571&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;余额: 8572</p>
                </div>
            </div>
        </div>
        <div class="mytool">
            <div>

                <ul>
                    <li><a href="#"></a>房租</li>
                    <li @click="repair"><a href="#"></a>保洁与报修</li>
                    <li><a href="#"></a>看房行程</li>
                    <li><a href="#"></a>租约管理</li>
                </ul>

            </div>
        </div>
        <div class="mybody">
            <ul>
                <router-link tag="li" to="/lock">
                    <span><span></span>我的门锁</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </router-link>

                <router-link tag="li" to="/order">
                    <span><span></span>我的订单</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </router-link>

                <router-link tag="li" to="/collect">
                    <span><span></span>我的收藏</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </router-link>
                
                <router-link tag="li" to="/landlord">
                    <span><span></span>我是房东</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </router-link>

                <router-link tag="li" to="/staff">
                    <span><span></span>我是员工</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </router-link>

                <router-link tag="li" to="/Coupon">
                    <span><span></span>优惠券与红包</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </router-link>

                <router-link tag="li" to="my/evaluate">
                    <span><span></span>评价管理</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </router-link>

                <router-link tag="li" to="my/history">
                    <span><span></span>最近预览</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </router-link>
                
                
                <router-link tag="li" to="/service">
                    <span><span></span>在线客服</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </router-link>
                
            </ul>
        </div>
    </div>
</template>

<script>
// tabbar
import TABBAR from '../components/Tabbar.vue'
export default {
    name: "My",
    components: {
        "tabbar": TABBAR,
    },
    methods: {
        repair() {
            this.$router.push('/repair')
        }
    }
}
</script>


<style scoped>
a{
    text-decoration: none;
    color: black;
    display: block;
    width: 2.5em;
    height: 2.5em;
    margin-bottom: 1em;
}
.mytop {
    height: 13em;
    background-color: beige;
    display: flex;
    justify-content: center;
}
.mytool {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 10em;
}
.mytool>div {
    width: 95%;
    height: 6em;
    background-color: white;
    border-radius: 0.5em;
    box-shadow:0px 0px 8px rgb(236, 236, 236);
}
.mytool>div>ul {
    list-style: none;
    padding-left: 0em;
    display: flex;
    justify-content: space-around;
    
}
.mytool>div>ul>li {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8em;
}
.mytool>div>ul>li:nth-child(1)>a {
    background-image: url('../assets/my-icon/房租.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 0;
}
.mytool>div>ul>li:nth-child(2)>a {
    background-image: url('../assets/my-icon/报修.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 0;
}
.mytool>div>ul>li:nth-child(3)>a {
    background-image: url('../assets/my-icon/行程.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 0;
}
.mytool>div>ul>li:nth-child(4)>a {
    background-image: url('../assets/my-icon/租约.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 0;
}
.use-box {
    margin-top: 3em;
    display: flex;
}
.mybody {
    background-color: rgb(255, 255, 255); 
}
.mybody>ul {
    padding-top: 4em;
    list-style: none;
    padding-left: 1em;
    padding-right: 1em;
    margin-top: 0em;
}
.mybody>ul>li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1px solid rgb(233, 233, 233);
    padding: 1em 0.5em;
}
.mybody>ul>li:last-child {
    margin-bottom: 6em;
    border: none;
}
.mybody>ul>li>span {
    display: flex;
    align-items: center;
}
.mybody>ul>li>span>span {
    display: block;
}
.mybody>ul>li:nth-child(1)>span>span {
    background-image: url('../assets/my-icon/门锁.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 0;
    margin-right: 1em;
    width: 1.5em;
    height: 1.8em;
}
.mybody>ul>li:nth-child(2)>span>span {
    background-image: url('../assets/my-icon/订单.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 0;
    margin-right: 1em;
    width: 1.5em;
    height: 1.8em;
}
.mybody>ul>li:nth-child(3)>span>span {
    background-image: url('../assets/my-icon/我的收藏.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 0;
    margin-right: 1em;
    width: 1.6em;
    height: 1.6em;
}
.mybody>ul>li:nth-child(4)>span>span {
    background-image: url('../assets/my-icon/认证房东.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 0;
    margin-right: 1em;
    width: 1.6em;
    height: 1.8em;
}
.mybody>ul>li:nth-child(5)>span>span {
    background-image: url('../assets/my-icon/我的收藏.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 0;
    margin-right: 1em;
    width: 1.6em;
    height: 1.6em;
}
.mybody>ul>li:nth-child(6)>span>span {
    background-image: url('../assets/my-icon/优惠券(1).png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 0;
    margin-right: 1em;
    width: 1.6em;
    height: 1.25em;
}
.mybody>ul>li:nth-child(7)>span>span {
    background-image: url('../assets/my-icon/评价(1).png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 0;
    margin-right: 1em;
    width: 1.6em;
    height: 1.8em;
}
.mybody>ul>li:nth-child(8)>span>span {
    background-image: url('../assets/my-icon/最近浏览.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 0;
    margin-right: 1em;
    width: 1.6em;
    height: 1.7em;
}
.mybody>ul>li:nth-child(9)>span>span {
    background-image: url('../assets/my-icon/客服(1).png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 0;
    margin-right: 1em;
    width: 1.6em;
    height: 1.7em;
}
.mybody>ul>li:active {
    background-color: rgb(246, 248, 248);
}
.use-head {
    width: 5em;
    height: 5em;
    background-color: #256;
    border-radius: 50%;
    margin-right: 1em;
}
</style>

