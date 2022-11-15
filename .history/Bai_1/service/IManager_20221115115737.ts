export interface IManager<T> {
    add(t: T): void;

    findAll(): T[];
}