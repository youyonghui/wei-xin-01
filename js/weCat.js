
let weCat = {
    data() {
        return {
            frameList: [{
                id: 'drink-01',
                name: "尤永辉",
                head: "./image/headPortrait-01.jpg",
                timer: "下午3：15",
                news: "闹FIFO爱哈斯"
            },
            {
                id: 'drink-02',
                name: "张龑",
                head: "./image/headPortrait-02.jpg",
                timer: "上午10：30",
                news: "案发开公司了"
            },
            {
                id: 'drink-03',
                name: "阿毛",
                head: "./image/headPortrait-03.jpg",
                timer: "下午6：48",
                news: "啊都好佛说法"
            },
            {
                id: 'drink-04',
                name: "爱党",
                head: "./image/headPortrait-04.jpg",
                timer: "下午5：26",
                news: "是佛佛"
            },
            {
                id: 'drink-05',
                name: "奥迪",
                head: "./image/headPortrait-05.jpg",
                timer: "下午1：48",
                news: "低浓度"
            },
            {
                id: 'drink-06',
                name: "海豚",
                head: "./image/headPortrait-06.jpg",
                timer: "下午8：42",
                news: "打开角度看"
            },
            {
                id: 'drink-07',
                name: "萨法",
                head: "./image/headPortrait-07.jpg",
                timer: "下午9：54",
                news: "分手费看了"
            },
            {
                id: 'drink-08',
                name: "海豚",
                head: "./image/headPortrait-06.jpg",
                timer: "下午8：42",
                news: "打开角度看"
            },
            {
                id: 'drink-09',
                name: "萨法",
                head: "./image/headPortrait-07.jpg",
                timer: "下午9：54",
                news: "分手费看了"
            },
            {
                id: 'drink-10',
                name: "阿毛",
                head: "./image/headPortrait-03.jpg",
                timer: "下午6：48",
                news: "啊都好佛说法"
            },
            {
                id: 'drink-11',
                name: "爱党",
                head: "./image/headPortrait-04.jpg",
                timer: "下午5：26",
                news: "是佛佛"
            },
            ],
        }
    },

    template: `
    <div>
    <div class="text-item">
        <div class="title">
            <p class="dsg">微信</p>
            <div class="sear"><img src="./image/搜索.png" alt=""></div>
           <div class="add"> <img src="./image/添加.png" alt=""></div>
        </div>
          <div class="reposon">
             <router-link class="twoWarp content-warp" :to="'/a/ab/'+item.name"  v-for="item in frameList">
                <div class="content-warp-img">
                    <img :src="item.head" alt="">
                </div>
                <div class="right-text">
                    <div class="content-warp-textA">
                        <p class="texta">{{item.name}}</p>
                        <p class="textb">{{item.timer}}</p>
                    </div>
                    <div class="content-warp-textB">
                        <p class="textc">{{item.news}}</p>
                    </div>
                </div>
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
    `,
    mounted(){
        console.log(this)
    }
}
export {weCat}