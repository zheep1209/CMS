<script setup>
import Home from '@/views/home/home.vue'
import img01 from '@/assets/imgs01/img01.jpg'
import img02 from '@/assets/imgs01/img02.jpg'
import img03 from '@/assets/imgs01/img03.jpg'
import img04 from '@/assets/imgs01/img04.jpg'
import img11 from '@/assets/imgs01/11.jpg'
import b1 from '@/assets/imgs01/书签.png'
import b2 from '@/assets/imgs01/书签2.png'
import b3 from '@/assets/imgs01/回到顶部.png'
import b4 from '@/assets/imgs01/二维码.png'
import b5 from '@/assets/imgs01/二维码2.png'
import b6 from '@/assets/imgs01/投稿.png'
import b7 from '@/assets/imgs01/分享.png'
import b8 from '@/assets/imgs01/分享2.png'
import { ref } from 'vue'

const imgs = [
  img01, img02, img03, img04]
let imgUrl = ref(b1)
const enter = () => {
  imgUrl.value = b2
}
const leave = () => {
  imgUrl.value = b1
}
let url1 = ref(b3)
let s1 = ref('')
let tips1 = ref('')
const enter1 = () => {
  url1.value = ''
  s1.value = 'background-color: #007bff;\n' +
    '    color: white;\n' +
    '    text-align: center;\n' +
    '    box-sizing: border-box;\n' +
    '    padding: 3px;'
  tips1.value = '返回顶部'
}
const leave1 = () => {
  url1.value = b3
  s1.value = ''
  tips1.value = ''
}
const backTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
let isShow = ref(false)
let qrcode = ref(b4)
const enter2 = () => {
  isShow.value = true
  qrcode.value = b5
}
const leave2 = () => {
  isShow.value = false
  qrcode.value = b4
}

let tips2 = ref('')
let s2 = ref('')
let url2 = ref(b6)
const enter3 = () => {
  url2.value = ''
  s2.value = 'background-color: #007bff;\n' +
    '    color: white;\n' +
    '    text-align: center;\n' +
    '    box-sizing: border-box;\n' +
    '    padding: 3px;'
  tips2.value = '立即投稿'
}

const leave3 = () => {
  url2.value = b6
  s2.value = ''
  tips2.value = ''
}
let url3 = ref(b7)
let isShow2 = ref(false)
const enter4 = () => {
  isShow2.value = true
  url3.value = b8
}
const leave4 = () => {
  isShow2.value = false
  url3.value = b7
}


const hots = [
  {
    url: img11,
    text: 'Samsung Galaxy 智能手机'
  }, {
    url: img11,
    text: '奥睿科ORICO HU3温室加湿器'
  }, {
    url: img11,
    text: '智能游戏WIFI无线手柄'
  }, {
    url: img11,
    text: 'Macbook Pro Retina 笔记本'
  }

]
</script>

<template>
  <el-container class="container">
    <el-header class="header">
      <div class="content">

        <el-menu class="menu"
                 mode="horizontal"
        >
          <img class="logo" src="https://cms.demo.fastadmin.net/assets/img/logo-square.svg" alt="">
          <el-menu-item :index=Home>
            <template #title>
              <span class="title">首页</span>
            </template>
          </el-menu-item>
          <el-sub-menu :index=1>
            <template #title>
              <span class="title">新闻中心</span>
            </template>
            <el-menu-item :index=1>
              <template #title>
                <span class="title">硬件</span>
              </template>
            </el-menu-item>
            <el-menu-item :index=2>
              <template #title>
                <span class="title">投资</span>
              </template>
            </el-menu-item>
            <el-menu-item :index=3>
              <template #title>
                <span class="title">安全</span>
              </template>
            </el-menu-item>
            <el-menu-item :index=4>
              <template #title>
                <span class="title">互联网</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu :index=5>
            <template #title>
              <span class="title">产品中心</span>
            </template>
            <el-menu-item :index=5>
              <template #title>
                <span class="title">智能家居</span>
              </template>
            </el-menu-item>
            <el-menu-item :index=5>
              <template #title>
                <span class="title">移动设备</span>
              </template>
            </el-menu-item>
            <el-menu-item :index=5>
              <template #title>
                <span class="title">智能设备</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu :index=6>
            <template #title>
              <span class="title">下载中心</span>
            </template>
            <el-menu-item :index=6>
              <template #title>
                <span class="title">网络工具</span>
              </template>
            </el-menu-item>
            <el-menu-item :index=6>
              <template #title>
                <span class="title">媒体工具</span>
              </template>
            </el-menu-item>
            <el-menu-item :index=6>
              <template #title>
                <span class="title">应用软件</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item :index=7>
            <template #title>
              <span class="title">自定义表单</span>
            </template>
          </el-menu-item>
          <el-menu-item :index=8>
            <template #title>
              <span class="title">单页</span>
            </template>
          </el-menu-item>
          <el-menu-item :index=9>
            <template #title>
              <span class="title">专题</span>
            </template>
          </el-menu-item>
          <el-sub-menu :index=10>
            <template #title>
              <span class="title">更多</span>
            </template>
            <el-menu-item :index=10>
              <template #title>
                <span class="title">百度</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
          <el-input
            v-model="input2"
            style="width: 240px"
            placeholder="Type something"
            :prefix-icon="Search"
          />
          <el-sub-menu :index=11>
            <template #title>
              <span class="title">会员中心</span>
            </template>
            <el-menu-item :index=11>
              <template #title>
                <span class="title">登录</span>
              </template>
            </el-menu-item>
            <el-menu-item :index=12>
              <template #title>
                <span class="title">注册</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </el-header>
    <el-main class="main">
      <div class="mainContent">
        <el-carousel height="340px" motion-blur>
          <el-carousel-item v-for="item in imgs" :key="item">
            <img :src="item" alt="" height="340">
          </el-carousel-item>
        </el-carousel>
        <div class="popularPhotoCollections">
          <div class="header">
            <div class="title">热门图集</div>
            <div class="more">
              <router-link to="/">查看更多</router-link>
            </div>
          </div>
          <div class="cards">
            <div class="card" v-for="item in hots">
              <img class="img" :src=item.url alt="">
              <div class="briefIntroduction">{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div class="lastUpdate">
          <div class="header">
            <div class="title">最近更新</div>
            <div class="more">
              <router-link to="/" v-for="index in 6">网络工具</router-link>
            </div>
          </div>
          <div class="content">
            <div class="card1">
              <img class="img" :src="img11">
              <div class="text">
                <div class="title">奥睿科ORICO HU3温室加湿器</div>
                <div class="content">林诺斯之神才把你铸就，
                  你是惩恶的短剑，自由的秘密卫士，
                  你是最后的法官，仲裁屈辱与冤仇。
                  宙斯的雷若沉默，法律的剑若昏睡，
                  你便会成为化作行动的诅咒和希望，
                  你便在王位的庇护下偷窥，
                  你便在华丽的服饰里潜藏。
                </div>
                <div class="information">
                  <div class="type"><span>硬件</span></div>
                  <div class="is">2024年9月11日21:44:51</div>
                  <div class="is">点赞</div>
                  <div class="is">评论</div>
                  <div class="is">浏览</div>
                </div>
              </div>
            </div>
            <div class="card2">
              <div class="content">
                <div class="title">Leap Motion AR头显看起来很疯狂但可能是奇迹</div>
                <div class="imgs">
                  <img v-for="i in 4" class="img" :src="img11">
                </div>
                <div class="content">林诺斯之神才把你铸就，
                  你是惩恶的短剑，自由的秘密卫士，
                  你是最后的法官，仲裁屈辱与冤仇。
                  宙斯的雷若沉默，法律的剑若昏睡，
                  你便会成为化作行动的诅咒和希望，
                  你便在王位的庇护下偷窥，
                  你便在华丽的服饰里潜藏。
                </div>
                <div class="information">
                  <div class="type"><span>硬件</span></div>
                  <div class="is">2024年9月11日21:44:51</div>
                  <div class="is">点赞</div>
                  <div class="is">评论</div>
                  <div class="is">浏览</div>
                </div>
              </div>
            </div>
            <div class="card1" v-for="i in 7">
              <img class="img" :src="img11">
              <div class="text">
                <div class="title" style="color: black;font-weight: normal">奥睿科ORICO HU3温室加湿器</div>
                <div class="content">林诺斯之神才把你铸就，
                  你是惩恶的短剑，自由的秘密卫士，
                  你是最后的法官，仲裁屈辱与冤仇。
                  宙斯的雷若沉默，法律的剑若昏睡，
                  你便会成为化作行动的诅咒和希望，
                  你便在王位的庇护下偷窥，
                  你便在华丽的服饰里潜藏。
                </div>
                <div class="information">
                  <div class="type"><span>硬件</span></div>
                  <div class="is">2024年9月11日21:44:51</div>
                  <div class="is">点赞</div>
                  <div class="is">评论</div>
                  <div class="is">浏览</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="aside">
        <div class="lastUpdate">
          <div class="header">
            <div class="title">最近更新</div>
          </div>
          <div class="content">
            <p v-for="i in 8">[智能设备] 奥睿科ORICO HU3温室加湿器</p>
          </div>
        </div>
        <img style="padding-bottom: 20px" :src="img02" alt="" width="100%">
        <div class="hotInformation">
          <div class="header">
            <div class="title">热点资讯</div>
          </div>
          <div class="content">
            <div class="top" v-for="(item,index) in 8">
              <div class="rank">
                <span>
                  {{ index + 1 }}
                </span>
              </div>
              <div class="text">
                <router-link to="/" style="color: gray">驰为发布HiGame迷你PC新品 小身材大能量</router-link>
              </div>
            </div>
          </div>
        </div>
        <img style="padding-bottom: 20px" :src="img04" alt="" width="100%">
        <div class="hotTags">
          <div class="header">
            <div class="title">热门标签</div>
          </div>
          <div class="content">
            <div class="rank">Ciallo</div>
            <div class="rank">～(∠・ω<)⌒☆</div>
            <div class="rank">Ciallo</div>
            <div class="rank">～(∠・ω<)⌒☆</div>
            <div class="rank">Ciallo</div>
            <div class="rank">～(∠・ω<)⌒☆</div>
            <div class="rank">～(∠・ω<)⌒☆</div>
            <div class="rank">Ciallo</div>
            <div class="rank">～(∠・ω<)⌒☆</div>
            <div class="rank">Ciallo</div>
            <div class="rank">～(∠・ω<)⌒☆</div>
            <div class="rank">Ciallo</div>

          </div>
        </div>
        <div class="hotInformation">
          <div class="header">
            <div class="title">推荐下载</div>
          </div>
          <div class="content">
            <div class="top" v-for="(item,index) in 8">
              <div class="rank">
                <span>
                  {{ index + 1 }}
                </span>
              </div>
              <div class="text">
                <router-link to="/" style="color: gray"> Pikka 2.0.4 菜单栏屏幕取色器</router-link>
              </div>
            </div>
          </div>
        </div>
        <img style="padding-bottom: 20px" :src="img04" alt="" width="100%">
      </div>

    </el-main>
    <el-footer class="footer">
      <div class="link">
        <div class="popularNavigation">
          <div class="header">
            <div class="title">热门导航 <span style="color: gray;font-size: 13px;">为你推荐以下热门网站</span></div>

            <div class="more">
              <router-link to="/">申请导航</router-link>
            </div>
          </div>
          <div class="content">
            <img :src="img04" alt="" width="100px">
            <img :src="img04" alt="" width="100px">
            <img :src="img04" alt="" width="100px">
          </div>
        </div>
        <div class="links">
          <div class="header">
            <div class="title">友人帐 <span style="color: gray;font-size: 13px;">申请友情链接请务必先做好本站链接</span>
            </div>
            <div class="more">
              <router-link to="/">申请链接</router-link>
            </div>
          </div>
          <div class="content">
            <a href="www.baidu.com">百度</a>
            <a href="www.bilibili.com">哔哩哔哩</a>
          </div>
        </div>
      </div>
      <div class="trueFooter">
        <div class="content">
          <img :src="imgUrl" @mouseenter="enter()" @mouseleave="leave" alt="" width="60px">
          <div class="text">
            <div class="record">Copyright © 2024 All rights reserved. CMS内容管理系统演示站 粤ICP备15054802号-4</div>
            <div class="about">
              <router-link to="/">关于我们</router-link>
              <router-link to="/">用户协议</router-link>
              <router-link to="/">会员中心</router-link>
            </div>
          </div>
        </div>
      </div>
    </el-footer>
  </el-container>
  <div class="qrcode" @mouseenter="enter2" @mouseleave="leave2" v-show="isShow">
    <img src="@/assets/imgs01/qrcode.jpg" alt=""  width="100%">
    <div class="tips">扫一扫(确信)</div>
  </div>
  <div class="ffx" @mouseenter="enter4" @mouseleave="leave4" v-show="isShow2">
    <img src="@/assets/imgs01/QQ.png" alt="">
    <img src="@/assets/imgs01/QQ.png" alt="">
    <img src="@/assets/imgs01/QQ.png" alt="">
    <img src="@/assets/imgs01/QQ.png" alt="">
  </div>
  <div class="floor">
    <div class="a1" @mouseenter="enter2" @mouseleave="leave2">
      <img :src="qrcode" alt="" width="50px">
    </div>
    <div class="a2" :style="s2" @mouseenter="enter3" @mouseleave="leave3"><img :src=url2 alt=""
                                                                               width="100%">{{ tips2 }}</div>
    <div class="a3" style="text-align: center; " @mouseenter="enter4" @mouseleave="leave4"><img  :src=url3 alt=""
                                                                   width="80%"></div>
    <div class="a4" :style="s1" @click="backTop" @mouseenter="enter1" @mouseleave="leave1"><img :src=url1 alt=""
                                                                                                width="100%">{{ tips1 }}
    </div>
  </div>

</template>

<style scoped lang="scss">
.floor {
  position: fixed;
  right: 12%;
  bottom: 0;

  div {
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
    background-color: #fff;
  }

  .a1:hover,.a3:hover {
    background-color: #007bff;
  }

}
.ffx{
  background-color: #fff;
  margin-bottom: 10px;
  width: 50px;
  position: fixed;
  right: 16%;
  bottom: 0;
  img{
    width: 50px;
  }
}
.qrcode {
  width: 240px;
  height: 250px;
  position: fixed;
  background-color: white;
  right: 16%;
  bottom: 5%;
  text-align: center;

  img {
    padding-top: 20px;
    width: 200px;
    height: 200px;
  }

  .tips {
    text-align: center;
  }
}

.container {

  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;

    margin-bottom: 20px;

    .content {
      width: 100%;
      height: 60px;
      background-color: white;
      display: flex;
      justify-content: center;

      .logo {
        display: block;
        height: 50px;
        padding-right: 10px;
      }

      .menu {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;

        .el-menu-item {
          padding: 2px;
        }

        .el-sub-menu {
          padding: 0;
        }
      }
    }
  }

  .main {
    width: 1160px;
    padding: 0;
    display: flex;
    margin: 0 auto 150px;

    .mainContent {
      width: 68%;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 20px;

      .header {
        box-sizing: border-box;
        padding: 20px 20px 0 20px;
        display: flex;
        justify-content: space-between;

        .title {
          font-size: 16px;
        }

        .more {
          font-size: 13px;

          a {
            padding: 5px;
          }
        }
      }

      .popularPhotoCollections {
        width: 100%;
        background-color: #fff;

        .cards {
          display: flex;

          .card {
            padding: 20px;

            .img {
              width: 100%;
              background-color: red;
              border-radius: 10px;
            }

            .briefIntroduction {
              color: gray;
            }
          }
        }
      }

      .lastUpdate {
        background-color: #fff;

        .content {
          display: flex;
          flex-direction: column;

          .card1 {
            display: flex;
            padding: 20px 20px;
            border-bottom: 1px #d0d0d0 solid;
          }

          .card2 {
            padding: 20px 20px;
            display: flex;
            flex-direction: column;

            .content {
              display: flex;

              .title {
                padding-bottom: 20px;
                color: red;
              }
            }
          }

          .img {
            height: 100px;
            padding: 0 20px 20px 0;
          }

          .title {
            font-size: 17.5px;
            font-weight: 600;
            color: blue;
          }

          .content {
            font-size: 14px;
            color: gray;
          }

          .information {
            padding-top: 10px;
            display: flex;
            font-size: 13px;
            align-items: center;

            .type {
              margin-right: 20px;
              padding: 3px;
              background-color: #e5f2ff;
              color: #0095ff;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 5px;
            }

            .is {
              margin-right: 20px;
              color: gray;
            }
          }

        }
      }
    }
  }

  .aside {
    width: 35%;
    margin-left: 20px;

    .header {
      box-sizing: border-box;
      padding: 20px 20px 0 20px;
      display: flex;
      justify-content: space-between;

      .title {
        font-size: 16px;
      }

      .more {
        font-size: 13px;

        a {
          padding: 5px;
        }
      }
    }

    .content {
      padding: 0 20px 20px 20px;
      color: gray;
      font-size: 14px;
    }

    .lastUpdate {
      margin-bottom: 20px;
      background-color: #fff;
    }

    .hotInformation {
      background-color: white;
      margin-bottom: 20px;

      .top {
        display: flex;
        align-items: center;
        padding: 10px 0;

        .text {
          padding-left: 15px;

          a:hover {
            color: #007bff;
            border-bottom: 1px #007bff solid;
          }
        }
      }
    }

    .hotTags {
      background-color: #fff;
      margin-bottom: 20px;

      .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        align-content: start;
        gap: 3px;

        .rank {
          margin: 5px;
          padding: 0 3px;
          font-size: 13px;
        }

        .rank:hover {
          background-color: #007bff;
          color: white;
        }
      }
    }

    .rank {
      color: #79bbff;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 24px;
      height: 24px;
      background-color: #e5f2ff;
    }
  }

  .footer {
    margin: 0;
    padding: 20px 0 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .link {
      margin-bottom: 180px;
      margin-top: 100px;
      width: 1160px;
      height: 100px;
      background-color: white;
      display: flex;
      flex-direction: column;

      .popularNavigation {
        padding-bottom: 20px;
        background-color: #fff;

        .content {
          img {
            padding-left: 20px;
          }
        }

        margin-bottom: 20px;
      }

      .links {
        background-color: #fff;

        .content {

          padding: 20px;

          a {
            font-size: 13px;
            padding-right: 10px;
          }
        }
      }
    }

    .trueFooter {
      background-color: #1f2730;
      width: 100%;
      min-height: 150px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      .content {
        display: flex;
        align-items: center;
        width: 1160px;

        img {

        }

        .text {
          display: flex;
          flex-direction: column;
          font-size: 13px;

          .record {
            padding-bottom: 10px;
          }

          .about {
            a {
              padding-right: 10px;
              color: white;
            }
          }
        }

      }
    }

    .header {
      box-sizing: border-box;
      padding: 20px 20px 0 20px;
      display: flex;
      justify-content: space-between;

      .title {
        font-size: 16px;
      }

      .more {
        font-size: 13px;

        a {
          padding: 5px;
        }
      }
    }
  }
}
</style>