import React from "react";
import * as echarts from 'echarts';
// import { trafficOptions } from './options';



// const { renderer } = this.state;
const TrafficSituation :React.FC<{}>=()=>{
    return (
        <div
        style={{
          width: '5.375rem',
          height: '3.125rem',
        }}>
        {/* {trafficSitua ? (
          <Chart renderer={renderer} option={trafficOptions(trafficSitua)} />
        ) : (
          ''
        )} */}
      </div>
    )
}
export default TrafficSituation
