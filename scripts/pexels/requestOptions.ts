export default class RequestOptions {
  hostname: string;
  path: string;

  method: string = "GET";
  headers: Record<string, string> = {
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.127 Safari/537.36",
    "Content-Type": "application/json",
    "X-Forwarded-Http_cf_ipcountry": "",
    "Secret-Key": "H2jk9uKnhRmL6WPwh89zBezWvr",
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
