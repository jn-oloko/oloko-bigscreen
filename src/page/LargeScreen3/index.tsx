import React from "react";
import { IndexPageStyle, IndexPageContent } from './style';
import Top from './top';
import Left from './left'
import Right from "./right";
import Center from "./center";
import './css/scanboard.css'

const LargeScreen2: React.FC<{}> = () => {
    React.useEffect(()=>{
        require  ('./js/bg')
    },[])
    return (
        <>
        <IndexPageStyle>

            {/* 顶部内容 */}
            <Top ></Top>
            <IndexPageContent  >
                {/* 左侧内容 */}
                <Left></Left>
                {/* 中间内容 */}
                <Center  />

                {/* 右侧内容 */}
                <Right></Right>

            </IndexPageContent>
            
        </IndexPageStyle>
        <canvas id="canvas" style={{position: 'absolute',top: 0,left: 0}}></canvas> 
        </>
    )
}
export default LargeScreen2