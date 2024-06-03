import FileMetaDataDTO from "@/dto/FileMetaDataDTO.js";
import TextOfSongDTO from "@/dto/TextOfSongDTO.js";

export default class SongDTO {
    constructor(songData) {
        this.id = songData.id || null;
        this.songName = songData.songName || '';
        this.songDescription = songData.songDescription || '';
        this.difficultInStars = songData.difficultInStars || '';
        this.tempoBPM = songData.tempoBPM || null;
        this.rating = songData.rating || null;
        this.sampleYoutubeLink = songData.sampleYoutubeLink || '';
        this.textOfSong = new TextOfSongDTO(songData.textOfSong || {});
        this.songPhoto = new FileMetaDataDTO(songData.songPhoto || {});
    }
}