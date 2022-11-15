import {Library} from '../model/Library'
import {Book} from '../model/Book'
import {Magazine} from '../model/Magazine'
import {Newspaper} from '../model/Newspaper'
import {IManager} from './IManager'

export class LibraryManager implements IManager<Library> {
    public listDocuments: Library[] = [];

    constructor(books: Book[], magazines: Magazine[], newspapers: Newspaper[]) {
    }

    public addBook(book: Book): void {
        this.books.push(book);
    }
    public addMagazine(magazine: Magazine): void {
        this.magazines.push(magazine);
    }
    public addNewspaper(newspaper: Newspaper): void {
        this.newspapers.push(newspaper);
    }
    public removeBook(book: Book): void {
        this.books.splice(this.books.indexOf(book), 1);
    }
    public removeMagazine(magazine: Magazine): void {
        this.magazines.splice(this.magazines.indexOf(magazine), 1)
    }
    public removeNewspaper(newspaper: Newspaper): void {
        this.newspapers.splice(this.newspapers.indexOf(newspaper), 1)
    }
    public searchCode(codes: number): void {
        this.books.filter(document => document.code === codes).forEach(document => {console.log(document)})
        this.magazines.filter(document => document.code === codes).forEach(document => {console.log(document)})
        this.newspapers.filter(document => document.code === codes).forEach(document => {console.log(document)})
    }
    public showBook(): void {
        this.books.forEach(document => { console.log(document)});
    }
    public showMagazine(): void {
        this.magazines.forEach(document => { console.log(document)});
    }
    public showNewspaper(): void {
        this.newspapers.forEach(document => { console.log(document)});
    }

    public removeDocument(codes: number): void {
        this.books.filter(document => document.code === codes).forEach(document => {this.books.splice(this.books.indexOf(document), 1)})
        this.magazines.filter(document => document.code === codes).forEach(document => {this.magazines.splice(this.magazines.indexOf(document), 1)})
        this.newspapers.filter(document => document.code === codes).forEach(document => {this.newspapers.splice(this.newspapers.indexOf(document), 1)})
    }
}