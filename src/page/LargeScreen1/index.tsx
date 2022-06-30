import React, { useState } from "react";
import Styles from "./index.module.css"
import { useGetAccountInfoUsingGET } from "../../swagger/platform-api";
import * as echarts from 'echarts/core';
import {
  BarChart,//条形图
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,//条形图系列选项 
  LineChart,
  LineSeriesOption
} from 'echarts/charts';
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,//网格组件
  GridComponentOption,//网格组件选项
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';//画布渲染器 
import moment from "moment"
import Chart from "../../components/chart"
// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption//条形图系列选项 
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption//网格组件选项
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,//网格组件
  DatasetComponent,
  TransformComponent,
  BarChart,//条形图
  LabelLayout,
  UniversalTransition,
  CanvasRenderer//画布渲染器 
]);
let flag: any;
const LargeScreen1: React.FC<{}> = () => {

  const [a, setA] = React.useState(moment(new Date()).format("YYYY-MM-DD HH:mm:ss dddd a"))
  const [option, setoption] = React.useState<ECOption>({})

  React.useEffect(() => {

    flag = window.setInterval(() => {
      setA(moment(new Date()).format("YYYY-MM-DD HH:mm:ss dddd a"))
    }, 1000)
    return () => {
      window.clearInterval(flag)
    }
  }, [])

  const {refetch} = useGetAccountInfoUsingGET({
    queryParams: { name: "", size: 7 }, resolve(data) {
      if (data.code === "SUCCESS") {
        setoption({
          title: {
            text: '员工数量'
          },
          xAxis: {
            type: 'category',
            data: data?.data?.data?.map((item: any) => {
              return item.name ?? ""
            }) ?? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: data?.data?.data?.map((item: any) => {

                return item.staffSize ?? 0
              }) ?? [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              }
            }
          ]
        })

      }
      return data
    }
  })
  return (
    <>
      <div className={Styles.head}>

        <div className={Styles.headleft}>
          <p>{a}</p>
          {/* <button onClick={() => { refetch() }}>更新</button> */}
        </div>
        <div className={Styles.headmiddle}>

        </div>
        <div className={Styles.headright}>

        </div>

      </div>
      <div className={Styles.body}>

        <div className={Styles.bodyleft}>
          <div className={Styles.exhibitionarea}>

          </div>
          <div className={Styles.exhibitionarea}>

          </div>
          <div className={Styles.exhibitionarea}>

          </div>

        </div>
        <div className={Styles.bodymiddle} >
          <Chart renderer="canvas" option={option}></Chart>
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