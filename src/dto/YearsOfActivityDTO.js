export default class YearsOfActivityDTO {
    constructor(yearsOfActivityData) {
        this.start = yearsOfActivityData.start || '';
        this.end = yearsOfActivityData.end || '';
    }
}