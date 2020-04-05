<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    
     <el-header height=90px style="margin-bottom:10px" >
      <el-row>
      <el-col :span="5"><div class="grid-content bg-purple" style="padding-top: 10px; font-size: 30px;color:white;height:80px;">后 台 管 理 系 统</div></el-col>
      <el-col :span="17"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-light"> 
        <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px;color:white;padding-top: 40px;"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span style="color:white;padding-top: 40px;">王小虎</span>
      
      </div></el-col>
      </el-row>


    </el-header>



  <el-container style="height:800px;">

   <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open=""
      @close=""
      
       background-color="#545c64"
       text-color="#fff"
       active-text-color="#ffd04b"
       width=350px
     >
      <el-submenu index="1">
        <template slot="title">
          
          <i class="el-icon-menu"></i>
          <span style=" font-size: 20px;">商品管理</span>
        </template>
        <el-menu-item-group>
           <el-menu-item index="1-1" ><router-link tag="li" to="/"> <i class="el-icon-data-analysis"></i>数据分析</router-link></el-menu-item>
          <el-menu-item index="1-2" ><router-link tag="li" to="/shop_detail"> <i class="el-icon-s-shop"></i>商品列表</router-link></el-menu-item>
          <el-menu-item index="1-3" > <router-link tag="li" to="/shop_add"><i class="el-icon-plus"></i>添加商品</router-link></el-menu-item>
        </el-menu-item-group>

      </el-submenu>
    
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span style=" font-size: 20px;">订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" ><router-link tag="li" to="/order_list"><i class="el-icon-goods"></i>订单列表</router-link></el-menu-item>
          <el-menu-item index="2-2" > <router-link  tag="li" to="/shop_add"> <i class="el-icon-s-operation"></i>订单管理</router-link></el-menu-item>
        </el-menu-item-group>

      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span style=" font-size: 20px;">模板管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1" ><router-link tag="li" to="/">主页管理</router-link></el-menu-item>
          <el-menu-item index="3-2" > <router-link tag="li" to="/shop_add">模板管理</router-link></el-menu-item>
        </el-menu-item-group>

      </el-submenu>
    </el-menu>


    <router-view/>

  
  </el-container>
  <el-footer>免费开源项目@2020</el-footer>
  
</el-container>
</template>
<script>
export default {
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData: Array(10).fill(item)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el-header {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
    
  }

 
.el-footer {
    margin-top: 10px;
    background-color: #545c64;
    color: #333;
    color:white;
    text-align: center;
    line-height: 60px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }

  .el-aside {
    color: #333;
  }
</style>
