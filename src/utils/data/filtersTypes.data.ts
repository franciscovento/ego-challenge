import type { Segment } from "../../services/models.services"

interface FilterType {
  id: Segment,
  name:string
}
export const filterTypes:FilterType[] = [
  
 { id: 1,
  name: 'Sedan'
},
{
  id: 2,
  name: 'Hatchback'
},
{
  id: 3,
  name: 'Pickups'
},
{
  id: 4,
  name: 'SUV'
}]