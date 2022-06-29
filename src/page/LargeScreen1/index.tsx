import React from "react";
import Styles from "./index.module.css"
import { useGetAccountInfoUsingGET } from "../../swagger/platform-api";
import * as echarts from 'echarts/core';
import {
    BarChart,
    // 系列类型的定义后缀都为 SeriesOption
    BarSeriesOption,
    LineChart,
    LineSeriesOption
  } from 'echarts/charts';
  import {
    TitleComponent,
    // 组件类型的定义后缀都为 ComponentOption
    TitleComponentOption,
    TooltipComponent,
    TooltipComponentOption,
    GridComponent,
    GridComponentOption,
    // 数据集组件
    DatasetComponent,
    DatasetComponentOption,
    // 内置数据转换器组件 (filter, sort)
    TransformComponent
  } from 'echarts/components';
  import { LabelLayout, UniversalTransition } from 'echarts/features';
  import { CanvasRenderer } from 'echarts/renderers';
  
  // 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
  type ECOption = echarts.ComposeOption<
    | BarSeriesOption
    | LineSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
  >;
  
  // 注册必须的组件
  echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
  ]);
  var myChart:any;
const LargeScreen1: React.FC<{}> = () => {
    
    React.useEffect(()=>{
        var chartDom :HTMLElement = document.getElementById('scatter') as HTMLElement;
        myChart = echarts.init(chartDom);
        myChart.showLoading();
    },[])
    const { data } = useGetAccountInfoUsingGET({ queryParams: { name: "",size:7 },resolve(data){
        if(data.code==="SUCCESS"){
            myChart.hideLoading();
           let option = {
            title: {
                text: '员工数量'
              },
            xAxis: {
              type: 'category',
              data: data?.data?.data?.map((item:any)=>{   
                  return item.name??""
              })??['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: data?.data?.data?.map((item:any)=>{
                   
                    return item.staffSize??0
                })??[120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                  color: 'rgba(180, 180, 180, 0.2)'
                }
              }
            ]
          };
            myChart.setOption(option);
        }
        return data
    } })
    return (
        <>
            <div className={Styles.head}>

                <div className={Styles.headleft}>

                </div>
                <div className={Styles.headmiddle}>

                </div>
                <div className={Styles.headright}>

                </div>

            </div>
            <div className={Styles.body}>

                <div className={Styles.bodyleft}>
                    <div className={Styles.exhibitionarea} >

                    </div>
                    <div className={Styles.exhibitionarea}>

                    </div>
                    <div className={Styles.exhibitionarea}>

                    </div>

                </div>
                <div className={Styles.bodymiddle} id="scatter">

                </div>
                <div className={Styles.bodyright}>
                    <div className={Styles.exhibitionarea}>

                    </div>
                    <div className={Styles.exhibitionarea}>

                    </div>
                    <div className={Styles.exhibitionarea}>

                    </div>

                </div>

            </div>

        </>
    )
}
export default LargeScreen1