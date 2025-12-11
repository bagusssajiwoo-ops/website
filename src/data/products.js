// Data produk untuk katalog furniture
export const products = [
    {
        id: 1,
        name: "Velvet Lounge Chair",
        category: "Kursi",
        price: "Rp 5.500.000",
        image: "https://images.unsplash.com/photo-1567538096630-e99482672606?q=80&w=800&auto=format&fit=crop",
        description: "Kursi lounge mewah dengan bahan velvet premium"
    },
    {
        id: 2,
        name: "Minimalist Sofa",
        category: "Sofa",
        price: "Rp 12.500.000",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
        description: "Sofa minimalis modern dengan desain elegan"
    },
    {
        id: 3,
        name: "Oak Coffee Table",
        category: "Meja",
        price: "Rp 3.500.000",
        image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800&auto=format&fit=crop",
        description: "Meja kopi kayu oak solid berkualitas tinggi"
    },
    {
        id: 4,
        name: "Modern Standing Lamp",
        category: "Lampu",
        price: "Rp 1.500.000",
        image: "https://images.unsplash.com/photo-1507473888900-52e1adad5420?q=80&w=800&auto=format&fit=crop",
        description: "Lampu standing modern dengan desain kontemporer"
    },
    {
        id: 5,
        name: "Accent Armchair",
        category: "Kursi",
        price: "Rp 4.500.000",
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop",
        description: "Kursi accent dengan desain unik dan nyaman"
    },
    {
        id: 6,
        name: "Wooden Cabinet",
        category: "Lemari",
        price: "Rp 8.500.000",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
        description: "Lemari kayu jati dengan detail ukiran klasik"
    },
    {
        id: 7,
        name: "King Size Bed",
        category: "Tempat Tidur",
        price: "Rp 15.000.000",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
        description: "Tempat tidur king size kayu jati mewah"
    },
    {
        id: 8,
        name: "Dining Table Set",
        category: "Meja",
        price: "Rp 18.000.000",
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
        description: "Set meja makan untuk 6 orang dengan kursi"
    },
    {
        id: 9,
        name: "Sofa Tamu Klasik",
        category: "Sofa",
        price: "Rp 14.000.000",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
        description: "Sofa tamu klasik dengan ukiran detail"
    }
];

// Fungsi untuk mendapatkan semua kategori unik
export const getCategories = () => {
    const categories = [...new Set(products.map(p => p.category))];
    return categories;
};

// Fungsi untuk mendapatkan produk berdasarkan kategori
export const getProductsByCategory = (category) => {
    return products.filter(p => p.category === category);
};
