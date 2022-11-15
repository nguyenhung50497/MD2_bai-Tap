import {Library} from './model/Library'
import {Book} from './model/Book'
import {Magazine} from './model/Magazine'
import {Newspaper} from './model/Newspaper'
import {LibraryManager} from './service/LibManager'
import { mainModule } from 'process'

let readlineSync = require('readline-sync');
let libraryManager = new LibraryManager;

function add() {

}

function main() {
    let menu = `-----------------Menu ----------------
    1. Add Library
    2. Add Book
    3. Add Magazine
    `
}
