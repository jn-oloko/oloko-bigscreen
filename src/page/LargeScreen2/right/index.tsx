import React from 'react'
import { ModuleTitle } from '../../style/globalStyledSet';
import { BorderBox13 } from '@jiaminghi/data-view-react';


import {
    RightPage,
    RightTopBox,
    RightCenterBox,
    RightBottomBox,
  } from './style';
const Right :React.FC<{}>=()=>{
    return(
        <RightPage>
        <RightTopBox>
          <div className='right-top'>
            <ModuleTitle>
              <i className='iconfont'>&#xe7f7;</i>
              <span>关联数据类别分布</span>
            </ModuleTitle>
            <div className='right-top-content'>
              {/* <BrowseCategories
                browseCategories={browseCategories}></BrowseCategories> */}
              <img
                alt='地球'
                className='earth-gif'
                src={require('./earth-rotate.gif')}
              />
            </div>
          </div>
        </RightTopBox>

        <RightCenterBox>
          <ModuleTitle>
            <i className='iconfont'>&#xe7fd;</i>
            <span>平均用户类别排布</span>
          </ModuleTitle>
          {/* <UserIdentityCategory
            userIdentityCategory={userIdentityCategory}></UserIdentityCategory> */}
        </RightCenterBox>

        <RightBottomBox>
          <BorderBox13 className='right-bottom-borderBox13'>
            <div className='right-bottom'>
              <ModuleTitle>
                <i className='iconfont'>&#xe790;</i>
                <span>今日线下门户流量</span>
              </ModuleTitle>
              {/* 反馈 */}
              {/* <div className='feedback-box'>
                {offline
                  ? offline.feedback.map((item, index) => {
                      return (
                        <div className='feedback-box-item' key={index}>
                          <Feedback FeedbackData={item}></Feedback>
                          <span className='dis-text'>{item.title}</span>
                        </div>
                      );
                    })
                  : ''}
              </div> */}
              {/* 门店 */}
              {/* <div className='offline-portal-box'>
                {offline ? (
                  <OfflinePortal
                    offlinePortalData={offline.offlinePortalData}
                  />
                ) : (
                  ''
                )}
              </div> */}
            </div>
          </BorderBox13>
        </RightBottomBox>
      </RightPage>
    )
}
export default Right