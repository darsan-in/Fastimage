import { get } from "https";

export function fetchSource(requestOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    get(requestOptions, (response) => {
      let data: string = "";

      response.on("data", (chunk: string) => {
        data += chunk;
      });

      response.on("end", () => {
        if (response.statusCode === 200) {
          resolve(data);
        } else {
          reject(response.statusCode);
        }
      });
    }).on("error", reject);
  });
}
