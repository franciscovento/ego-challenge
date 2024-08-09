import type { Filter } from "../interfaces/filter.interface";
import type { Models } from "../interfaces/models.interface";


type FilterSegment = "Sedan" | "Hatchback" | "Pickups y Comerciales" | "SUVs" | "Autos";

export class NoFilter implements Filter<Models[]> {
  applyFilter(models: Models[]): Models[] {
    return models;
  }
}

export class FilterBySegment implements Filter<Models[]> {
  constructor(private segment: FilterSegment) {}

  applyFilter(models: Models[]): Models[] {
    return models.filter((model) => model.segment === this.segment);
  }
}


export class FilterContext {
  private filterStrategy: Filter<Models[]> = new NoFilter();

  setFilterStrategy(filterStrategy: Filter<Models[]>) {
    this.filterStrategy = filterStrategy;
  }



  processFilter(models: Models[]): Models[] {
    return this.filterStrategy.applyFilter(models);
  }
}



export interface FilterProps {
  id: number;
  name: FilterSegment | "Todos";
  strategy: Filter<Models[]>;
}

export const filters: FilterProps[] = [
  {id: 1, name: "Todos", strategy: new NoFilter()},
  {id: 2, name: "Autos", strategy: new FilterBySegment("Autos")},
  {id: 3, name: "Sedan", strategy: new FilterBySegment("Sedan")},
  {id: 4, name: "Hatchback", strategy: new FilterBySegment("Hatchback")},
  {id: 5, name: "Pickups y Comerciales", strategy: new FilterBySegment("Pickups y Comerciales")},
  {id: 6, name: "SUVs", strategy: new FilterBySegment("SUVs")},
]




