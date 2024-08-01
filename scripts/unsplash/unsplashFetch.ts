import { fetchSource } from "../broker";
import { imageMeta } from "../getimagelist";
import RequestOptions from "./requestOptions";
import { unsplashSchema } from "./unsplashSchema";

export default (query: string, page: number): Promise<imageMeta[]> => {
  const url: string = `unsplash.com/napi/search/photos?query=${encodeURI(
    query
  )}&per_page=20&page=${page}`;

  const splitedUrl: string[] = url.split("/");

  const hostname: string = splitedUrl[0];
  const path: string = "/" + splitedUrl.slice(1).join("/");

  const requestOptions = new RequestOptions(hostname, path);

  return new Promise((resolve, reject) => {
    fetchSource(requestOptions)
      .then((response: string) => {
        const parsedResponse: unsplashSchema = JSON.parse(response);
        const totalPages: number = parsedResponse.total_pages;

        const imageRecords = parsedResponse.results.map(
          (imageRecord): imageMeta => {
            return {
              preview: imageRecord.urls.regular,
              source: imageRecord.links.html,
            };
          }
        );

        resolve(imageRecords);
      })
      .catch(reject);
  });
};
