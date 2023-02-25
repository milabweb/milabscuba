<template>

    <div  style="height: 100%">
        <div class="example-wrapper row-cols-auto" >
            <router-link  tag="button" to="/dashboard/product/edit/0" type="button" class="btn btn-warning rounded-pill m-2  col-2">New Add</router-link>
            <ag-grid-vue

                class="ag-theme-alpine col-9"
                id="myGrid"
                :defaultColDef="defaultColDef"
                :columnDefs="columnDefs"
                :rowData="getItems"></ag-grid-vue>
        </div>
    </div>
</template>

<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import button from '../../components/product/list/editButton'
import stock from '../../components/product/list/stock'

export default {
    name: "list",
    components: {
        AgGridVue,
        button,
        stock
    },
    setup() {
        return {
            columnDefs: [
                { field: 'id',maxWidth:100},
                { field: 'name'},
                { field: 'stock', cellRenderer:'stock' },
                { field: 'description'},
                { field: 'short' },
                { field: 'Process',cellRenderer: 'button'  }
            ],
            defaultColDef: {
                sortable: true,
                filter: true,
                resizable: true,
                minWidth: 100,
                flex: 1,
            },
            rows: [],
        };
    },
    mounted(){
        this.$store.dispatch('productItems');
        // this.rows=this.$store.state.product.items
    },
    methods:{

    },
    computed: {
        getItems(){
            return this.$store.getters.getProducts.data;
        },
        /*items(){
            return this.$store.state.product.items.data;
        },*/
    }
};
</script>
<style scoped>
.example-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    border: solid 50px!important;
    border-color: #FFFFFF!important;
}

#myGrid {
    flex: 1 1 0px;
    width: 100%;
}
</style>
