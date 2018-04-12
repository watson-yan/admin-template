<template>
  <div class="home-page">
    <el-container style="height: 100%;">
      <!-- 侧边栏 -->
      <el-aside style="width: 240px;">
        <el-container class="aside-container" style="height: 100%;">
          <!-- logo放置区域 -->
          <el-header class="padding0" style="background: #002140;">
            <div class="nav-header">
              <div class="container">
                <span>Vue</span>
              </div>
            </div>
          </el-header>
          <!-- 菜单放置区域 -->
          <el-main class="app-menu padding0">
            <el-menu
              default-active="2"
              class="el-menu"
              text-color="rgba(255, 255, 255, 0.65)"
              active-text-color="#fff"
              :unique-opened="uniqueOpened"
              style="height:100%; border-color:#00142a; ">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>

                <el-menu-item index="1-3">选项1</el-menu-item>
                <el-menu-item index="1-4">选项2</el-menu-item>

                <el-menu-item index="1-5">选项1</el-menu-item>
                <el-menu-item index="1-6">选项2</el-menu-item>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
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
              <span>Vue</span>
            </div>
          </div>
        </el-header>
        <el-main>
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
      uniqueOpened: true // 每次只激活一个菜单展开
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
      width: 1200px;
      margin: 0 auto;
      padding: 0 30px;
      line-height: 60px;
    }
    &.main-header {
      background: #fff;
      color: #333;
      box-shadow: 0 1px 4px rgba(0,21,41,.08);
    }
  }
  .aside-container {
    box-shadow: 2px 0 6px rgba(0,21,41,.35);
    .app-menu {
      background-color: #00142a;
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
</style>
