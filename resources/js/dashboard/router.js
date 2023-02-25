import {createRouter,createWebHistory} from 'vue-router'
import Home from "./inc/home";
import header from "./inc/header";
import productList from "./pages/product/list";
import productEdit from "./pages/product/edit";
import categoryList from "./pages/category/list";
import categoryEdit from "./pages/category/edit";
import toDoList from "./pages/toDo/list";
import order from "./pages/order/home";
const routes = [

    {
        path: '/dashboard',
        name:'home',
        component: Home
    },
    {
        path: '/dashboard/product',
        name:'productList',
        component: productList,
        props:{default:true},

    },
    {
        path:'/dashboard/product/edit/:id',
        name:'productEdit',
        props:{default:true},
        component:productEdit
    },
    {
        path:'/dashboard/product/list',
        name:'productList',
        props:{default:true},
        component:productList
    },
    {
        path: '/dashboard/category',
        name:'categoryList',
        component: categoryList,
        props:{default:true},

    },
    {
        path:'/dashboard/category/edit/:id',
        name:'categoryEdit',
        props:{default:true},
        component:categoryEdit
    },
    {
        path:'/dashboard/category/list',
        name:'categoryList',
        props:{default:true},
        component:categoryList
    } ,
    {
        path:'/dashboard/todo/list',
        name:'toDoList',
        props:{default:true},
        component:toDoList
    } ,
    {
        path:'/dashboard/order',
        name:'order',
        props:{default:true},
        component:order
    } ,
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;
