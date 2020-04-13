let person = {
    template:`
        <div>
        <div class="chat-item-fiend">
        <div class="chat-title">
        <button @click="backa" class="friendsa">
            <div class="iconfont icon-zuojiantou wechar-img"></div>
            <div class="seardd">···</div>
        </button>    
        </div>
    </div>
    <div class="chat-item-text-friend">
        <div class="friend-big-text">
            <div class="friend-img">
                <img src="./image/headPortrait-02.jpg" alt="">
            </div>
           <div class="fiend-text">
            <p class="chat-news-friendA">{{$route.params.name}}</p>
            <p class="chat-news-friendB">微信号：wijs_8g6s0kajda722</p>
            <p class="chat-news-friendC">地区：江苏 苏州</p>
           </div>
        </div>
        <div class="friend-two-text">
            <p>设置备注和标签</p>
            <span class="leftli">></span>
        </div>
        <div class="friend-two-text">
            <p>朋友权限</p>
            <span class="leftlia">></span>
        </div>
        <div class="friend-three-text">
            <p>更多信息</p>
            <span class="leftlia">></span>
        </div>
        <div class="friend-four-text">
            <div class="friend-img-biao">
                <div class="add">
                    <img src="./image/消息.png" alt="">
                </div>
            </div>
            <p class="tnews">发消息</p>
        </div>
        <div class="friend-five-text">
            <div class="friend-img-biao">
                <div class="add">
                    <img src="./image/视频.png" alt="">
                </div>
            </div>
            <p class="tnews">音视频通话</p>
        </div>
    </div>
        </div>
    `,

    methods:{
        backa(){
            window.history.go(-1);
        }
    }
}
export {person}