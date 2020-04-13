import {mytext} from "./mytext.js";
import {fadList} from "./fadList.js";
import {mailList} from "./mailList.js";
import {weCat} from "./weCat.js";
import {chat} from "./chat.js";
import {person} from "./person.js"
import {friend} from "./friend.js";
import {myNew} from "./myNew.js";

let routes = [
    {
        path:"/",
        component:weCat
    },
    {
        path:"/a",
        component:weCat,
        
    },
    {
        path:"/a/ab/:name",
        component:chat,
    },
    {
        path:"/b",
        component:mailList
    },
    {
        path:"/b/ba/:name",
        component:person
    },
    {
        path:"/c",
        component:fadList
    },
    {
        path:"/c/ca",
        component:friend
    },
    {
        path:"/d",
        component:mytext
    },
    {
        path:"/d/da",
        component:myNew
    }
];;

let router = new VueRouter({
    routes:routes
})

let app = new Vue({
    el: "#app",
    router:router
})
export {app}