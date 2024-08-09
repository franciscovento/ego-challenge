import { useState } from "preact/hooks";
import type { Models } from "../interfaces/models.interface";
import type { OrderBy } from "../interfaces/orderBy.interface";
import { NoOrder } from "../strategys/orderByModels.strategy";


interface UseOrderByModels {
  orderedModels: (models: Models[]) => Models[];
  changueOrderByStrategy: (strategy: OrderBy<Models[]>) => void;
  orderByStrategy: OrderBy<Models[]>;
}

const useOrderByModels = (): UseOrderByModels => {
  const [orderByStrategy, setOrderByStrategy] = useState<OrderBy<Models[]>>(new NoOrder());
  
  const changueOrderByStrategy = (strategy: OrderBy<Models[]>) => {
    setOrderByStrategy(strategy);
  }

  const orderedModels = (models: Models[]): Models[] => {
    return orderByStrategy.applyOrderBy(models);
  }

  return {
    orderedModels,
    changueOrderByStrategy,
    orderByStrategy
  }
}

export default useOrderByModels
