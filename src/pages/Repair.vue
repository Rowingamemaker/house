<template>
    <div class="repair">
        <!-- 头部导航 -->
        <mt-header title="保洁与报修">
            <router-link to="/my" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button slot="right">记录</mt-button>
        </mt-header>

        <div class="repair-item">
            <img src="../assets/dataimg/1.png" alt="">
            <div>
                <p>合租</p>
                <p>浦东新区-深江豪宅</p>
                <p>3栋1单元1102</p>
            </div>
        </div>

        <!-- 联系保洁 -->
        <div class="baojie">
            <ul>
                
                <li>
                    <i></i>
                    保洁
                </li>

                <li @click="openPicker">时间</li>

                <!-- 时间选择器 -->
                <mt-datetime-picker
                    ref="picker"
                    type="time"
                    v-model="pickerValue"
                    @confirm="handleConfirm()">
                </mt-datetime-picker>

                <li>详细:</li>
                <li>1
                    <textarea name="message" cols="30" rows="10"></textarea>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    name: "REPAIR",
    data() {
        return {
            pickerValue: '21:23',
            value: {}
        }
    },
    methods: {
        // 打开时间选择器
        openPicker() {
            this.$refs.picker.open()
        },
        handleConfirm() {
            // 消息框
            if(this.pickerValue !== false) {
                Toast({
                    message: this.pickerValue,
                    position: 'middle',
                    duration: 3000
                })
            }else {
                Toast({
                    message: "请选择预约时间",
                    position: 'middle',
                    duration: 4000
                })
            }
        }
    }
}
</script>


<style scoped>
.repair {
    background-color: #eeeeee;
}
.repair-item {
    
    background-color: rgb(255, 255, 255);
    margin-bottom: 0.8em;
    display: flex;
    padding: 1em;
}
.repair-item > img {
    width: 10em;
    height: 8em;
    margin-right: 1em;
}
.repair-item > div > p {
    margin: 0.5em 0em;
}
.repair-item > div > p:nth-child(1) {
    color: #f6a922;
    font-size: 1.6em;
}
.repair-item > div > p:nth-child(2) {
    font-size: 1.1em;
}
.repair-item > div > p:nth-child(3) {
    font-size: 1em;
    color: #666666;
}
/* 联系保洁 */
.baojie {
    background-color: white;
}
.baojie > ul {
    list-style: none;
    padding: 0em 1em;
}

.baojie > ul >li:first-child > i {
    display: block;
    width: 1.4em;
    height: 1.5em;
    margin-right: 0.5em;
    background-image: url('../assets/repair-icon/保洁.png');
    background-repeat: no-repeat;
    background-size: 90% auto;
    background-position: center 0;
}
.baojie > ul >li:first-child {
    display: flex;
    padding-top: 1em;
    align-items: flex-end;
    font-size: 1.3em;
    color: #f6a922;
    padding-bottom: 1.2em;
    border-bottom: 0.1px solid rgb(226, 224, 224);
}

.baojie > ul >li {
    
    padding: 1em 0em;
    border-bottom: 0.1px solid rgb(226, 224, 224);
}

.mint-cell-title {
    color: red;
}
</style>

