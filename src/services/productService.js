// Product Service - CRUD Operations untuk Firestore
// Upload gambar pakai ImgBB (gratis, tanpa kartu kredit!)

import {
    collection,
    doc,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    serverTimestamp,
    query,
    orderBy
} from 'firebase/firestore';
import { db } from './firebase';
import { uploadToImgBB } from '../config/imgbb';

const COLLECTION_NAME = 'products';

// Get all products
export const getAllProducts = async () => {
    try {
        const productsRef = collection(db, COLLECTION_NAME);
        const q = query(productsRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);

        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return { success: true, products };
    } catch (error) {
        console.error('Error fetching products:', error);
        return { success: false, error: 'Gagal mengambil data produk.' };
    }
};

// Get single product by ID
export const getProductById = async (productId) => {
    try {
        const productRef = doc(db, COLLECTION_NAME, productId);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
            return {
                success: true,
                product: { id: productSnap.id, ...productSnap.data() }
            };
        } else {
            return { success: false, error: 'Produk tidak ditemukan.' };
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        return { success: false, error: 'Gagal mengambil data produk.' };
    }
};

// Add new product
export const addProduct = async (productData) => {
    try {
        const productsRef = collection(db, COLLECTION_NAME);
        const newProduct = {
            ...productData,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        };

        const docRef = await addDoc(productsRef, newProduct);

        return { success: true, productId: docRef.id };
    } catch (error) {
        console.error('Error adding product:', error);
        return { success: false, error: 'Gagal menambah produk.' };
    }
};

// Update existing product
export const updateProduct = async (productId, productData) => {
    try {
        const productRef = doc(db, COLLECTION_NAME, productId);
        const updatedData = {
            ...productData,
            updatedAt: serverTimestamp()
        };

        await updateDoc(productRef, updatedData);

        return { success: true };
    } catch (error) {
        console.error('Error updating product:', error);
        return { success: false, error: 'Gagal mengupdate produk.' };
    }
};

// Delete product
export const deleteProduct = async (productId) => {
    try {
        const productRef = doc(db, COLLECTION_NAME, productId);
        await deleteDoc(productRef);

        return { success: true };
    } catch (error) {
        console.error('Error deleting product:', error);
        return { success: false, error: 'Gagal menghapus produk.' };
    }
};

// Upload image to ImgBB (Gratis, tanpa kartu!)
export const uploadProductImage = async (file) => {
    try {
        const result = await uploadToImgBB(file);

        if (result.success) {
            return {
                success: true,
                imageUrl: result.imageUrl
            };
        } else {
            return result;
        }
    } catch (error) {
        console.error('Error uploading image:', error);
        return { success: false, error: 'Gagal mengupload gambar.' };
    }
};
