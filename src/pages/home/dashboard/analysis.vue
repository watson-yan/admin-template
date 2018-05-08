<template>
  <div>
    <!-- <div style="height: 500px; width: 100%;" ref="c"></div>
    <div style="height: 300px; width: 50%;" ref="c1"></div> -->
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <p>销售额</p>
          <section>
            <strong>12289</strong>
          </section>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <p>访问量</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <p>支付笔数</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <p>运营活动效果</p>
        </el-card>
      </el-col>
    </el-row>

    <el-tabs type="border-card" style="margin-top: 30px;">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>

    <el-row>
      <el-col span=""></el-col>
    </el-row>
  </div>
</template>
<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      currentDate: new Date(),
      option: {
        title: {
          text: '堆叠区域图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {normal: {}},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      option1: {
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
          }
        ]
      }
    }
  },
  mounted () {
    // const myChart = echarts.init(this.$refs.c)
    // myChart.setOption(this.option)

    // const myChart1 = echarts.init(this.$refs.c1)
    // myChart1.setOption(this.option1)
  }
}
</script>
<style lang="scss" scoped>

</style>
