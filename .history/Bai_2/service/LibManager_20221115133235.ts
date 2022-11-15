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

    
    findByCode(code: number): number {
        for (let i = 0; i < this.listDocuments.length; i++) {
            if (this.listDocuments[i].code === code) {
                return i;
            }
        }
        return -1;
    }
}