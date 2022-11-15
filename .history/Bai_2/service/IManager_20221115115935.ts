export interface IManagement<T> {
    add(t: T): void;

    remove(id: number): void;

    find(id: number, t: T): void;

    findAll(): T[];
}