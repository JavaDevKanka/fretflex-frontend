
export default class GenreDTO {
    constructor(genreData) {
        this.genreCategory = genreData.genreCategory || '';
        this.subgenre = genreData.subgenre || [];
    }
}
