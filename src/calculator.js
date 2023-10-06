const app = Vue.createApp({
    data() {
        return {
            showName: 'Pertunjukan Tari Kecak Bali',
            showDate: '25 Oktober 2023',
            ticketPrice: 50,
            ticketQuantity: 1,
        };
    },
    computed: {
        total() {
            return this.ticketPrice * this.ticketQuantity;
        }
    },
    methods: {
        bookTickets() {
            // Validasi agar jumlah tiket tidak menjadi negatif
            if (this.ticketQuantity < 0) {
                this.ticketQuantity = 0;
            }
            alert(`Tiket berhasil dipesan untuk ${this.ticketQuantity} orang. Total harga: $${this.total}`);
        }
    },
    data() {
        return {
            showName: 'Pertunjukan Tari Kecak Bali',
            showDate: '', // Tambahkan ini untuk menyimpan tanggal pertunjukan
            ticketPrice: 50,
            ticketQuantity: 1,
        };
    },
    
});

app.mount('#app');
