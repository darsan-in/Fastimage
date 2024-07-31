import { fetchSource } from "../broker";
import { imageMeta } from "../getimagelist";
import { PexelResponse } from "./pexelSchema";
import RequestOptions from "./requestOptions";

export default (query: string, page: number): Promise<imageMeta[]> => {
  const url: string = `www.pexels.com/en-us/api/v3/search/photos?page=${page}&per_page=24&query=${encodeURI(
    query
  )}&orientation=all&size=all&color=all&sort=popular&seo_tags=true`;

  const splitedUrl: string[] = url.split("/");

  const hostname: string = splitedUrl[0];
  const path: string = "/" + splitedUrl.slice(1).join("/");

  const requestOptions = new RequestOptions(hostname, path);

  return new Promise((resolve, reject) => {
    fetchSource(requestOptions)
      .then((response: string) => {
        const parsedResponse: PexelResponse = JSON.parse(response);
        const totalPages: number = parsedResponse.pagination.total_pages;

        const imageRecords = parsedResponse.data.map(
          (imageRecord): imageMeta => {
            return {
              preview: imageRecord.attributes.image.download_link,
              source: imageRecord.attributes.image.download,
            };
          }
        );

        resolve(imageRecords);
      })
      .catch(reject);
  });
};
