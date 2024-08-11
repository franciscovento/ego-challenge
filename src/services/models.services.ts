import { createQueryParamsFromObject } from '../utils/helpers/createQueryParamsFromObject';
import type { Model, Models } from '../utils/interfaces/models.interface';

export enum Segment {
  SEDAN = 1,
  HATCHBACK = 2,
  PICKUPS = 3,
  SUV = 4,
}

export type OrderBy = 'year' | '-year' | 'price' | '-price';

export interface FetchModelsProps {
  ordering?: OrderBy;
  segment?: Segment;
}

export const fetchModels = async ({ ordering, segment }:FetchModelsProps) => {
  const queryParams = createQueryParamsFromObject({ ordering, segment }); 
  const response = await fetch(`https://challenge.egodesign.dev/api/models/${queryParams}`);
  const models = (await response.json()) as Models[];
  return {
    data: models,
  };
};

export const fetchModel = async (id: number) => {
  const response = await fetch(
    `https://challenge.egodesign.dev/api/models/${id}`
  );
  const model = (await response.json()) as Model;
  return {
    data: model,
  };
};
