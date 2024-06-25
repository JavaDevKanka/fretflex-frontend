// AuthorService.js
import BaseApi from '@/components/api/BaseApi';

const API_ENDPOINT = 'author';

class AuthorService extends BaseApi {
    constructor() {
        super(API_ENDPOINT);
    }

    async getAuthorCountries() {
        try {
            return await this.get('getAuthorCountries');
        } catch (error) {
            throw error;
        }
    }

    async getAuthorsByPseudonymOnDynamic(pseudonym) {
        try {
            return await this.get(`getAuthorsByPseudonymOnDynamic/${pseudonym}`);
        } catch (error) {
            throw error;
        }
    }

    async saveAuthor(authorRequest) {
        try {
            return await this.post('saveAuthor', authorRequest);
        } catch (error) {
            throw error;
        }
    }

    async getAuthorInfoByPopularity(count) {
        try {
            return await this.get(`getAuthorInfoByPopularity/${count}`);
        } catch (error) {
            throw error;
        }
    }

    async getAuthorByPseudonym(pseudonym) {
        try {
            return await this.get(`by-first-letters-of/${pseudonym}`);
        } catch (error) {
            throw error;
        }
    }
}

export default AuthorService;
