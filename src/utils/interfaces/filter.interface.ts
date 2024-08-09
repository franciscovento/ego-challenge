export interface Filter<T> {
  applyFilter(items: T): T;
}