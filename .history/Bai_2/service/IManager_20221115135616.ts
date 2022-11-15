export interface IManager<T> {
    addBook(t: T): void;

    
    addBook(t: T): void;
    addBook(t: T): void;

    remove(code: number): void;

    find(code: number): void;

    findAll(): T[];
}