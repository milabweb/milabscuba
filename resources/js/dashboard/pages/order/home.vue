<template>
    <div class="p-4 ">
        <div class="">
            <div class="row justify-content-end">
                <div class="col-1">
                    <button @click="this.$store.state.order.orderType=1"
                            :class="{active:orderType===1   }" class="btn btn-primary nav-link">Dışarı
                        Siparişi
                    </button>
                </div>
                <div class="col-1">
                    <button @click="(this.$store.state.order.orderType=2)"
                            :class="{active:orderType===2}" class="btn btn-primary nav-link">Masa
                        Siparişi
                    </button>
                </div>
            </div>
            <div class="col-sm-12 col-xl-12">
                <div class="col-sm-12 col-xl-12">
                    <div class="bg-light rounded h-100  p-4">
                        <div class="d-flex align-items-start">
                            <div class="nav flex-column nav-pills me-3 " id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-home" type="button" role="tab"
                                        aria-controls="v-pills-home" aria-selected="true">Giriş
                                </button>
                                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile" type="button" role="tab"
                                        aria-controls="v-pills-profile" aria-selected="false">Müşteri
                                </button>
                                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-messages" type="button" role="tab"
                                        aria-controls="v-pills-messages" aria-selected="false">Kupon
                                </button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-settings" type="button" role="tab"
                                        aria-controls="v-pills-settings" aria-selected="false">Ödeme
                                </button>
                            </div>
                            <div class="tab-content" id="v-pills-tabContent" style=" width: -webkit-fill-available;">
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                     aria-labelledby="v-pills-home-tab">
                                    <order-entry/>
                                </div>
                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <person/>
                                </div>
                                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                     aria-labelledby="v-pills-messages-tab">
                                    Sed kasd kasd ea clita sed lorem amet tempor est voluptua, labore stet dolores
                                    gubergren
                                    clita lorem sed nonumy at. Dolores et ut erat voluptua. Est voluptua stet accusam
                                    rebum,
                                    elitr amet sit takimata sea eirmod. Sanctus elitr amet sit dolore sea stet et ut.
                                    Dolor et
                                    sanctus elitr ut.
                                </div>
                                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                     aria-labelledby="v-pills-settings-tab">
                                    Sit et vero kasd sea et at, aliquyam takimata et et est, labore et takimata sed ut
                                    stet
                                    sanctus, nonumy dolor invidunt sit labore et, amet et dolor sit dolor tempor et
                                    dolor ipsum
                                    nonumy, accusam clita sadipscing ut et labore labore est, dolore accusam vero at est
                                    sit.
                                    Invidunt.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-end p-2">
                <div class="col-1">
                    <a href="/dashboard" class="btn btn-primary nav-link">Çıkış</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import orderEntry from "../../components/order/orderEntry";
import Person from "../../components/order/person";

export default {
    name: "home",
    components: {Person, orderEntry},
    computed: {
        orderType() {
            return this.$store.getters.getOrderType
        },
    },

}
</script>

<style scoped>

</style>
