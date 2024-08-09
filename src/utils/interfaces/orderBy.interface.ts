export interface OrderBy<T> {
  applyOrderBy(models: T): T;
}