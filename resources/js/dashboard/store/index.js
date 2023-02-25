import {createStore} from 'vuex'
import product from "./dashboard/product";
import category from "./dashboard/category";
import todo from "./dashboard/todo";
import order from "./order/order";

const store = createStore({
    modules: {
        product,
        category,
        todo,
        order
    }
})
export default store;
