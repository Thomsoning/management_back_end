<template>
    <el-main>

      <el-row style="margin-top:20px;margin-left:20px">
         <el-col :span="10"><div class="grid-content bg-purple" >
           <el-card class="box-card" style="height:300px;">
            <div slot="header" class="clearfix">
              <span>今日待办事项</span>
              <el-button style="float: right; padding: 3px 0" type="text">查看</el-button>
            </div>
            <div v-for="o in 1" :key="o" class="text item">
              {{'订单 ' + o }}
            </div>
          </el-card>
           
           
           </div></el-col>
          
        <el-col :span="8"><div class="grid-content bg-purple" style="font-size:4px;margin-left:10px"><div id="myChart" :style="{width: '400px', height: '300px'}"></div></div></el-col>
        
        <el-col :span="6"><div class="grid-content bg-purple-light"><div id="main" style="width: 300px;height:300px;"></div></div></el-col>
       
      </el-row style="margin-top:20px;margin-left:20px">

      <el-divider content-position="left"></el-divider>
      <el-row style="margin-top:20px;margin-left:20px">
        <el-col :span="8"><div class="grid-content bg-purple"><ve-ring :data="chartDatas" :settings="chartSet"></ve-ring></div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple"> <!--为echarts准备一个具备大小的容器dom-->
        <ve-line :data="chartData"  :settings="chartSettings"></ve-line></div></el-col>
      </el-row>
       <el-divider content-position="left"></el-divider>
      </el-main>
</template>

<script>
import {mapActions,mapState,mapMutations} from 'vuex';
export default {
  name: 'analysis',
  created(){
  },
  computed:{
  },
  methods:{
    drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        var myChart1 = this.$echarts.init(document.getElementById('main'), 'light');
        // 绘制图表
        myChart.setOption({
            title: { text: '销 量 排 行' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 10, 10, 20, 20, 36]
            }]
        });
       myChart1.setOption({
            series : [
                {
                    name: '访问来源',
                    type: 'pie',    // 设置图表类型为饼图
                    radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                    data:[          // 数据数组，name 为数据项名称，value 为数据项值
                        {value:235, name:'视频广告'},
                        {value:274, name:'联盟广告'},
                        {value:310, name:'邮件营销'},
                        {value:335, name:'直接访问'},
                        {value:400, name:'搜索引擎'}
                    ]
                }
            ]
        });
       
    }
  },
  mounted () {
    this.drawLine();
  },
    data() {
      this.chartSettings = {
        stack: { '用户': ['访问用户', '下单用户'] },
        area: true
      }
      this.chartSet = {
        limitShowNum: 3
      }
       return {
       chartDatas: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        },
       chartData: {
          columns: ['日期', '销售额', '成本', '存收入'],
          rows: [
            { '日期': '1/1', '销售额': 1393, '成本': 1093, '存收入': 300 },
            { '日期': '1/2', '销售额': 3530, '成本': 3230, '存收入': 300 },
            { '日期': '1/3', '销售额': 2923, '成本': 2623, '存收入': 300 },
            { '日期': '1/4', '销售额': 1723, '成本': 1423, '存收入': 300 },
            { '日期': '1/5', '销售额': 3792, '成本': 3492, '存收入': 300 },
            { '日期': '1/6', '销售额': 4593, '成本': 4293, '存收入': 400 }
          ]
        },
      
    
      opinionData: ["1000", "2500", "2750", "3000", "2650","2900","3200","1000", "2500", "2750", "3000", "2650","2900","3200"],
      costData:["800", "2300", "2250", "2900", "2350","2500","2300","1000", "2500", "2750", "3000", "2650","2900","3200"],
      value: new Date(),
      msg: 'Welcome to Your Vue.js App'
    }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
* {
        margin: 0;
        padding: 0;
        list-style: none;
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

.select{
  margin-left: 20px;
}
.block{
  text-align: right;
  margin-top:10px;
}

</style>
