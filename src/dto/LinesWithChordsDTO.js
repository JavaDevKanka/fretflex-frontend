import ChordWithPositionDTO from "@/dto/ChordWithPositionDTO.js";

export default class LinesWithChordsDTO {
    constructor(lineData) {
        this.songBlock = lineData.songBlock || '';
        this.line = lineData.line || '';
        this.chordWithPositions = lineData.chordWithPositions ? lineData.chordWithPositions.map(chord => new ChordWithPositionDTO(chord)) : [];
    }
}
