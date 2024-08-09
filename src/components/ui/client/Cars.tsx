import type { FC } from 'preact/compat';
import type { Models } from '../../../utils/interfaces/models.interface';
import ProductCard from './ProductCard';
import useFilterModels from '../../../utils/hooks/useFilterModels.hooks';
import useOrderByModels from '../../../utils/hooks/useOrderByModels.hooks';
import FilterByMenu from './FilterByMenu';
import OrderByMenu from './OrderByMenu';

interface Props {
  models: Models[];
}
const Cars: FC<Props> = ({ models }) => {
  const { changueFilterStrategy, filteredModels } = useFilterModels();
  const { changueOrderByStrategy, orderedModels } = useOrderByModels();

  return (
    <>
      <div class={'flex justify-between border-b pb-4'}>
        <FilterByMenu changueFilterStrategy={changueFilterStrategy} />
        <OrderByMenu changueOrderByStrategy={changueOrderByStrategy} />
      </div>
      <section class="grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-8 py-8">
        {orderedModels(filteredModels(models)).map((model) => (
          <ProductCard
            key={model.id}
            price={model.price}
            thumbnail={model.thumbnail}
            id={model.id}
            name={model.name}
            year={model.year}
          />
        ))}
      </section>
      {orderedModels(filteredModels(models)).length === 0 && (
        <div class="flex justify-center items-center h-96">
          <h1 class="text-2xl">No hay resultados...</h1>
        </div>
      )}
    </>
  );
};

export default Cars;
