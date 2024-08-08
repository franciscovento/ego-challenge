import type { Model, Models } from '../utils/interfaces/models.interface';

export const fetchModels = async () => {
  const response = await fetch('https://challenge.egodesign.dev/api/models/');
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
