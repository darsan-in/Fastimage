import { get } from "https";

class RequestOptions {
  hostname: string;
  path: string;

  method: string = "GET";
  headers: Record<string, string> = {
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.127 Safari/537.36",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    origin: "",
    referer: "",
  };

  constructor(hostname: string, path: string) {
    this.hostname = hostname;
    this.path = path;

    this.headers.origin = hostname;
    this.headers.referer = hostname;
  }
}

export function fetchSource(url: string): Promise<string> {
  const splitedUrl: string[] = url.split("/");

  const hostname: string = splitedUrl[0];
  const path: string = "/" + splitedUrl.slice(1).join("/");

  const options = new RequestOptions(hostname, path);

  return new Promise((resolve, reject) => {
    get(options, (response) => {
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
