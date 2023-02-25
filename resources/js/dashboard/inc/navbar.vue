<template>
    <!-- Navbar Start -->
    <nav class="navbar navbar-expand  navbar-light sticky-top px-4 py-0" style="    background-color: #343a40!important;
}">
        <router-link tag="a" to="/dashboard" class="navbar-brand d-flex d-lg-none me-4">
            <h2 class="text-primary mb-0">BigBoss</h2>
        </router-link>
        <a href="#" class="sidebar-toggler flex-shrink-0">
            <i class="fa fa-bars"></i>
        </a>
        <form class="d-none d-md-flex ms-4">
            <input class="form-control border-0" type="search" :placeholder="$t('general.search')">
        </form>
        <div class="navbar-nav align-items-center ms-auto">
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <i class="fa fa-envelope me-lg-2"></i>
                    <span class="d-none d-lg-inline-flex">{{ $t('general.message') }}</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                    <a href="#" class="dropdown-item">
                        <div class="d-flex align-items-center">
                            <img class="rounded-circle" src="assets/dashboard/img/BigBossChefsProfil.png" alt=""
                                 style="width: 40px; height: 40px;">
                            <div class="ms-2">
                                <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                <small>15 minutes ago</small>
                            </div>
                        </div>
                    </a>
                    <hr class="dropdown-divider">
                    <a href="#" class="dropdown-item">
                        <div class="d-flex align-items-center">
                            <img class="rounded-circle" src="assets/dashboard/img/BigBossChefsProfil.png" alt=""
                                 style="width: 40px; height: 40px;">
                            <div class="ms-2">
                                <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                <small>15 minutes ago</small>
                            </div>
                        </div>
                    </a>
                    <hr class="dropdown-divider">
                    <a href="#" class="dropdown-item">
                        <div class="d-flex align-items-center">
                            <img class="rounded-circle" src="assets/dashboard/img/BigBossChefsProfil.png" alt=""
                                 style="width: 40px; height: 40px;">
                            <div class="ms-2">
                                <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                <small>15 minutes ago</small>
                            </div>
                        </div>
                    </a>
                    <hr class="dropdown-divider">
                    <a href="#" class="dropdown-item text-center">See all message</a>
                </div>
            </div>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <i class="fa fa-bell me-lg-2"></i>
                    <span class="d-none d-lg-inline-flex">{{ $t('toDo.name') }}</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                    <span v-for="item in getItems">

                    <a href="#" class="dropdown-item d-flex w-100 align-items-center justify-content-between">
                        <h6 class="fw-normal mb-0">{{ item.description }}</h6>
                        <button :name="item.id" @click="itemDelete(item.id)" class="btn btn-sm"><i
                            class="fa fa-times"></i></button>
                        <!--                        <small>{{ item.updated_at }}</small>-->

                    </a>
                        <hr class="dropdown-divider">
                    </span>

                    <router-link tag="a" to="/dashboard/todo/list" class="dropdown-item text-center">
                        {{ $t('general.showAll') }}
                    </router-link>
                </div>
            </div>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <img class="rounded-circle me-lg-2" src="assets/dashboard/img/BigBossChefsProfil.png" alt=""
                         style="width: 40px; height: 40px;">
                    <span class="d-none d-lg-inline-flex">{{
                            $t("general.admin")
                        }}</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                    <a href="#" class="dropdown-item">Log Out</a>
                </div>
            </div>
        </div>
    </nav>
    <!-- Navbar End -->
</template>

<script>
export default {
    name: "navbar",
    mounted() {
        this.$store.dispatch('toDoItems');
        // this.rows=this.$store.state.product.items
    },
    methods: {
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
