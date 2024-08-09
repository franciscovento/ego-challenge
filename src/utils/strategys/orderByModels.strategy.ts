import type { Models } from "../interfaces/models.interface";
import type { OrderBy } from "../interfaces/orderBy.interface";

export class NoOrder implements OrderBy <Models[]> {
  applyOrderBy(models: Models[]): Models[] {
    return models;
  }
}

export class OrderByPriceAsc implements OrderBy <Models[]> {
  applyOrderBy(models: Models[]): Models[] {
    return models.sort((a, b) => a.price - b.price);
  }
}

export class OrderByPriceDesc implements OrderBy <Models[]> {
  applyOrderBy(models: Models[]): Models[] {
    return models.sort((a, b) => b.price - a.price);
  }
}

export class OrderByYearAsc implements OrderBy <Models[]> {
  applyOrderBy(models: Models[]): Models[] {
    return models.sort((a, b) => a.year - b.year);
  }
}

export class OrderByYearDesc implements OrderBy <Models[]> {
  applyOrderBy(models: Models[]): Models[] {
    return models.sort((a, b) => b.year - a.year);
  }
}

export class OrderByContext {
  private orderByStrategy: OrderBy<Models[]> = new NoOrder();

  setOrderByStrategy(orderByStrategy:OrderBy<Models[]>){
    this.orderByStrategy = orderByStrategy;
  }

  processOrderBy(models: Models[]): Models[] {
    return this.orderByStrategy.applyOrderBy(models)
  }
}

export interface OrderByProps {
  id: number;
  name: string;
  strategy: OrderBy<Models[]>;
}

export const orderByTypes: OrderByProps[] = [{
  id: 1,
  name: "Nada",
  strategy: new NoOrder()
},{
  id: 2,
  name: `De <strong>menor</strong> a <strong>mayor</strong> precio`,
  strategy: new OrderByPriceAsc()
},{
  id: 3,
  name: `De <strong>mayor</strong> a <strong>menor</strong> precio`,
  strategy: new OrderByPriceDesc()
},{
  id: 4,
  name: `Más <strong>nuevos primero</strong>`,
  strategy: new OrderByYearDesc()
},{
  id: 5,
  name: `Más <strong>viejos primero</strong>`,
  strategy:  new OrderByYearAsc()
}]