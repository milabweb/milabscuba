<template>
    <div class="col-sm-12 col-xl-12">
        <div class="col-sm-12 col-xl-12">
            <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Vertical Navs & Tabs</h6>
                <div class="d-flex align-items-start">
                    <div class="nav flex-column nav-pills me-3 " id="v-pills-tab" role="tablist"
                         aria-orientation="vertical">
                        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-home" type="button" role="tab"
                                aria-controls="v-pills-home" aria-selected="true">General</button>
                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-profile" type="button" role="tab"
                                aria-controls="v-pills-profile" aria-selected="false">Detail</button>
                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-messages" type="button" role="tab"
                                aria-controls="v-pills-messages" aria-selected="false">Image</button>
                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-settings" type="button" role="tab"
                                aria-controls="v-pills-settings" aria-selected="false">Discount</button>
                    </div>
                    <div class="tab-content" id="v-pills-tabContent" style=" width: -webkit-fill-available;">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <general />
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <detail/>
                        </div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            Sed kasd kasd ea clita sed lorem amet tempor est voluptua, labore stet dolores gubergren clita lorem sed nonumy at. Dolores et ut erat voluptua. Est voluptua stet accusam rebum, elitr amet sit takimata sea eirmod. Sanctus elitr amet sit dolore sea stet et ut. Dolor et sanctus elitr ut.
                        </div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                            Sit et vero kasd sea et at, aliquyam takimata et et est, labore et takimata sed ut stet sanctus, nonumy dolor invidunt sit labore et, amet et dolor sit dolor tempor et dolor ipsum nonumy, accusam clita sadipscing ut et labore labore est, dolore accusam vero at est sit. Invidunt.
                        </div>
                    </div>
                </div>
                <button  @click="update()" type="button" class="btn btn-warning rounded-pill m-2 text-right">Save</button>
            </div>

        </div>
    </div>

</template>

<script>
import General from "../../components/category/edit/general";
import Detail from "../../components/category/edit/detail";
export default {
    name: "edit",
    components: {General,Detail},
    mounted(){
        this.$store.dispatch('categoryItem',{id:this.$route.params.id})
    },
    computed: {
        getItem(){
            return this.$store.getters.getCategory;
        },
        /*items(){
            return this.$store.state.product.items.data;
        },*/
    },
    methods:{
        update(){
            this.$store.dispatch('categoryUpdate',this.getItem)
            this.$router.push('/dashboard/category/list')
        },

    },

}
</script>

<style scoped>
.product-width {
    width: -webkit-fill-available;
}
</style>
