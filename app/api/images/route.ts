import { NextResponse } from "next/server";
import getimagelist, { imageMeta } from "../../../scripts/getimagelist";

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query: string = searchParams.get("query");
  const page: number = parseInt(searchParams.get("page") ?? "1");

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 }
    );
  }

  return getimagelist(query, page)
    .then((response: imageMeta[][]) => {
      return NextResponse.json({ results: response }, { status: 200 });
    })
    .catch((error: Error) => {
      return NextResponse.json(
        { error: [query, page, error] },
        { status: 500 }
      );
    });
}
