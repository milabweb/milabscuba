<template>
    <!-- Blank Start -->

    <!-- Sale & Revenue Start -->
    <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
            <div class="col-sm-6 col-xl-3">
                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                    <i class="fa fa-chart-line fa-3x text-primary"></i>
                    <div class="ms-3">
                        <p class="mb-2">{{ $t('sale.totalMoney') }}</p>
                        <h6 class="mb-0">₺1234</h6>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                    <i class="fa fa-chart-bar fa-3x text-primary"></i>
                    <div class="ms-3">
                        <p class="mb-2">{{ $t('sale.totalOrder') }}</p>
                        <h6 class="mb-0">₺1234</h6>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                    <i class="fa fa-chart-area fa-3x text-primary"></i>
                    <div class="ms-3">
                        <p class="mb-2">{{ $t('sale.profit') }}</p>
                        <h6 class="mb-0">₺1234</h6>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                    <i class="fa fa-chart-pie fa-3x text-primary"></i>
                    <div class="ms-3">
                        <p class="mb-2">{{ $t('sale.loss') }}</p>
                        <h6 class="mb-0">₺1234</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Sale & Revenue End -->
    <!-- Recent Sales Start -->
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h6 class="mb-0">Personel</h6>
                <a href="">{{ $t('general.showAll') }}</a>
            </div>
            <div class="table-responsive">
                <table class="table text-start align-middle table-bordered table-hover mb-0">
                    <thead>
                    <tr class="text-dark">
                        <th scope="col"><input class="form-check-input" type="checkbox"></th>
                        <th scope="col">{{ $t('general.name') }}</th>
                        <th scope="col">{{ $t('general.number') }}</th>
                        <th scope="col">{{ $t('staff.startDate') }}</th>
                        <th scope="col">{{ $t('staff.endDate') }}</th>
                        <th scope="col">{{ $t('general.detail') }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></td>
                        <td>Ahmet</td>
                        <td>05551112233</td>
                        <td>12:02</td>
                        <td>21:00</td>
                        <td><a class="btn btn-sm btn-primary" href="">{{ $t('general.detail') }}</a></td>
                    </tr>
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></td>
                        <td>Ahmet</td>
                        <td>05551112233</td>
                        <td>12:02</td>
                        <td>21:00</td>
                        <td><a class="btn btn-sm btn-primary" href="">{{ $t('general.detail') }}</a></td>
                    </tr>
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></td>
                        <td>Ahmet</td>
                        <td>05551112233</td>
                        <td>12:02</td>
                        <td>21:00</td>
                        <td><a class="btn btn-sm btn-primary" href="">{{ $t('general.detail') }}</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- Recent Sales End -->
    <!-- Blank End -->
</template>

<script>
export default {
    name: "home"
}
</script>

<style scoped>

</style>
