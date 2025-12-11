// Custom Hook untuk Authentication State
// Manage auth state globally dalam aplikasi

import { useState, useEffect } from 'react';
import { onAuthChange } from '../services/auth';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Subscribe to auth state changes
        const unsubscribe = onAuthChange((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup subscription
        return () => unsubscribe();
    }, []);

    return { user, loading, isAuthenticated: !!user };
};
