export default class RequestOptions {
  hostname: string;
  path: string;

  method: string = "POST";
  headers: Record<string, string> = {
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.127 Safari/537.36",
    Accept: "application/json",
    "Content-Type": "application/json",
    origin: "",
    Referer: "https://pikwizard.com/",
    "Content-Length": "",
  };

  constructor(hostname: string, path: string, dataLength: number) {
    this.hostname = hostname;
    this.path = path;

    this.headers.origin = hostname;
    this.headers["Content-Length"] = `${dataLength}`;
  }
}
