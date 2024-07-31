/* const query = "dog walk";
const page = 2; */

import { fetchSource } from "../broker";
import { imageMeta } from "../getimagelist";
import { FreePikSchema } from "./freepikSchema";

export default (query: string, page: number): Promise<imageMeta[]> => {
  const url = `www.freepik.com/api/regular/search?locale=en&order=relevance&term=${encodeURI(
    query
  )}&${page > 1 ? `page=${page}` : ""}`;

  return new Promise((resolve, reject) => {
    fetchSource(url)
      .then((response: string) => {
        const parsedResponse: FreePikSchema = JSON.parse(response);
        const totalPages: number = parsedResponse.pagination.total;

        const imageRecords = parsedResponse.items.map(
          (imageRecord): imageMeta => {
            return {
              preview: imageRecord.preview.url,
              source: imageRecord.url,
            };
          }
        );

        resolve(imageRecords);
      })
      .catch(reject);
  });
};
