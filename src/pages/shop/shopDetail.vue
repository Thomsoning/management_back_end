<template>
    <el-main>
    
        <el-row>

          <el-col :span="6">
            <div class="grid-content bg-purple">
              商品类别：
              <el-select v-model="type" placeholder="请选择"  size="small">
                <el-option label="水果类" value="水果"></el-option>
                <el-option label="蔬菜类" value="蔬菜"></el-option>
              </el-select>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              商品搜索：
              <el-input placeholder="请输入内容" v-model="productName" size="small" style="width:160px;">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
              <el-button size="small" icon="el-icon-search" type="primary"  @click="find">查 询</el-button>  
            </div>
          </el-col>

          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>

          <el-col :span="4">
            <div class="grid-content bg-purple-light">
            <el-button size="small"  @click="add" ><i class="el-icon-plus"></i> 添加商品</el-button>  
            </div>
          </el-col>

        </el-row>
    
      
      <el-table :data="tableData" >
         <el-table-column label="序号" type="index" width="40"></el-table-column>

        <el-table-column prop="productName" label="商品名称" align='center' width="180" ></el-table-column>

         <el-table-column prop="productInfo.cate" label="商品类别" align='center' width="90" ></el-table-column>

        <el-table-column prop="" label="商品图片" align='center' width="120"  >
          <template   slot-scope="scope"> 
          <el-image 
              style="width: 100px; height: 80px"
              :src="scope.row.productInfo.img[0]" 
              :preview-src-list="scope.row.productInfo.img"
              :fit='contain'>
            </el-image>
          </template>
        </el-table-column>

        <el-table-column prop="productPrice" label="价 格"  width="60" align='center'></el-table-column>

        <el-table-column prop="productNumber" label="库 存" width="60" align='center'></el-table-column>

        <el-table-column prop="productSellNumber" label="销 量" width="70" align='center'></el-table-column>

         <el-table-column label="操作" min-width="70" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.productStatus"
              active-color="#13ce66"
              inactive-color="#ff4949"
               active-text="上 架"
               inactive-text="下 架"
              @click.native="set(scope.$index, scope.row)"
            ></el-switch>
          </template>
        </el-table-column>

         <el-table-column label="商 品 操 作" align='center' >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-view"></i> 预 览</el-button>
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i> 编 辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i> 删 除</el-button>
          </template>
        </el-table-column>
      </el-table>

          <div class="block" >
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-sizes="[3, 5, 10, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>


      </el-main>

</template>

<script>
import {mapActions,mapState,mapMutations} from 'vuex';
export default {
  name: 'shopDetail',
  created(){
    this.fetchData();

  },
  computed:{
     tableData(){
      var proList=this.$store.state.product.getProList;
      this.total=proList.total;
      this.pageSize=proList.pageSize;
      this.pageNum=proList.pageNum;
      return proList.list;
    },
    ...mapActions({
      'getprolist':'product/getProList'
    })
    
  },
  methods:{
     set (index,row) {

      console.log("商品状态改变",index,row)
      row.pageSize=this.pageSize;
      row.pageNum=this.pageNum;
      row.productInfo=JSON.stringify(row.productInfo)
      this.$store.dispatch('product/update',row)

    },
    handleEdit(index,row){},
    handleDelete(index,row){
      console.log("删除商品",index,row)
      var parames=this.parames;
      parames.pageSize=this.pageSize;
      parames.pageNum=this.pageNum;
      parames.productId=row.productId;
      this.$store.dispatch('product/delete',parames)
    },

    fetchData(){
      var parames=this.parames;
      parames.pageSize=this.pageSize;
      parames.pageNum=this.pageNum;
      this.$store.dispatch('product/getProList',parames)
    },

     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize=val;
       this.fetchData();

      },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageNum=val;
        this.fetchData();
      },
      add(){
        console.log("添加商品")
      },
      find(){
         console.log("查询商品")
         this.parames.productName=this.productName;
         this.fetchData();
      },
  },
    data() {
      return {
        productInfo:{"img":[],"detailImg":[],"cate":""},
        productId:'',
        parames:{"pageSize":"","pageNum":"","productName":"","pruductId":"","productStatus":""},
        pageSize:10,
        productName:'',
        pageNum:1,
        total:'',
        type:[],
        contain:'',
        region: '',
        
        value:true,
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
      }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  /* .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  } */
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    /* background-color: #f9fafc; */
  }

.block{
  text-align: right;
  margin-top:10px;
}

</style>
