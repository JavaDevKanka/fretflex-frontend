import SongPreviewDTO from "@/dto/SongPreviewDTO.js";

export default class PageOfSongDTO {
    constructor(pageData) {
        this.content = pageData.content ? pageData.content.map(songPreview => new SongPreviewDTO(songPreview)) : [];
        this.totalPages = pageData.totalPages || null;
        this.totalElements = pageData.totalElements || null;
        this.last = pageData.last || false;
        this.first = pageData.first || false;
        this.size = pageData.size || null;
        this.number = pageData.number || null;
        this.numberOfElements = pageData.numberOfElements || null;
        this.empty = pageData.empty || false;
    }
}