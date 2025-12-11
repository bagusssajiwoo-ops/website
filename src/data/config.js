// Konfigurasi WhatsApp
export const whatsappConfig = {
    // Nomor WhatsApp admin (format internasional tanpa +)
    phoneNumber: "62895422532976",

    // Template pesan default
    defaultMessage: "Halo, saya ingin bertanya tentang produk furniture Anda.",

    // Fungsi untuk generate pesan produk
    generateProductMessage: (productName, productPrice, productImage, productDescription) => {
        return `Halo Admin LuxeLiving,

Saya tertarik dengan produk:
📦 *${productName}*
📝 ${productDescription}
💰 Harga: ${productPrice}

🖼️ Lihat Gambar Produk:
${productImage}

Mohon informasi lebih lanjut mengenai:
- Ketersediaan stok
- Detail spesifikasi
- Proses pemesanan
- Estimasi waktu pengiriman

Terima kasih!`;
    },

    // Fungsi untuk membuka WhatsApp
    openWhatsApp: (message) => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }
};
