
export default class AuthorInfoDTO {
    constructor(authorData) {
        this.pseudonym = authorData.pseudonym || '';
        this.realName = authorData.realName || '';
        this.description = authorData.description || '';
        this.authorPhoto = authorData.authorPhoto || '';
    }
}
