import {Library} from '../model/Library'
import {Book} from '../model/Book'
import {Magazine} from '../model/Magazine'
import {Newspaper} from '../model/Newspaper'
import {IManager} from './IManager'

export class LibraryManager implements IManager<Library> {
    public listDocuments: Library[] = [];

    constructor() {
    }

    addBook(t: Book): void {
        this.listDocuments.push(t);
    }

    addMagazine(t: Magazine): void {
        this.listDocuments.push(t);
    }

    addNewspaper(t: Newspaper): void {
        this.listDocuments.push(t);
    }

    remove(id: number): void {
        let index = this.findById(+id);
        if (index === -1) {
            console.log('Khong tim thay');           
        }
        else {
            this.listDocuments.splice(index, 1);
            console.log('Xoa thanh cong');
            
        }
        
    }

    findAll(): Library[] {
        return this.listDocuments;
    }
    

    findBook(): void{
        this.listDocuments.filter(t => t.l);

    }

    find(id: number): void {
        let index = this.findById(+id);
        if (index === -1) {
            console.log('Khong tim thay');           
        }
        else {
            console.log('Da tim thay');
            console.log(this.listDocuments[index]);
            
        }
    }

    findById(id: number): number {
        for (let i = 0; i < this.listDocuments.length; i++) {
            if (this.listDocuments[i].id === id) {
                return i;
            }
        }
        return -1;
    }
}