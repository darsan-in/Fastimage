"use client";

import { useContext } from "react";
import { NavContext } from "../app/providerWrapper";
import ImageRow from "./image-row";
import Loading from "./loading";
import PageController from "./page-controller";
import Waitroom from "./waitroom";

export default () => {
  const { appState } = useContext(NavContext);

  const { isLoading, imageData, pagination, getResult } = appState;

  const { currentPage, currentQuery } = pagination;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : imageData.length === 0 ? (
        <Waitroom />
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
            {imageData.map((imageBatch, idx) => (
              <ImageRow imageRecord={imageBatch} key={idx} />
            ))}
          </div>
          <PageController
            callback={getResult}
            currentPage={currentPage}
            currentQuery={currentQuery}
          />
        </>
      )}
    </>
  );
};
