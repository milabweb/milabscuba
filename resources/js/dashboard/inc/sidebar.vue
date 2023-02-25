<template>
    <!-- Sidebar Start -->
    <div class="sidebar pe-4 pb-3" style="    background-color: #343a40!important;
}">
        <nav class="navbar bg-dark navbar-light" style="    background-color: #343a40!important;
}">
            <router-link tag="a" to="/dashboard" class="navbar-brand mx-4 mb-3 mt-2">
                <h3 class="text-warning"><img class="" src="assets/dashboard/img/BigBossChefsLogo.png"
                                              alt=""
                                              style="width: 147px; height: 40px;"></h3>
            </router-link>
            <div class="d-flex align-items-center ms-4 mb-4">
                <div class="position-relative">
                    <img class="rounded-circle" src="assets/dashboard/img/BigBossChefsProfil.png" alt=""
                         style="width: 40px; height: 40px;">
                    <div
                        class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                </div>
                <div class="ms-3">
                    <h6 class="mb-0">{{
                        $t("general.admin")
                        }}</h6>
                    <span>Admin</span>
                </div>
            </div>
            <div class="navbar-nav w-100">
                <router-link tag="a" to="/dashboard" class="nav-item nav-link"><i class="fa fa-tachometer-alt me-2"></i>{{
                    $t("sidebar.home")
                    }}
                </router-link>
                <a href="/dashboard/order" class="nav-item nav-link"><i
                    class="fa fa-cart-plus me-2"></i>{{
                    $t("sidebar.orderPanel")
                    }}
                </a>
                <!--                <div class="nav-item dropdown">-->
                <!--                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>Elements</a>-->
                <!--                    <div class="dropdown-menu bg-transparent border-0">-->
                <!--                        <a href="button.html" class="dropdown-item">Buttons</a>-->
                <!--                        <a href="typography.html" class="dropdown-item">Typography</a>-->
                <!--                        <a href="element.html" class="dropdown-item">Other Elements</a>-->
                <!--                    </div>-->
                <!--                </div>-->
                <router-link tag="a" to="/dashboard/category/list" class="nav-item nav-link"><i
                    class="fa fa-table me-2"></i>{{
                    $t("sidebar.category")
                    }}
                </router-link>
                <router-link tag="a" to="/dashboard/product/list" class="nav-item nav-link"><i
                    class="fa fa-th me-2"></i>{{
                    $t("sidebar.product")
                    }}
                </router-link>
                <router-link tag="a" to="/dashboard/todo/list" class="nav-item nav-link"><i
                    class="fa fa-list-alt me-2"></i>{{
                    $t("sidebar.toDoList")
                    }}
                </router-link>
                <!--                <a href="form.html" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Forms</a>-->
                <!--                <a href="chart.html" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>Charts</a>-->
                <!--                <div class="nav-item dropdown">-->
                <!--                    <a href="#" class="nav-link dropdown-toggle " data-bs-toggle="dropdown"><i-->
                <!--                        class="far fa-file-alt me-2"></i>Pages</a>-->
                <!--                    <div class="dropdown-menu bg-transparent border-0">-->
                <!--                        <a href="signin.html" class="dropdown-item">Sign In</a>-->
                <!--                        <a href="signup.html" class="dropdown-item">Sign Up</a>-->
                <!--                        <a href="404.html" class="dropdown-item">404 Error</a>-->
                <!--                        <a href="blank.html" class="dropdown-item active">Blank Page</a>-->
                <!--                    </div>-->
                <!--                </div>-->
            </div>
        </nav>
    </div>
    <!-- Sidebar End -->
</template>

<script>
export default {
    name: "sidebar"
}
</script>

<style scoped>

</style>
