import FileMetaDataDTO from "@/dto/FileMetaDataDTO.js";

export default class ChordDTO {
    constructor(chordData) {
        this.tone = chordData.tone || '';
        this.nameOfChord = chordData.nameOfChord || '';
        this.difficult = chordData.difficult || '';
        this.fingering = new FileMetaDataDTO(chordData.fingering || {});
        this.sound = new FileMetaDataDTO(chordData.sound || {});
    }
}