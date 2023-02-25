import {createI18n} from "vue-i18n";

const dashboard = {
    tr: {
        general: {
            name: 'İsim',
            number: 'Numara',
            startDate: 'Başlama Zamanı',
            endDate: 'Bitiş Zamanı'
        },
        sidebar: {
            home: 'Ana Sayfa',
            orderPanel: 'Sipariş Paneli',
            category: 'Kategori',
            product: 'Ürün',
            toDoList: 'Notlar'
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
    dashboard, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})
export default i18n;
