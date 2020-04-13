let fadList = {
    template: `
    <div class="text-itemC">
        <div class="title">
            <p>发现</p>
            <div class="searde"><img src="./image/搜索.png" alt=""></div>
            <div class="add"> <img src="./image/添加.png" alt=""></div>
        </div>
        <div class="fav">
        <router-link to="/c/ca" class="out">
            <div class="wechat-Moments">
               <div class="wechat-Moments-itemf">
                  <div class="wechat-Moments-item-img">
                     <img src="./image/朋友圈.png" alt="">
                  </div>
                  <p class="wechat-Moments-item-textA">朋友圈</p>
                  <div class="wechat-Moments-item-imgB">
                     <img src="./image/headPortrait-01.jpg" alt="">
                  </div>
                   <span class="kuo">></span>
                </div>
            </div>  
        </router-link>
        <router-view></router-view>
            <div class="wechat-MomentsB">
                <div class="wechat-Moments-item">
                    <div class="wechat-Moments-item-img">
                        <img src="./image/扫一扫.png" alt="">
                    </div>
                    <p class="wechat-Moments-item-textA">扫一扫</p>
                    <span class="kuoa">></span>
                </div>
                <div class="wechat-Moments-item1">
                    <div class="wechat-Moments-item-img">
                        <img src="./image/微信摇一摇_icon.png" alt="">
                    </div>
                    <p class="wechat-Moments-item-textA">摇一摇</p>
                    <span class="kuob">></span>
                </div>
            </div>
            <div class="wechat-MomentsB">
                <div class="wechat-Moments-item">
                    <div class="wechat-Moments-item-img">
                        <img src="./image/看一看.png" alt="">
                    </div>
                    <p class="wechat-Moments-item-textA">看一看</p>
                    <span class="kuoc">></span>
                </div>
                <div class="wechat-Moments-item1">
                    <div class="wechat-Moments-item-img">
                        <img src="./image/搜一搜.png" alt="">
                    </div>
                    <p class="wechat-Moments-item-textA">搜一搜</p>
                    <span class="kuod">></span>
                </div>
            </div>
            <div class="wechat-MomentsC">
                <div class="wechat-Moments-itemC">
                    <div class="wechat-Moments-item-imgC">
                        <img src="./image/附近的人.png" alt="">
                    </div>
                    <p class="wechat-Moments-item-textA">附近的人</p>
                    <span class="kuoe">></span>
                </div>
            </div>
            <div class="wechat-MomentsB">
                <div class="wechat-Moments-item">
                    <div class="wechat-Moments-item-img">
                        <img src="./image/购物.png" alt="">
                    </div>
                    <p class="wechat-Moments-item-textA">购物</p>
                    <span class="kuof">></span>
                </div>
                <div class="wechat-Moments-item1">
                    <div class="wechat-Moments-item-img">
                        <img src="./image/游戏-113.png" alt="">
                    </div>
                    <p class="wechat-Moments-item-textA">游戏</p>
                    <span class="kuog">></span>
                </div>
            </div>
            <div class="wechat-MomentsC">
                <div class="wechat-Moments-itemC">
                    <div class="wechat-Moments-item-imgC">
                        <img src="./image/小程序.png" alt="">
                    </div>
                    <p class="wechat-Moments-item-textA">小程序</p>
                    <span class="kuoh">></span>
                </div>
            </div>
        </div>
        <div class="bottom-warp">
    <ul class="bottom-warp-ul">
        <router-link class="tiao" to="/a">
            <li>
                <div class="li-img">
                    <div class="iconfont icon-weixin wechar-img"></div>
                </div>
                <p class="li-text">微信</p>
            </li>
        </router-link>
        <router-link class="tiao" to="/b">
            <li>
                <div class="li-img">
                    <div class="iconfont icon-weimingmingwenjianjia_tongxunlu wechar-img"></div>
                </div>
                <p class="li-text">通讯录</p>
            </li>
        </router-link>
        <router-link class="tiao" to="/c">
            <li>
                <div class="li-img">
                    <div class="iconfont icon-danyehuaban"></div>
                </div>
                <p class="li-text">发现</p>
            </li>
        </router-link>
        <router-link class="tiao" to="/d">
            <li>
                <div class="li-img">
                    <div class="iconfont icon-sousuo wechar-img"></div>
                </div>
                <p class="li-text">我</p>
            </li>
        </router-link>
    </ul>
</div>
    </div>
    `
}
export {fadList}