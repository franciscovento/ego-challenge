import ProductCard from './ProductCard';
import useCarModels from '../../../utils/hooks/useCarModels.hooks';
import FilterMenu from './FilterMenu';
import OrderMenu from './OrderMenu';

const Cars = () => {
  const { data, error, loading, setOrdering, queryParams, setSegment } =
    useCarModels();

  return (
    <>
      <div class={'flex justify-between border-b pb-4'}>
        <FilterMenu currentParams={queryParams} setSegment={setSegment} />
        <OrderMenu currentParams={queryParams} setOrdering={setOrdering} />
      </div>
      <section class="grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-8 py-8 overflow-hidden">
        {data?.map((model, i) => (
          <div
            key={model.id}
            data-aos="fade-up"
            data-aos-delay={50 * i}
            data-aos-duration="600"
          >
            <ProductCard
              price={model.price}
              thumbnail={model.thumbnail}
              id={model.id}
              name={model.name}
              year={model.year}
            />
          </div>
        ))}
      </section>
      {data?.length === 0 && (
        <div class="flex justify-center items-center h-96">
          <h1 class="text-2xl">No hay resultados...</h1>
        </div>
      )}
    </>
  );
};

export default Cars;
