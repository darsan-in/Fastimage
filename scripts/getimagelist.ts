import freepikFetch from "./freepik/freepikFetch";

export interface imageMeta {
  preview: string;
  source: string;
}

function _makeBatches(imageRecord: imageMeta[]): imageMeta[][] {
  //batching evenly
  const colSize = 4;
  const batchSize: number = Math.ceil(imageRecord.length / colSize);

  const imageBatches: imageMeta[][] = [];

  for (let i: number = 0; i < imageRecord.length; i += batchSize) {
    imageBatches.push(imageRecord.slice(i, i + batchSize));
  }

  return imageBatches;
}

export default (query: string, page: number): Promise<imageMeta[][]> => {
  return new Promise((resolve, reject) => {
    freepikFetch(query, page)
      .then(_makeBatches)
      .then((batchedImageMeta: imageMeta[][]) => {
        resolve(batchedImageMeta);
      })
      .catch(reject);
  });
};
