import { useState } from "preact/hooks";
import type { Filter } from "../interfaces/filter.interface";
import type { Models } from "../interfaces/models.interface";
import { NoFilter, type FilterProps } from "../strategys/filterModels.strategy";

interface UseFilterModels {
  filteredModels: (models: Models[]) => Models[];
  changueFilterStrategy: (strategy: Filter<Models[]>) => void;
  filterStrategy: Filter<Models[]>;
}

const useFilterModels = (): UseFilterModels => {
  const [filterStrategy, setFilterStrategy] = useState<Filter<Models[]>>(new NoFilter());
  
  const changueFilterStrategy = (strategy: Filter<Models[]>) => {
    setFilterStrategy(strategy);
  }

  const filteredModels = (models: Models[]): Models[] => {
    return filterStrategy.applyFilter(models);
  }

  return {
    filteredModels,
    changueFilterStrategy,
    filterStrategy
  }
}

export default useFilterModels
