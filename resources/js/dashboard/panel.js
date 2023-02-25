require('../bootstrap');
import {createApp} from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router';
import Panel from './Panels'
import store from './store'
import {createI18n} from 'vue-i18n'

const messages = {
    tr: {
        general: {
            admin: 'Ahmet Talha',
            name: 'İsim',
            number: 'Numara',
            startDate: 'Başlama Zamanı',
            endDate: 'Bitiş Zamanı',
            detail: 'Detay',
            add: 'Ekle',
            showAll: 'Tümünü Göster',
            delete: 'Sil',
            update: 'Güncelle',
            search: 'Arama',
            message: 'Mesajlar'
        },
        sidebar: {
            home: 'Ana Sayfa',
            orderPanel: 'Sipariş Paneli',
            category: 'Kategori',
            product: 'Ürün',
            toDoList: 'Notlar'
        },
        toDo: {
            name: 'Notlar',
            enterTask: 'Not Giriş'
        },
        staff: {
            startDate: 'Giriş Zamanı',
            endDate: 'Çıkış Zamanı',
        },
        sale: {
            totalMoney: 'Toplam Tutar',
            totalOrder: 'Toplam Sipariş',
            profit: 'Kâr(Yaklaşık)',
            loss: 'Gider(Yaklaşık)',
        }
    },
    en: {
        sidebar: {
            home: 'Home',
            orderPanel: 'Order Panel',
            category: 'Category',
            product: 'Product',
            toDoList: 'To Do List'
        }
    },

}

// 2. Create i18n instance with options
const i18n = createI18n({
    locale: 'tr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})

const app = createApp(Panel)
app.use(VueAxios, axios)
app.use(i18n)
app.use(store)
app.use(router)
app.mount('#dashboard')
