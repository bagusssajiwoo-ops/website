// ImgBB Configuration
// API untuk upload gambar gratis tanpa kartu kredit

export const IMGBB_API_KEY = "594122933f07f863ffa70bee07bf804c";
export const IMGBB_UPLOAD_URL = "https://api.imgbb.com/1/upload";

// Upload image to ImgBB
export const uploadToImgBB = async (file) => {
    try {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('key', IMGBB_API_KEY);

        const response = await fetch(IMGBB_UPLOAD_URL, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            return {
                success: true,
                imageUrl: data.data.url,
                displayUrl: data.data.display_url,
                deleteUrl: data.data.delete_url,
            };
        } else {
            return {
                success: false,
                error: 'Upload gagal. Silakan coba lagi.',
            };
        }
    } catch (error) {
        console.error('ImgBB upload error:', error);
        return {
            success: false,
            error: 'Gagal mengupload gambar. Periksa koneksi internet Anda.',
        };
    }
};
