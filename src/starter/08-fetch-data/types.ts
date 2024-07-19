import axios from "axios";
import { z } from "zod";

const url = "https://www.course-api.com/react-tours-project";

export const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    image: z.string(),
    info: z.string(),
    price: z.string(),
   
})

export type Tour =z.infer<typeof tourSchema>;


export async function fetchTours(): Promise<Tour[]>{
  const resp = await axios.get<Tour[]>(url);
  const result = tourSchema.array().safeParse(resp.data);

  if (!result.success) {
    console.log(result.error.message);
    throw new Error(`Failed to parse tours`);
  }
  return result.data;
}

