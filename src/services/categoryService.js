// Category Service - CRUD Operations untuk Firestore Categories
import {
    collection,
    doc,
    getDocs,
    addDoc,
    deleteDoc,
    serverTimestamp,
    query,
    orderBy
} from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION_NAME = 'categories';

// Get all categories
export const getAllCategories = async () => {
    try {
        const categoriesRef = collection(db, COLLECTION_NAME);
        const q = query(categoriesRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);

        const categories = [];
        querySnapshot.forEach((doc) => {
            categories.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return { success: true, categories };
    } catch (error) {
        console.error('Error fetching categories:', error);
        return { success: false, error: 'Gagal mengambil data kategori.' };
    }
};

// Add new category
export const addCategory = async (categoryData) => {
    try {
        const categoriesRef = collection(db, COLLECTION_NAME);
        const newCategory = {
            ...categoryData,
            createdAt: serverTimestamp()
        };

        const docRef = await addDoc(categoriesRef, newCategory);

        return { success: true, categoryId: docRef.id };
    } catch (error) {
        console.error('Error adding category:', error);
        return { success: false, error: 'Gagal menambah kategori.' };
    }
};

// Delete category
export const deleteCategory = async (categoryId) => {
    try {
        const categoryRef = doc(db, COLLECTION_NAME, categoryId);
        await deleteDoc(categoryRef);

        return { success: true };
    } catch (error) {
        console.error('Error deleting category:', error);
        return { success: false, error: 'Gagal menghapus kategori.' };
    }
};
