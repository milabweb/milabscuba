<template>

    <div>
        <router-view v-if="$route.fullPath==='/dashboard/order'" :key="$route.fullPath"></router-view>
        <div v-else-if="$route.fullPath!=='/dashboard/order'"
             class="container-fluid position-relative bg-white d-flex p-0">
            <spinner/>

            <sidebar/>
            <!-- Content Start -->
            <div class="content">
                <navbar/>
                <router-view :key="$route.fullPath"></router-view>
                <ffooter/>
            </div>
            <!-- Content End -->


            <!-- Back to Top -->
            <a href="#" class="btn btn-lg btn-warning btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
        </div>
    </div>
</template>

<script>

import Header from "./inc/header";
import Ffooter from "./inc/ffooter";
import Sidebar from "./inc/sidebar";
import Spinner from "./inc/spinner";
import Navbar from "./inc/navbar";
import Home from "./inc/home";

export default {
    name: "panels",
    components: {Home, Navbar, Spinner, Sidebar, Header, Ffooter},
}
</script>

<style scoped>

</style>

