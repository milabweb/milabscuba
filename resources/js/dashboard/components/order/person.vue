<template>
    <div class="col-12">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-person-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-person"
                        type="button" role="tab" aria-controls="nav-person" aria-selected="true">Müşteri Bilgileri
                </button>
                <button class="nav-link" id="nav-old-order-tab" data-bs-toggle="tab" data-bs-target="#old-order"
                        type="button" role="tab" aria-controls="old-order" aria-selected="false">Eski Siparişler
                </button>
            </div>
        </nav>
        <div class="tab-content pt-4" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-person" role="tabpanel" aria-labelledby="nav-person-tab">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                Müşteri
                            </div>
                            <div class="card-body">
                                <div class="p-1">
                                    <div class=" rounded p-2">
                                        <div class="form-floating mb-3">
                                            <input type="number" class="form-control" id="floatingInput"
                                                   placeholder="555-222-33-44">
                                            <label for="floatingInput">Telefon Numarası</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="nameInput"
                                                   placeholder="555-222-33-44">
                                            <label for="nameInput">Adı</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="surnameInput"
                                                   placeholder="555-222-33-44">
                                            <label for="surnameInput">Soyadı</label>
                                        </div>

                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingPassword"
                                                   placeholder="Password">
                                            <label for="floatingPassword">Adres</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <select class="form-select" id="floatingSelect"
                                                    aria-label="Floating label select example">
                                                <option value="1">İş</option>
                                                <option value="2">Ev</option>
                                                <option value="3">Yakın Adres</option>
                                            </select>
                                            <label for="floatingSelect">Adres Tipi</label>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6  pt-4">
                        <div class="card">
                            <div class="card-header">
                                Sürücü Tarif Notu
                            </div>
                            <div class="card-body">
                                <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here"
                                          id="floatingTextarea" style="height: 150px;"></textarea>
                                    <label for="floatingTextarea">Açıklama</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 pt-4">
                        <div class="card">
                            <div class="card-header">
                                Müşteri İle İlgili Notlar
                            </div>
                            <div class="card-body">
                                <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here"
                                          id="floatingTextareaa" style="height: 150px;"></textarea>
                                    <label for="floatingTextareaa">Açıklama</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="old-order" role="tabpanel" aria-labelledby="old-order-tab">...
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "person"
}
</script>

<style scoped>

</style>
