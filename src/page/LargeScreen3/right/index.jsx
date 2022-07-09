import React from 'react'

export default function index() {
  return (
    <div class="right">
      	{/* <!--总计运单数--> */}
				<div class="item total itembg">
					<div class="itemTit">
						<span class="border-yellow">总计运单数</span>
					</div>
					<div class="itemCon">
						<div class="totalNum"><strong id="totalNum" total="368082">222</strong><span>单</span></div>
					</div>
				</div>
				{/* <!--基本信息--> */}
				<div class="item basicInfo">
					<div class="itemTit">
						<span class="border-green">基本信息</span>
					</div>
					<div class="itemCon itembg">
						<div class="infoPie">
							<ul class="clearfix">
								<li class="color-yellow">
									<span class="border-yellow" id="indicator1" total="32">9999</span>
									<p>今日订单</p>
								</li>
								<li class="color-green">
									<span class="border-green" id="indicator2" total="65">0</span>
									<p>出车次数</p>
								</li>
								<li class="color-blue">
									<span class="border-blue" id="indicator3" total="100">0</span>
									<p>订单完成量</p>
								</li>
							</ul>
							<div id="indicatorContainer"></div>
						</div>
					</div>
				</div>
    </div>
  )
}
