export default class SongPreviewDTO {
    constructor(songPreviewData) {
        this.songName = songPreviewData.songName || '';
        this.authorPseudonym = songPreviewData.authorPseudonym || '';
        this.difficultInStars = songPreviewData.difficultInStars || '';
        this.genre = songPreviewData.genre || '';
        this.songPhoto = songPreviewData.songPhoto || '';
    }
}