let myNew = {
    template:`
    <div>
    <div class="my-item">
    <div class="my-titled">
    <button class="btd" @click="backd">
    <span><</span>
    </button>
        <p class="my-zi">个人信息</p>

    </div>
    <div class="my-leia">
        <p class="tou">头像</p>
        <div class="my-leia-img">
            <img src="./image/headPortrait-03.jpg" alt="">
        </div>
        <span class="myfang">></span>
    </div>
    <div class="my-leia">
        <p class="tou">头像</p>
        <p class="my-names">尤永辉</p>
        <span class="myfangb">></span>
    </div>
    <div class="my-leia">
        <p class="tou">微信号</p>
        <p class="my-weixin">wxid_haiuokd254</p>
        <span class="myfangb">></span>
    </div>
    <div class="my-leib">
        <p class="tou">二维码名片</p>
        <p class="my-erweima">
            <img src="./image/二维码 (2).png" alt="">
        </p>
        <span class="myfangv">></span>
    </div>
    <div class="my-leic">
        <p class="tou">更多</p>
        <span class="myfangc">></span>
    </div>
    <div class="my-leid">
        <p class="tou">更多</p>
        <span class="myfangd">></span>
    </div>
</div>
</div>
    `,
    methods:{
        backd(){
            window.history.go(-1);
        }
    }
}
export {myNew}