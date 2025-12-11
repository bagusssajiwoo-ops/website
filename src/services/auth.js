// Authentication Service
// Handles login, logout, and auth state

import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from './firebase';

// Login function
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Login error:', error);
        let errorMessage = 'Login gagal. Silakan coba lagi.';

        if (error.code === 'auth/user-not-found') {
            errorMessage = 'Email tidak terdaftar.';
        } else if (error.code === 'auth/wrong-password') {
            errorMessage = 'Password salah.';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'Format email tidak valid.';
        }

        return { success: false, error: errorMessage };
    }
};

// Logout function
export const logoutUser = async () => {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        console.error('Logout error:', error);
        return { success: false, error: 'Logout gagal.' };
    }
};

// Get current user
export const getCurrentUser = () => {
    return auth.currentUser;
};

// Auth state observer
export const onAuthChange = (callback) => {
    return onAuthStateChanged(auth, callback);
};
