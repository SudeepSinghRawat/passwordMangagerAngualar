
export class Password {
    private id: Number;
    private website: String;
    private websiteUrl: String;
    private name: String;
    private password: String;
    private confirmPassword: String;
    private priority: String;

    constructor() {
        this.id = -1;
        this.website = '';
        this.websiteUrl = '';
        this.name = '';
        this.password = '';
        this.confirmPassword = '';
        this.priority = 'High';
    }
}
