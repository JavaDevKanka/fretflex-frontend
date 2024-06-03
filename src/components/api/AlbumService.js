// AlbumService.js
import BaseApi from '@/components/api/BaseApi';

const API_ENDPOINT = 'albumOperation/'; // Замените на URL вашего бэкенда

class AlbumService extends BaseApi {
    constructor() {
        super(API_ENDPOINT);
    }

    async saveAlbum(albumRequest, authorPseudonym = null) {
        return this.post('saveAlbum', albumRequest, { params: { authorPseudonym } });
    }

    async getAlbumsByNameOnDynamic(albumName) {
        return this.get(`getAlbumsByNameOnDynamic/${albumName}`);
    }
}

export default new AlbumService();
