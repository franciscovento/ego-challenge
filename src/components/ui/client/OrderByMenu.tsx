import { useState, type FC } from 'preact/compat';
import type { Models } from '../../../utils/interfaces/models.interface';
import type { OrderBy } from '../../../utils/interfaces/orderBy.interface';
import {
  orderByTypes,
  type OrderByProps,
} from '../../../utils/strategys/orderByModels.strategy';

interface Props {
  changueOrderByStrategy: (strategy: OrderBy<Models[]>) => void;
}
const OrderByMenu: FC<Props> = ({ changueOrderByStrategy }) => {
  const [currentOrderBy, setCurrentOrderBy] = useState<number>(1);
  const handleChangueOrderByStrategy = (orderBy: OrderByProps) => {
    setCurrentOrderBy(orderBy.id);
    changueOrderByStrategy(orderBy.strategy);
  };

  return (
    <div
      class={
        'group font-semibold text-sm flex items-center justify-center gap-1 relative select-none'
      }
    >
      Ordenar por
      <svg
        width="6"
        height="4"
        viewBox="0 0 6 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_0_128)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.319983 0.855702C0.320583 0.670864 0.434892 0.504919 0.609505 0.43447C0.784119 0.364167 0.985134 0.403126 1.11924 0.532894L3.1327 2.49655L5.14615 0.532894C5.33187 0.377349 5.60969 0.387601 5.7825 0.556914C5.95592 0.725788 5.96657 0.996894 5.80711 1.17836L3.46318 3.46688C3.28031 3.64424 2.98509 3.64424 2.80222 3.46688L0.458293 1.17836C0.370387 1.09312 0.320583 0.976975 0.319983 0.855702Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_128">
            <rect
              width="4"
              height="6"
              fill="white"
              transform="matrix(0 1 -1 0 6 0)"
            />
          </clipPath>
        </defs>
      </svg>
      <div
        class={
          'invisible z-10 opacity-0 duration-300  group-hover:opacity-100  group-hover:visible absolute top-0 -left-14 sm:left-0 pt-11 text-[10px]'
        }
      >
        <div
          class={
            ' shadow-xl border bg-white text-left flex items-start flex-col  w-[158px]'
          }
        >
          {orderByTypes.map((orderByT, i) => {
            return (
              <button
                key={i}
                onClick={() => handleChangueOrderByStrategy(orderByT)}
                style={{
                  backgroundColor:
                    orderByT.id === currentOrderBy ? '#f5f5f5' : 'white',
                }}
                class={'duration-300 w-full text-left border-b pl-3 py-3'}
                dangerouslySetInnerHTML={{ __html: orderByT.name }}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderByMenu;
