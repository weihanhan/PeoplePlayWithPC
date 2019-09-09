<template>
      <el-menu
        :default-active="$route.path"
        class="slider"
        background-color="#F2F6FC"
        text-color="#606266"
        active-text-color="#67C23A"
        router
        >
        <el-menu-item index="/main" >
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        
        <el-submenu v-for="(item,index) in menuList" :key="index" :index='item.id'>
          <template slot="title">
            <i :class="item.icon"></i>
            {{item.title}}
          </template>
          <div>

          </div>
          <el-menu-item-group >
            <el-menu-item v-for="child in item.children" :key="child.id" :index='child.index'>{{child.childtitle}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
</template>

<script>
export default {
  name: 'Slider',
  data(){
    return {
      menuList:[
        {
          id:'1',
          title: '门诊医生',
          icon:'el-icon-location',
          children:[
            {
              index:'/DoctorMenZhen',
              childtitle:'门诊病历'
            },
            {
              index:'/DoctorYiJimanager',
              childtitle:'医技模板管理'
            },
            {
              index:'/DoctorXiYao',
              childtitle:'西药处方模板'
            },
            {
              index:'/DoctorZhongyao',
              childtitle:'中药处方模板'
            }
          ]
        },
        {
          id:'2',
          title: '医技处置',
          icon:'el-icon-location',
          children:[
            {
              index:'/DoctorXiYao',
              childtitle:'导航2page3'
            },
            {
              index:'/DoctorZhongyao',
              childtitle:'导航2page4'
            },
          ]
        },
        {
          id:'3',
          title: '药房管理',
          icon:'el-icon-location',
          children:[
            {
              index:'/DoctorXiYao',
              childtitle:'导航2page3'
            },
            {
              index:'/DoctorZhongyao',
              childtitle:'导航2page4'
            },
          ]
        }
      ]
    }
  },
  
}
</script>
<style scoped>
.slider{
  height: 100vh;
}
</style>
