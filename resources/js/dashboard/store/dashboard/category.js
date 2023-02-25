import store from "../index";
import axios from "axios";
import {mutate} from "lodash/fp/_mapping";

export const category = {

    state: () => ({
        categoryItem: {},
        categoryItems: [],
        productCategory: [],
        activeIndex: 1,
        activeSong: {},
        status: 'paused'
    }),

    actions: {
        async categoryItems({commit, state}, prop) {
            await axios.get("/api/category/list").then(resp => {
                //console.log(resp);
                commit("setCategories", resp.data);
            })
        },
        async categoryItem({commit, state}, prop) {
            await axios.get("/api/category/edit/" + prop.id).then(resp => {
                //console.log(resp);
                commit("setCategory", resp.data);
            })
        },

        async categoryUpdate({commit, state}, prop) {
            await axios.post("/api/category/update", prop).then(resp => {
                //console.log(resp);
                commit("setCategory", resp.data);
            })
        },
        async productCategory({commit, state}, prop) {
            await axios.get("/api/category/products/" + prop.id).then(resp => {
                //console.log(resp);
                commit("setProductCategory", resp.data);
            })
        },
    },
    mutations: {
        setCategory(state, data) {
            state.categoryItem = data;
        },
        setCategories(state, data) {
            state.categoryItems = data;
        },
        setProductCategory(state, data) {
            state.productCategory = data;
        },
    },

    getters: {

        getCategory(state) {
            return state.categoryItem;
        },
        getCategories(state) {
            return state.categoryItems;
        },
        getProductCategory(state) {
            return state.productCategory;
        },
    }

}
export default category;
