export default class FileMetaDataDTO {
    constructor(fileMetaData) {
        this.name = fileMetaData.name || '';
        this.fileExtension = fileMetaData.fileExtension || '';
        this.size = fileMetaData.size || null;
        this.content = fileMetaData.content || '';
    }
}