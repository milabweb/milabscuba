<template>
    <div class="container p-4">
        <div class="h-100 rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h6 class="mb-0">{{ $t('toDo.name') }}</h6>
            </div>
            <div class="d-flex mb-2">
                <input v-model="description" class="form-control bg-transparent" type="text"
                       :placeholder=" $t('toDo.enterTask') ">
                <button @click="todoAdd()" type="button" class="btn btn-primary ms-2">{{ $t('general.add') }}</button>
            </div>
            <div class="d-flex align-items-center border-bottom py-2" v-for="item in getItems">
                <input class="form-check-input m-0" type="checkbox">
                <div class="w-100 ms-3">
                    <div class="d-flex w-100 align-items-center justify-content-between">
                        <span>{{ item.description }}</span>
                        <button :name="item.id" @click="itemDelete(item.id)" class="btn btn-sm"><i
                            class="fa fa-times"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "list",
    data() {
        return {
            description: ''
        }
    },
    mounted() {
        this.$store.dispatch('toDoItems');
        // this.rows=this.$store.state.product.items
    },
    methods: {
        todoAdd() {
            this.$store.dispatch('toDoAdd', {description: this.description});
            this.description = ''
        },
        itemDelete($id) {
            this.$store.dispatch('toDoDelete', {id: $id});
        }
    },
    computed: {
        getItems() {
            return this.$store.getters.getToDo.data;
        },

        /*items(){
            return this.$store.state.product.items.data;
        },*/
    }
}
</script>

<style scoped>

</style>
