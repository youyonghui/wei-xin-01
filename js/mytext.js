let mytext = {
    template:`
    <div class="my-warp">
        <div class="camera">
            <div class="camera-img">
                <img src="./image/相机.png" alt="">
            </div>
        </div>
        <div class="main-sfsf">
        <router-link class="mydse" to="/d/da">
            <div class="personal-information">
                <div class="personal-information-img">
                    <img src="./image/headPortrait-03.jpg" alt="">
                </div>
                <div class="personal-information-right">
                    <p class="users">尤永辉</p>
                    <div class="personal-information-bottom">
                        <p>微信号：jsfs_654894awa65d4</p>
                        <div class="qrCode"><img src="./image/二维码.png" alt=""></div>
                        <span class="right-font">></span>
                    </div>
                </div>
            </div>
            </router-link>
            <router-view></router-view>
            <div class="wechat-payment">
                <div class="wechat-Moments-itemk">
                    <div class="wechat-Moments-item-imgf">
                        <img src="./image/附近的人.png" alt="">
                    </div>
                    <p class="wechat-Moments-item-textA">支付</p>
                    <span class="dian"></span>
                    <span class="fangxianga">></span>
                </div>
            </div>
            <div class="mySetup">
                <div class="mySetupA">
                    <div class="mySetupA-img">
                        <img src="./image/收藏.png" alt="">
                    </div>
                    <p class="mySetupA-name">收藏</p>
                    <span class="fangxiang">></span>
                </div>
                <div class="mySetupA">
                    <div class="mySetupA-img">
                        <img src="./image/相册.png" alt="">
                    </div>
                    <p class="mySetupA-name">相册</p>
                    <span class="fangxiang">></span>
                </div>
                <div class="mySetupA">
                    <div class="mySetupA-img">
                        <img src="./image/卡包.png" alt="">
                    </div>
                    <p class="mySetupA-name">卡包</p>
                    <span class="fangxiang">></span>
                </div>
                <div class="mySetupA">
                    <div class="mySetupA-img">
                        <img src="./image/表情.png" alt="">
                    </div>
                    <p class="mySetupA-name">表情</p>
                    <span class="fangxiang">></span>
                </div>
            </div>
            <div class="wechat-payment">
                <div class="wechat-Moments-itemk">
                    <div class="wechat-Moments-item-imgf">
                        <img src="./image/设置.png" alt="">
                    </div>
                    <p class="wechat-Moments-item-textA">设置</p>
                    <span class="fangxiangb">></span>
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
export {mytext}