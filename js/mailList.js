let mailList = {
    data() {
        return {
            xfriendList: [
                {
                    id: "x-01",
                    name: "水电费",
                    head: "./image/headPortrait-08.jpg",
                }
            ],
            aFriendList: [
                {
                    id: "a-01",
                    name: "奥迪看",
                    head: "./image/headPortrait-09.jpg",
                },
                {
                    id: "a-02",
                    name: "埃美柯",
                    head: "./image/headPortrait-10.jpg",
                },
                {
                    id: "a-03",
                    name: "阿萨姆",
                    head: "./image/headPortrait-11.jpg",
                },
                {
                    id: "a-04",
                    name: "adada",
                    head: "./image/headPortrait-10.jpg",
                },
                {
                    id: "a-05",
                    name: "afcac",
                    head: "./image/headPortrait-11.jpg",
                },

            ],
            bFriendList: [
                {
                    id: "b-01",
                    name: "把卡卡姐",
                    head: "./image/headPortrait-12.png",
                },
                {
                    id: "b-02",
                    name: "包括非",
                    head: "./image/headPortrait-13.jpg",
                },
                {
                    id: "b-03",
                    name: "波i看",
                    head: "./image/headPortrait-14.jpg",
                },
                {
                    id: "b-04",
                    name: "仨啊阿",
                    head: "./image/headPortrait-10.jpg",
                },
                {
                    id: "b-03",
                    name: "波i看",
                    head: "./image/headPortrait-14.jpg",
                },
                {
                    id: "b-04",
                    name: "仨啊阿",
                    head: "./image/headPortrait-10.jpg",
                },
                {
                    id: "b-03",
                    name: "波i看",
                    head: "./image/headPortrait-14.jpg",
                },
                {
                    id: "b-04",
                    name: "仨啊阿",
                    head: "./image/headPortrait-10.jpg",
                },
            ]
        }
    },
    template: `
    <div>
     <div class="mail-list-item">
        <div class="titleB">
            <p>通讯录</p>
            <div class="seare"><img src="./image/搜索.png" alt=""></div>
            <div class="add"> <img src="./image/添加.png" alt=""></div>
        </div>
        <div class="classification">
            <div class="classificationA">
                <div class="classification-img">
                    <img src="./image/添加朋友.png" alt="">
                </div>
                <p class="classification-friden">新的朋友</p>
            </div>
            <div class="classificationA">
                <div class="classification-imgB">
                    <img src="./image/群聊 (3).png" alt="">
                </div>
                <p class="classification-friden">群聊</p>
            </div>
            <div class="classificationA">
                <div class="classification-imgC">
                    <img src="./image/标签.png" alt="">
                </div>
                <p class="classification-friden">标签</p>
            </div>
            <div class="classificationA">
                <div class="classification-imgD">
                    <img src="./image/公众号.png" alt="">
                </div>
                <p class="classification-friden">公众号</p>
            </div>
        </div>
        <div class="freiend-list">
            <div class="starStandard">A</div>
            <router-link div class="starStandardA" :to="'/b/ba/'+item.name" v-for="item in aFriendList">
                <div class="starStandardA-img">
                    <img :src="item.head" alt="">
                </div>
                <p class="starStandardA-name">{{item.name}}</p>
            </router-link>
            <router-view></router-view>
            <div class="starStandard">B</div>
            <router-link class="starStandardA" :to="'/b/ba/'+item.name" v-for="item in bFriendList">
                <div class="starStandardA-img">
                    <img :src="item.head" alt="">
                </div>
                <p class="starStandardA-name">{{item.name}}</p>
            </router-link>
            <router-view></router-view>
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
export {mailList}