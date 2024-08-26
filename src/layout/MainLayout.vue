<template>
  <el-container>
    <!-- 头部导航区域 -->
    <el-header>
      <div class="header-container">
        <!-- 头部左侧区域 -->
        <div class="header-left">
          <!-- logo -->
          <div class="left-logo">
          </div>
          <!-- 导航 -->
          <div class="nav-title">
            <el-menu class="el-menu-nav"
                     edefault-activ="/"
                     :router="true"
                     mode="horizontal"
                     :ellipsis="false"
                     background-color="#393d49"
                     text-color="#fff"
                     active-text-color="#FFFF00">
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/player1">播放器1</el-menu-item>
              <el-menu-item index="/player2">播放器2</el-menu-item>
            </el-menu>
          </div>
        </div>
      </div>
    </el-header>
    <!--主要内容区域 -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup>



</script>

<style lang="css" scoped>
.el-header {
  background-color: #393d49;
  color: #333333;
  display: flex;
  align-items: center;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
  padding: 0px;
}

.nav-title {
  padding-left: 60px;
}

.el-menu-item {
  font-size: 18px;
}

.header-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-size: 18px;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left-logo {
  display: flex;
  align-items: center;
}

.header-right {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.el-icon-switch-button {
  cursor: pointer;
  color: #fff;
}


.el-dropdown {
  cursor: pointer;
  margin-right: 10px;
}

.logo {
  height: 95%;
  /* 设置图片高度 */
}

.right-font * {
  color: #fff;
  font-size: 18px;
}

.login-information {
  margin-right: 10px;
}
</style>
