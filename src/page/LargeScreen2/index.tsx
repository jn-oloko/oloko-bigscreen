import React from "react";
import { IndexPageStyle, IndexPageContent } from './style';
import Top from './top';
import Left from './left'
import Right from "./right";
import Center from "./center";
const LargeScreen2: React.FC<{}> = () => {
    return (
        <IndexPageStyle>
            {/* 顶部内容 */}
            <Top></Top>
            <IndexPageContent>
                {/* 左侧内容 */}
                <Left></Left>
                {/* 中间内容 */}
                <Center  />

                {/* 右侧内容 */}
                <Right></Right>

            </IndexPageContent>

        </IndexPageStyle>
    )
}
export default LargeScreen2