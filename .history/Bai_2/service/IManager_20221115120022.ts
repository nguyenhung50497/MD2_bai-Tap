export interface IManagement<T> {
    add(t: T): void;

    remove(code: number): void;

    find(code: number): void;

    findAll(): T[];
}