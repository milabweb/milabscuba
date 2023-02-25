<template>
    <div class="col-12">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sipariş
                </button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                        type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Siparişler
                </button>
            </div>
        </nav>
        <div class="tab-content pt-4" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div class="row">
                    <div class="col-3">
                        <div class="card">
                            <div class="card-header">
                                Sipariş Listesi
                            </div>
                            <div class="card-body">
                                <div class="p-1">
                                    <div class="card" v-for="item in order">
                                        <div class="card-body btn-warning form-control" @click="orderDelete(item)">
                                            <a>{{ item.name }}
                                                <span v-if="orderType===1">{{ item.delivery }}</span>
                                                <span v-else-if="orderType===2">{{ item.dine_in }}</span>
                                                ₺</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer ">
                                ({{ orderCount }} Ürün) Toplam :
                                <span v-if="orderType===1">{{ orderTotalDelivery }}</span>
                                <span v-else-if="orderType===2">{{ orderTotalDineIn }}</span>
                                ₺
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card">
                            <div class="card-header">
                                Ürünler
                            </div>
                            <div class="card-body">
                                <div class="row justify-content-start">

                                    <div class="col-3  " v-for="item in products">
                                        <div class="card">
                                            <div class="card-body btn-warning form-control"
                                                 @click="orderAdd(item.productDetail)">
                                                <a>{{
                                                        item.productDetail.name
                                                    }}</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <div class="card-header">
                                Kategoriler
                            </div>
                            <div class="card-body">


                                <div class="card" v-for="item in categories">
                                    <div class="card-body btn-warning form-control"
                                         @click="productCategory(item.id)">
                                        <a>{{ item.name }}</a>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "orderEntry",
    computed: {
        orderType() {
            return this.$store.getters.getOrderType
        },
        categories() {
            return this.$store.getters.getCategories.data
        },
        products() {
            return this.$store.getters.getProductCategory.products
        },
        order() {
            return this.$store.getters.getOrder
        },
        orderCount() {
            return this.$store.getters.getOrderCount
        },
        orderTotalDelivery() {
            return this.$store.getters.getOrderTotalDelivery
        },
        orderTotalDineIn() {
            return this.$store.getters.getOrderTotalDineIn
        },
    },
    mounted() {
        this.$store.dispatch('categoryItems')
    },
    methods: {
        productCategory($id) {
            this.$store.dispatch('productCategory', {id: $id})
        },
        orderAdd($item) {
            this.$store.commit('setOrderAdd', $item)
        },
        orderDelete($item) {
            this.$store.commit('setOrderDelete', $item)
        },
    },
}
</script>

<style scoped>

</style>
