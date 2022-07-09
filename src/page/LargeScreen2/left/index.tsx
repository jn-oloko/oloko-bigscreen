import React, { useState } from 'react'
import { LeftPage, LeftTopBox, LeftBottomBox } from './style';
import { ModuleTitle } from '../../style/globalStyledSet'
import { useGetRestaurantsUsingGET } from '../../../swagger/platform-api'
import { BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react'
import TrafficSituation from './charts/TrafficSituation'

const Left: React.FC<{}> = () => {
  const { data } = useGetRestaurantsUsingGET({})
  console.log(data);
  return (
    <>
      <LeftPage>
        {/* 顶部图标 */}
        <LeftTopBox>
          <BorderBox12 className='left-top-borderBox12'>
            <div className='left-top'>
              <ModuleTitle>
                <i className='iconfont'>&#xe78f;</i>
                <span>今日流量态势</span>
              </ModuleTitle>
              <div className='title-dis'>
                <span>
                  平均接纳次数(小时):
                  {/* <span className='title-dis-keyword'>{accessFrequency}次</span> */}
                </span>
                <span>
                  流量峰值:
                  {/* <span className='title-dis-keyword'>{peakFlow}M</span> */}
                </span>
              </div>
              {/* 图表 */}
              <TrafficSituation  ></TrafficSituation>
            </div>
          </BorderBox12>
        </LeftTopBox>
        {/* 底部u图标 */}
        <LeftBottomBox>
          <BorderBox13 className='left-bottom-borderBox13'></BorderBox13>
        </LeftBottomBox>

      </LeftPage>


    </>
  )
}
export default Left