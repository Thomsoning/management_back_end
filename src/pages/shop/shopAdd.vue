<template>

   <div style="margin-top:20px;margin-left:30px">
  <el-form :model="ruleForm" :rules="rules"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
 
  <el-row>
  <el-col :span="24"><div class="grid-content bg-purple">
     <el-form-item label="商品名称" prop="productName" inline-message="true">
    <el-input v-model="ruleForm.productName"></el-input>
    </el-form-item>
      
      </div></el-col>
    </el-col>
  </el-row>

  <el-row>
  <el-col :span="8"><div class="grid-content bg-purple">

     <el-form-item label="商品类别" prop="productInfo" >
       <el-select v-model="ruleForm.productInfo.cate" placeholder="请选择">
      <el-option label="水果类" value="水果"></el-option>
      <el-option label="蔬菜类" value="蔬菜"></el-option>
      <el-option label="服装类" value="亲子"></el-option>
    </el-select>
  </el-form-item>
    
    
    </div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light">
     <el-form-item label="商品折扣" prop="productInfo">
    <el-input v-model="ruleForm.productInfo.discount"></el-input>
  </el-form-item>  
    </div></el-col>

    <el-col :span="8">
      <div class="grid-content bg-purple-light">
     <el-form-item label="商品价格" prop="productPrice" inline-message="true">
    <el-input v-model="ruleForm.productPrice"></el-input>
  </el-form-item>
    
    </div>
    </el-col>
  </el-col>
</el-row>


<el-row>
  <el-col :span="8"><div class="grid-content bg-purple"><el-form-item label="商品数量" prop="productNumber">
    <el-input v-model="ruleForm.productNumber"></el-input>
  </el-form-item></div></el-col>


  <el-col :span="8"><div class="grid-content bg-purple-light">
    
      <el-form-item label="上线状态" prop="productStatus">
    <el-switch v-model="ruleForm.productStatus"></el-switch>
  </el-form-item></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light">
    </div></el-col>
</el-row>


  <el-form-item label="轮播图">
      <el-upload
      action="http://localhost:8090/uploadimage"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="onSuccess">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="ruleForm.dialogVisible">
      <img width="100%" :src="ruleForm.dialogImageUrl" alt="">
    </el-dialog>
  </el-form-item>

  <el-form-item label="详情图">
      <el-upload
      action="http://localhost:8090/uploadimage"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="onSuccessDetail">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="ruleForm.dialogVisible">
      <img width="100%" :src="ruleForm.dialogImageUrl" alt="">
    </el-dialog>
  </el-form-item>
  


  <el-form-item label="商品描述" prop="productInfo">
    <el-input type="textarea" v-model="ruleForm.productInfo.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
   </div>
</template>

<script>
import {mapActions,mapState,mapMutations} from 'vuex';
export default {
  name: 'shopAdd',
  computed:{

     addProduct(){
      var proList=this.$store.state.product.addProduct;
      console.log("9999999999999999",proList)
      if(proList.errorCode=="SUCCESS"){
      this.$message('添加商品成功');
             this.resetForm
      }else{
        this.$message.error('添加商品失败');
        this.resetForm
      }},
     ...mapActions({
      'addProduct':'product/addProduct'
    })
  },
   data() {
      return {
        URL:"",
        formInline: {
          user: '',
          region: ''
        },
        
        ruleForm: {
          file:'',
          productPrice:'',
          productInfo:{"img":[],"detailImg":[],"cate":"","discount":"","desc":""},
          productNumber:'',
          productName:'',
          dialogImageUrl: '',
          dialogVisible: false,
          productStatus: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          productName: [
            { required: true, message: '请输入商品名称', trigger: 'blur' }
          ],
          productInfo: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }},
      methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      onSuccess(response, file, fileList){
        console.log("文件上传成功，返回参数为",response.data)
        var tem=this.URL+response.data;
        this.ruleForm.productInfo.img.push(tem)
        console.log("文件上传成功，返回参数为组装后",this.ruleForm.productInfo)
      },
      onSuccessDetail(response, file, fileList){
        console.log("文件上传成功，返回参数为",response.data)
        var tem=this.URL+response.data;
        this.ruleForm.productInfo.detailImg.push(tem)
        console.log("文件上传成功，返回参数为组装后",this.ruleForm.productInfo)
      },

      handlePictureCardPreview(file) {
        console.log("file",file)
        this.ruleForm.dialogImageUrl = file.url;
        this.ruleForm.dialogVisible = true;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var  ruleForm= {
                              "productPrice":'',
                              "productInfo":'',
                              "productNumber":'',
                              "productName":'',
                              "productStatus": '',
                            }
            ruleForm.productPrice=this.ruleForm.productPrice
            ruleForm.productInfo=JSON.stringify(this.ruleForm.productInfo)
            ruleForm.productNumber=this.ruleForm.productNumber
            ruleForm.productName=this.ruleForm.productName
            if(this.ruleForm.productStatus){
            ruleForm.productStatus=1
            }else{
             ruleForm.productStatus=0 
            }
            
            console.log("添加商品入参",ruleForm)
            this.$store.dispatch('product/addProduct',ruleForm)
            this.$message({
                          message: '添加商品成功',
                          type: 'success'
                        });
             this.resetForm('ruleForm')
             this.dialogImageUrl=''
          } else {
            this.$message.error('添加商品失败');
            this.resetForm
            console.log('error submit!!');
            return false;
          }
        });
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
   
    }
}
</script>
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
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  } */
  .row-bg {
    padding: 10px 0;
    /* background-color: #f9fafc; */
  }
    .demo-ruleForm{
      text-align: left
    }
</style>
