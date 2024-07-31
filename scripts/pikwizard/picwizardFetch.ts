import { postAndFetchSource } from "../broker";
import { imageMeta } from "../getimagelist";
import { PicwizardSchema } from "./pikwizardSchema";
import RequestOptions from "./requestOptions";

export default (query: string, page: number): Promise<imageMeta[]> => {
  const url = `api.pikwizard.com/api/photo/search`;

  const [hostname, ...splitedPath] = url.split("/");
  const path: string = `/${splitedPath.join("/")}`;

  const data = JSON.stringify({
    searchterm: query,
    pagenum: page,
    size: 20,
  });

  const requestOptions = new RequestOptions(
    hostname,
    path,
    Buffer.byteLength(data)
  );

  return new Promise((resolve, reject) => {
    postAndFetchSource(requestOptions, data)
      .then((response: string) => {
        const parsedResponse: PicwizardSchema = JSON.parse(response);
        const totalPages: number = 100;

        const imageRecords = parsedResponse.assets.map(
          (imageRecord): imageMeta => {
            const isPaidRefer: boolean =
              Object.keys(imageRecord).includes("referral_url");

            return {
              preview: isPaidRefer
                ? imageRecord.url_medium
                : `https://pikwizard.com${imageRecord.url_medium}`,
              source: isPaidRefer
                ? imageRecord.referral_url
                : `https://pikwizard.com/photo/${imageRecord.title
                    .toLowerCase()
                    .split(" ")
                    .join("-")}/${imageRecord.id}/`,
            };
          }
        );

        resolve(imageRecords);
      })
      .catch(reject);
  });
};
