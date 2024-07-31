import freepikFetch from "./freepik/freepikFetch";
import pexelFetch from "./pexels/pexelFetch";
import picwizardFetch from "./pikwizard/picwizardFetch";
import unsplashFetch from "./unsplash/unsplashFetch";

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
    Promise.all([
      freepikFetch(query, page),
      pexelFetch(query, page),
      unsplashFetch(query, page),
      picwizardFetch(query, page),
    ])
      .then((imageMeta: imageMeta[][]) => {
        return imageMeta.flat();
      })
      .then(_makeBatches)
      .then((batchedImageMeta: imageMeta[][]) => {
        resolve(batchedImageMeta);
      })
      .catch(reject);
  });
};
