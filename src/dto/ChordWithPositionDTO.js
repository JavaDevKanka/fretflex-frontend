import FileMetaDataDTO from "@/dto/FileMetaDataDTO.js";

export default class ChordWithPositionDTO {
    constructor(chordData) {
        this.chord = chordData.chord || '';
        this.position = chordData.position || null;
        this.chordImage = new FileMetaDataDTO(chordData.chordImage || {});
    }
}