import store from "../index";
import axios from "axios";
import {mutate} from "lodash/fp/_mapping";
export const product = {

    state: () => ({
        productItem: {},
        productItems: [],
        activeIndex: 1,
        activeSong: {},
        status: 'paused'
    }),

    actions: {

        async productItems({commit, state}, prop) {
            await axios.get("/api/product/list").then(resp => {
                //console.log(resp);
                commit("setProducts", resp.data);
            })
        },
        async productItem({commit, state}, prop) {
            await axios.get("/api/product/edit/" + prop.id).then(resp => {
                //console.log(resp);
                commit("setProduct", resp.data);
            })
        },
        async productUpdate({commit, state}, prop) {
            await axios.post("/api/product/update",prop).then(resp => {
                //console.log(resp);
                commit("setProduct", resp.data);
            })
        },
        async stockUpdate({commit, state}, prop) {
            await axios.post("/api/product/stock/update",prop).then(resp => {
            })
        },

    },
    mutations: {
        setProduct( state,data ){
            state.productItem = data;
        },
        setProducts( state,data ){
            state.productItems = data;
        },
    },

    getters: {
        getProduct( state ){
            return state.productItem;
        },
        getProducts( state ){
            return state.productItems;
        },
    }

}
export default product;
