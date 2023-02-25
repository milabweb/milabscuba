import store from "../index";
import axios from "axios";
import {mutate} from "lodash/fp/_mapping";

export const product = {

    state: () => ({
        toDoItems: [],
    }),

    actions: {

        async toDoItems({commit, state}) {
            await axios.get("/api/todo/list").then(resp => {
                //console.log(resp);
                commit("setToDoItems", resp.data);
            })
        },

        async toDoAdd({commit, state}, prop) {
            await axios.post("/api/todo/add", prop).then(resp => {
                //console.log(resp);
                commit("setToDoItems", resp.data);
            })
        },
        async toDoDelete({commit, state}, prop) {
            await axios.get("/api/todo/delete/" + prop.id).then(resp => {
                commit("setToDoItems", resp.data);
            })
        },

    },
    mutations: {

        setToDoItems(state, data) {
            state.toDoItems = data;
        },
    },

    getters: {
        getToDo(state) {
            return state.toDoItems;
        },
    }

}
export default product;
