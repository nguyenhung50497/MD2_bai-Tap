export interface IManager<T> {
    addBook(t: T): void;

    addMagazine(t: T): void;

    addNewspaper(t: T): void;

    remove(code: number): void;

    find(code: number): void;

    findAll(): T[];
}