
export default class AlbumDTO {
    constructor(albumData) {
        this.id = albumData.id || null;
        this.albumName = albumData.albumName || '';
        this.description = albumData.description || '';
        this.release = albumData.release || '';
        this.albumPhoto = albumData.albumPhoto || '';
    }
}
