import type { OrderBy } from "../../services/models.services";

interface OrderByType {
  id: OrderBy,
  name: string
}

export const orderByTypes:OrderByType[] = [
  {
    id: 'price',
    name: `De <strong>menor</strong> a <strong>mayor</strong> precio`,
  },
  {
    id: '-price',
    name: `De <strong>mayor</strong> a <strong>menor</strong> precio`,
  },
  {
    id: "-year",
    name: `Más <strong>nuevos primero</strong>`,
  },
  {
    id: 'year',
    name:  `Más <strong>viejos primero</strong>`,
  },
];