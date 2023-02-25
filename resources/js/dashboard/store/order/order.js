import store from "../index";
import axios from "axios";
import {mutate} from "lodash/fp/_mapping";

export const order = {

    state: () => ({
        orderType: 1,
        orderItem: [],
        orderItems: [],
        orderCount: 0,
        orderTotalDineIn: 0,
        orderTotalDelivery: 0,
    }),

    actions: {
        async orderItems({commit, state}, prop) {
            await axios.get("/api/order/list").then(resp => {
                //console.log(resp);
                commit("setOrders", resp.data);
            })
        },
        async orderUpdate({commit, state}, prop) {
            await axios.post("/api/order/update", prop).then(resp => {
                //console.log(resp);
                commit("setOrder", resp.data);
            })
        },


    },
    mutations: {
        setOrderAdd(state, data) {
            const items = state.orderItem;
            var isThere = 1
            if (items.length === 0) {
                state.orderItem.push(data)
                state.orderTotalDineIn = state.orderTotalDineIn + data.dine_in
                state.orderTotalDelivery = state.orderTotalDelivery + data.delivery
            } else {
                items.forEach(item => item.id === data.id ? isThere = 0 : '');
                if (isThere === 1) {
                    state.orderItem.push(data)
                    state.orderTotalDineIn = state.orderTotalDineIn + data.dine_in
                    state.orderTotalDelivery = state.orderTotalDelivery + data.delivery
                }
            }
            state.orderCount = state.orderItem.length
        },
        setOrderDelete(state, data) {
            const items = state.orderItem;
            var isThere = 0
            if (items.length !== 0) {
                items.forEach(item => item.id === data.id ? (
                    state.orderItem.splice(isThere, 1),
                        state.orderTotalDineIn = state.orderTotalDineIn - data.dine_in,
                        state.orderTotalDelivery = state.orderTotalDelivery - data.delivery
                ) : isThere++);

            }
            state.orderCount = state.orderItem.length
        },
        setOrders(state, data) {
            state.orderItems = data;
        },

    },

    getters: {
        getOrderType(state) {
            return state.orderType;
        },
        getOrder(state) {
            return state.orderItem;
        },
        getOrders(state) {
            return state.orderItems;
        },
        getOrderCount(state) {
            return state.orderCount;
        },
        getOrderTotalDineIn(state) {
            return state.orderTotalDineIn;
        },
        getOrderTotalDelivery(state) {
            return state.orderTotalDelivery;
        },
    }

}
export default order;
