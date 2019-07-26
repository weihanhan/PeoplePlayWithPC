<template>
    <div class="header">
        <div style="height: 120%; width:100%;background-color: #409eff; overflow: hidden">
                    <span class="demonstration" style="float:right;padding-top:15px;margin-right:1%">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    admin<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'navTop',
    methods:{
        logout(){
            this.$store.state.openTab = [];
            this.$store.state.activeIndex = '/main';
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
.header{
    background-color: rgb(85, 201, 236);
    height: 40px;
}
h1{
    margin: 0;
}
</style>
