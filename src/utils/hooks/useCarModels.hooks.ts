import { useEffect, useState } from "preact/hooks";
import { fetchModels, Segment, type OrderBy } from "../../services/models.services";
import type { Models } from "../interfaces/models.interface";

const useCarModels = () => {
  const [queryParams, setQueryParams] = useState<{ordering?: OrderBy, segment?:Segment} | {}>({});
  const [ data, setData] = useState<Models[] | undefined>();
  const [ loading, setLoading] = useState(true);
  const [ error, setError] = useState<unknown>();
  
  const setSegment = (segment: Segment | "") => {
      setQueryParams((prev) => ({...prev, segment}));
  }

  const setOrdering = (ordering: OrderBy | "") => {
    setQueryParams((prev) => ({...prev, ordering}));
  }

  
  useEffect(() => {
      const fetchCarModels = async() => {
        try {
          const {data:carModels} = await fetchModels(queryParams);
          setData(carModels);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
      fetchCarModels();
 
  },[queryParams])

  return {
    data, loading, error, setSegment, setOrdering, queryParams
  }
}

export default useCarModels
