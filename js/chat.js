let chat = {
    template:`
    <div>
       <div class="chat-item">
            <div class="chat-title">
                <button class="button" @click="back">
                    <div class="iconfont icon-zuojiantou wechar-img"></div>
                </button>
                <p>{{$route.params.name}}</p>
                <div class="sear">···</div>
            </div>
        </div>
        <div class="chat-item-text">
            <div class="chat-text">
                <div class="chat-left-img">
                    <img src="./image/headPortrait-02.jpg" alt="">
                </div>
                <p class="chat-news">NSF好似回复</p>
            </div>
            <div class="chat-text-right">
                <p class="chat-news">三十六浪费</p>
                <div class="chat-left-img">
                    <img src="./image/headPortrait-01.jpg" alt="">
                </div>
            </div>
            <div class="chat-text">
                <div class="chat-left-img">
                    <img src="./image/headPortrait-02.jpg" alt="">
                </div>
                <p class="chat-news">啊大大的方式v公司</p>
            </div>
            <div class="chat-text">
                <div class="chat-left-img">
                    <img src="./image/headPortrait-02.jpg" alt="">
                </div>
                <p class="chat-news">啊是法国人Greg</p>
            </div>
            <div class="chat-text-right">
                <p class="chat-news">维奇尔群岛亲卫队</p>
                <div class="chat-left-img">
                    <img src="./image/headPortrait-01.jpg" alt="">
                </div>
            </div>
            <div class="chat-text-right">
                <p class="chat-news">三个人公司</p>
                <div class="chat-left-img">
                    <img src="./image/headPortrait-01.jpg" alt="">
                </div>
            </div>
            <div class="chat-text-right">
                <p class="chat-news">啊大大大</p>
                <div class="chat-left-img">
                    <img src="./image/headPortrait-01.jpg" alt="">
                </div>
            </div>
            <div class="chat-text">
                <div class="chat-left-img">
                    <img src="./image/headPortrait-02.jpg" alt="">
                </div>
                <p class="chat-news">送送送</p>
            </div>
            <div class="chat-text">
                <div class="chat-left-img">
                    <img src="./image/headPortrait-02.jpg" alt="">
                </div>
                <p class="chat-news">傲剑佛佛欧锦</p>
            </div>
            <div class="chat-text">
                <div class="chat-left-img">
                    <img src="./image/headPortrait-02.jpg" alt="">
                </div>
                <p class="chat-news">骨灰级的呃</p>
            </div>
            <div class="chat-text">
                <div class="chat-left-img">
                    <img src="./image/headPortrait-02.jpg" alt="">
                </div>
                <p class="chat-news">阿大冯光荣</p>
            </div>
            <router-view></router-view>

        </div>
        <div class="chat-button">
            <div class="chat-left-img">
                <img src="./image/视频 (2).png" alt="">
            </div>
            <div class="kuang"></div>
            <div class="chat-left-imga">
                <img src="./image/表情 (1).png" alt="">
            </div>
            <div class="chat-left-img">
                <img src="./image/添加 (1).png" alt="">
            </div>
        <div>
    </div>    
    `,
    methods:{
        back(){
            window.history.go(-1)
        }
    }
}
export {chat}