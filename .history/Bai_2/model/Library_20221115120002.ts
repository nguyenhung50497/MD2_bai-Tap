export class Library {
    private id: number;
    private publishingCompany: string;
    private releaseNumber: number;

    constructor(code: number, publishingCompany: string, releaseNumber: number) {
        this.id = code;
        this.publishingCompany = publishingCompany;
        this.releaseNumber = releaseNumber;
    }
    public getCode(): number {
        return this.code;
    }
    public getPublishingCompany(): string {
        return this.publishingCompany;
    }
    public getReleaseNumber(): number {
        return this.releaseNumber;
    }
    public setCode(code: number): void {
        this.code = code;
    }
    public setPublishingCompany(publishingCompany: string): void {
        this.publishingCompany = publishingCompany;
    }
    public setReleaseNumber(releaseNumber: number): void {
        this.releaseNumber = releaseNumber;
    }
}