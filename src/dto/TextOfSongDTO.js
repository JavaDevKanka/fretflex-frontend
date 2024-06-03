import LinesWithChordsDTO from "@/dto/LinesWithChordsDTO.js";

export default class TextOfSongDTO {
    constructor(textOfSongData) {
        this.linesWithChords = textOfSongData.linesWithChords ? textOfSongData.linesWithChords.map(line => new LinesWithChordsDTO(line)) : [];
    }
}