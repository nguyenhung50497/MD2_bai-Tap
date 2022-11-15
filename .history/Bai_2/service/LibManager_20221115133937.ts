import {Library} from '../model/Library'
import {Book} from '../model/Book'
import {Magazine} from '../model/Magazine'
import {Newspaper} from '../model/Newspaper'
import {IManager} from './IManager'

export class LibraryManager implements IManager<Library> {
    public listDocuments: Library[] = [];

    constructor() {
    }

    add(t: Library): void {
        this.listDocuments.push(t);
    }

    remove(id: number): void {
        let index = this.findByCode(+id);
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

    find(id: number): void {
        let index = this.findByCode(+id);
        if (index === -1) {
            console.log('Khong tim thay');           
        }
        else {
            console.log('Xoa thanh cong');
        }

    }

    findByCode(id: number): number {
        for (let i = 0; i < this.listDocuments.length; i++) {
            if (this.listDocuments[i].code === id) {
                return i;
            }
        }
        return -1;
    }
}