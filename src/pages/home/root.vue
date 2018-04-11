<template>
  <div class="home-page">
    <el-container direction="vertical" style="height: 100%;">
      <el-header style="background-color:#409EFF;">
        <div class="nav-header">
          <div class="container">
            <span>Vue管理后台模板</span>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside style="width: 200px;">
          <el-menu
            default-active="2"
            class="el-menu"
            :unique-opened="uniqueOpened"
            style="height:100%">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>

                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>

                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>

                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
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
          </el-menu>
        </el-aside>
        <el-main style="background-color: #f7f8fa;">
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
  .nav-header {
    color: #fff;
    .container {
      width: 1200px;
      margin: 0 auto;
      padding: 0 30px;
      line-height: 60px;
    }
  }
}
</style>
