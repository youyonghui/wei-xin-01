let friend = {
    template:`
        <div>
        <div class="fadv-warp">
        <div class="dadv-item">
          <div class="dave-title">
             <button @click="backc" class="friendsbb">
                <div class="iconfont icon-zuojiantou wechar-img"></div>
                <div class="fadvv-imgasd">
                   <img src="./image/相机 (1).png" alt="">
                </div>
              </button>    
           </div>
        </div>
    <div class="background-img">
        <img src="./image/12.jpg" alt="">
    </div>
    <div class="fadv-img">
        <img src="./image/相机.png" alt="">
    </div>
    <div class="fadv-small">
        <p class="dadv-text">尤永辉</p>
        <div class="fadv-imga">
            <img src="./image/headPortrait-01.jpg" alt="">
        </div>
    </div>
    <div class="fadv-news">
        <div class="heng">
            <div class="fadv-news-img">
                <img src="./image/headPortrait-09.jpg" alt="">
            </div>
            <p>张龑</p>
        </div>
        <div>
            <span>
                如果中国移动、中国电信和中国联通三大运营商合力推出一款产品，
                值得期待吗？如果再加上三星、华为、小米、OPPO、vivo等九大手机厂商呢？
                这一幕就在4月8日发生了。当天，三大运营商联合九家手机厂商以及两家系统软件合作伙伴，
                共同发布了《5G消息白皮书》，宣布共同启动5G消息业务。
                什么是5G消息？它和之前的短信消息有什么不同
            </span>
        </div>
        <div class="dadv-lian-img">
            <img src="./image/headPortrait-13.jpg" alt="">
            <img src="./image/headPortrait-05.jpg" alt="">
            <img src="./image/6.jpg" alt="">
            <img src="./image/headPortrait-07.jpg" alt="">
        </div>
    </div>
</div>
        </div>
    `,

    methods:{
        backc(){
            window.history.go(-1);
        }
    }
}
export {friend}