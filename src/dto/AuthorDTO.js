import YearsOfActivityDTO from "@/dto/YearsOfActivityDTO.js";

export default class AuthorDTO {
    constructor(authorData) {
        this.id = authorData.id || null;
        this.pseudonym = authorData.pseudonym || '';
        this.realName = authorData.realName || '';
        this.yearsOfActivity = new YearsOfActivityDTO(authorData.yearsOfActivity || {});
        this.description = authorData.description || '';
        this.country = authorData.country || '';
        this.authorPhoto = authorData.authorPhoto || '';
        this.age = authorData.age || null;
        this.authorRating = authorData.authorRating || null;
    }
}