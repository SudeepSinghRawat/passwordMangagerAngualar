
export class Password {
    private id: Number;
    private website: String;
    private websiteUrl: String;
    private name: String;
    private password: String;
    private confirmPassword: String;
    private priority: String;

    constructor(id: number, website: String, websiteurl: String, name: String, password: String, confirmPassword : String, priority: String ) {
        this.id = id;
        this.website = website;
        this.websiteUrl = websiteurl;
        this.name = name;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.priority = priority;
    }

    public create(id: number): void {

    }

    public  getwebSite(): String {
        return this.websiteUrl;
    }
    public setWebsiteName(website: String): void {
        this.website = website;
    }
    public get getId(): Number {
        return 1;
    }

    public static creatBlank(){
        return new Password(-1,'', '','','','','High');
    }
}
