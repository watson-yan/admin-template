<template>
  <div class="home-page">
    <el-container style="height: 100%;">
      <!-- 侧边栏 -->
      <el-aside :style="{width: menuCollapse ? '64px' : '240px'}" class="app-aside">
        <el-container class="aside-container" style="height: 100%;">
          <!-- logo放置区域 -->
          <el-header class="padding0" style="background: #002140;">
            <div class="nav-header">
              <div class="container">
                <a class="logo" href="/">
                  <img src="/static/imgs/vue-logo.png" alt="">
                  <h1>Vue Ant Design</h1>
                </a>
              </div>
            </div>
          </el-header>
          <!-- 菜单放置区域 -->
          <el-main class="app-menu padding0">
            <el-menu
              @select="selectHandler"
              :default-active="activeMenu"
              class="el-menu"
              :collapse="menuCollapse"
              mode="vertical"
              :router="true"
              text-color="rgba(255, 255, 255, 0.65)"
              active-text-color="#fff"
              :unique-opened="true"
              style="height:100%; border-color:#00142a; ">
              <!-- 控制面板模块 -->
              <el-submenu index="/home/dashboard">
                <template slot="title">
                  <i class="fa fa-dashboard"></i>
                  <span>控制面板</span>
                </template>
                <el-menu-item index="/home/dashboard/analysis">分析页</el-menu-item>
                <el-menu-item index="/home/dashboard/monitor">监控页</el-menu-item>
                <el-menu-item index="/home/dashboard/workplace">工作台</el-menu-item>
              </el-submenu>
              <el-menu-item index="/home/form">
                <i class="el-icon-menu"></i>
                <span slot="title">表单页</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">导航五</span>
              </el-menu-item>
              <el-menu-item index="6">
                <i class="el-icon-setting"></i>
                <span slot="title">导航六</span>
              </el-menu-item>
              <el-menu-item index="7">
                <i class="el-icon-setting"></i>
                <span slot="title">导航七</span>
              </el-menu-item>
            </el-menu>
          </el-main>
        </el-container>
      </el-aside>
      <!-- 主内容区域 -->
      <el-container>
        <el-header class="padding0">
          <div class="nav-header main-header">
            <div class="container">
              <a @click="menuCollapse = !menuCollapse" class="collapse-menu">
                <template v-if="menuCollapse">
                  <svg style="width: 1.27148em; height: 1em; vertical-align: middle; fill: currentcolor; overflow: hidden; font-size: 18px;" viewBox="0 0 1302 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M138.666667 896l1024 0 0 128L138.666667 1024 138.666667 896 138.666667 896z" fill="#707070"></path>
                    <path d="M522.666667 580.266667l640 0 0 128L522.666667 708.266667 522.666667 580.266667 522.666667 580.266667z" fill="#707070"></path>
                    <path d="M522.666667 324.266667l640 0 0 128L522.666667 452.266667 522.666667 324.266667 522.666667 324.266667z" fill="#707070" data-spm-anchor-id="a313x.7781069.0.i4"></path>
                    <path d="M138.666667 0l1024 0 0 128L138.666667 128 138.666667 0 138.666667 0z" fill="#707070"></path>
                    <path d="M138.666667 290.133333l256 256L138.666667 733.866667 138.666667 290.133333 138.666667 290.133333z" fill="#707070"></path>
                  </svg>
                </template>
                <template v-else>
                  <svg style="width: 1.27148em; height: 1em; vertical-align: middle; fill: currentcolor; overflow: hidden; font-size: 18px;" viewBox="0 0 1302 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" data-spm-anchor-id="a313x.7781069.0.i4">
                    <path d="M138.666667 896l1024 0 0 128L138.666667 1024 138.666667 896 138.666667 896z" fill="#707070"></path>
                    <path d="M522.666667 580.266667l640 0 0 128L522.666667 708.266667 522.666667 580.266667 522.666667 580.266667z" fill="#707070"></path>
                    <path d="M522.666667 324.266667l640 0 0 128L522.666667 452.266667 522.666667 324.266667 522.666667 324.266667z" fill="#707070"></path>
                    <path d="M138.666667 0l1024 0 0 128L138.666667 128 138.666667 0 138.666667 0z" fill="#707070"></path>
                    <path d="M394.666667 290.133333l0 452.266667L138.666667 546.133333 394.666667 290.133333 394.666667 290.133333z" fill="#707070"></path>
                  </svg>
                </template>
              </a>
              <div class="main-header_options fl-right">
                <el-tooltip class="item" effect="dark" content="帮助文档" placement="top-start">
                  <a>
                    <i class="el-icon-question"></i>
                  </a>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="未读消息" placement="top-start">
                  <a>
                    <el-badge :value="2" class="item" style="display: inline;">
                      <i class="el-icon-bell"></i>
                    </el-badge>
                  </a>
                </el-tooltip>
                <el-dropdown>
                  <a class="el-dropdown-link">
                    <img class="avatar" src="/static/imgs/avatar.jpeg" width="40" height="40" alt="头像">
                    <span style="padding: 0 10px;">watson</span>
                  </a>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </div>
        </el-header>
        <el-main style="background-color: #f0f2f5;">
          <div>
            <router-view/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuCollapse: false,
      activeMenu: '/home/dashboard/analysis'
    }
  },
  methods: {
    selectHandler (key, keyPath) {
      this.activeMenu = keyPath[keyPath.length - 1]
    }
  }
}
</script>
<style lang="scss">
.home-page {
  height: 100%;
  .padding0 {
    padding: 0;
  }
  .nav-header {
    color: #fff;
    .container {
      margin: 0 auto;
      padding: 0 15px;
      line-height: 60px;
      .logo {
        img {
          height: 32px;
          vertical-align: middle;
        }
        h1 {
          display: inline-block;
          margin: 0 0 0 12px;
          color: #fff;
          font-size: 20px;
          font-weight: 600;
          font-family: "Myriad Pro","Helvetica Neue",Arial,Helvetica,sans-serif;
        }
      }
    }
    &.main-header {
      background: #fff;
      color: #333;
      box-shadow: 0 1px 4px rgba(0,21,41,.08);
      .container {
        padding: 0 15px 0 0;
        .collapse-menu {
          display: inline-block;
          padding: 0 20px;
          &:hover {
            background: #e6f7ff;
            cursor: pointer;
          }
        }
        .main-header_options {
          a {
            display: inline-block;
            padding: 0 15px;
            i {
              font-size: 1.4rem;
            }
            &:hover {
              background: #e6f7ff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .app-aside {
    transition: all linear .1s;
    .aside-container {
      box-shadow: 2px 0 6px rgba(0,21,41,.35);
      .app-menu {
        background-color: #00142a;
        // 针对 菜单栏进行定制
        &>.el-menu {
          background-color: #00142a;
        }
        .el-submenu{
          .el-menu--inline {
            background: #000;
          }
          .el-submenu__title {
            height: 40px;
            line-height: 40px;
            &:focus, &:hover {
              outline: 0;
              color: #fff !important;
              background-color: inherit;
            }
          }
          &.is-active, &.is-opened {
            &>.el-submenu__title {
              color: #fff !important;
            }
          }
        }
        .el-menu-item {
          margin: 4px 0;
          height: 40px;
          line-height: 40px;
          &.is-active {
            background-color: #1890ff !important;
          }
          &:focus, &:hover {
            outline: 0;
            color: #fff !important;
            background-color: inherit;
          }
        }
      }
    }
  }
}
</style>
