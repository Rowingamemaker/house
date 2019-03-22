<template>
    <!-- 
    说明：搜索框
    作者：王巽
    邮箱：wongxun@qq.com
    -->
    <div class="search" v-if="isShow">

      <!-- 搜索框左边的部分，显示当前地理位置 -->
      <div class="left-search" v-show="showLeft">
        <button>
          济南市
          <!-- 小图标 -->
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </button>
      </div>

      <!-- 搜索框中间部分，输入内容 -->
      <div class="in-search-box">
        <!-- 文本框分别绑定获取焦点和失去焦点事件 -->
        <input :class=[tipsClass,inputClass] ref="search" type="text" 
        v-model=inTips @focus="isfocus" @blur="isblur"/>
        <!-- 小图标 -->
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>

      <!-- 搜索框右边部分，搜索按钮 -->
      <div class="right-search" v-show="showRight">
        <button><i class="fa fa-map-marker" aria-hidden="true"></i>地图找房</button>
      </div>
    </div>
</template>

<script>
export default {
    name: "SEARCH",
    props: ['struct','tips'],
    data() {
        return {
            inTips: this.tips,
            //tips字体颜色样式
            tipsClass: "tipsColor",
            // 控制左、右边组件的显示
            showLeft: true,
            showRight: true,
            // input组件在不同结构下显示的样式
            inputClass: 'inputText',
            // 搜索框的隐藏
            isShow: true
        }
    },
    methods: {
        isfocus() {
          this.$router.push("/search")
          if(this.inTips === this.tips) {
              this.inTips = ""
              this.tipsClass = "tipsColorActive"
          }
          // 获取焦点后选中文本框中的文字
          this.$refs['search'].select()
        },
        isblur() {
            if(this.inTips.length === 0) {
                this.inTips = this.tips
                this.tipsClass = "tipsColor"
            }
        }
    },
    mounted() {
      // 判断用户将会如何设置搜索框
      if(this.struct == "simple") {
        this.showLeft = false
        this.showRight = false
        this.inputClass = "inputTextSimple"
        return 0
      }else if(this.struct == "noRight") {
        this.showRight = false
        this.inputClass = "inputTextNoRight"
        return 0
      }else if(this.struct == "full") {
        this.inputClass = "inputTextFull"
        return 0
      }
      else {
        this.isShow = false
        console.error("目前仅支持full、simple、noRight")
        return -1
      }
    }
}
</script>

<style scoped>
.search {
  height: 4em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.2em;
}
/* 搜索框 */
.in-search-box {
  position: relative;
  display: flex;
  align-items: center;
}
/* 地图图标 */
.fa-map-marker {
  color: #fe9112;
  margin-right: 0.5rem;
  font-size: 1.5em;
}
.left-search>button,.right-search>button {
  border: none;
  outline: none;
  height: 2rem;
}
.left-search>button {
  background-color: #ffffff;
  width: 5em;
}
.right-search>button {
  padding-right: 0.5em;
  background-color: #f2f2f2;
  border-radius: 0em 0.5em 0.5rem 0em;
  width: 7em;
}
/* 简单结构下搜索框的样式 */
.inputTextSimple {
  border: none;
  height: 2rem;
  outline: none;
  text-indent: 3em;
  background-color: #f2f2f2;
  border-radius: 1em;
  padding: 0em;
  width: 50vw;
  
}
/* 取消右边结构的样式 */
.inputTextNoRight {
   border: none;
  height: 2rem;
  outline: none;
  text-indent: 3em;
  background-color: #f2f2f2;
  border-radius: 0.3em;
  padding: 0em;
  width: 70vw;
}
/* 搜索框样式 */
.inputTextFull {
  border: none;
  height: 2rem;
  outline: none;
  text-indent: 3em;
  background-color: #f2f2f2;
  border-radius: 0.5em 0em 0rem 0.5em;
  padding: 0em;
  width: 40vw;
}
.in-search-box>i {
  position: absolute;
  left: 0.8em;
  color: #666666;
}
.tipsColor {
    color: #949494;
}
.tipsColorActive {
    color: #000000;
}

</style>


