"use client";

import { useContext } from "react";
import { NavContext } from "../app/providerWrapper";
import ImageRow from "./image-row";
import Waitroom from "./waitroom";

export default () => {
  const { imageData } = useContext(NavContext);

  return (
    <>
      {imageData.length === 0 ? (
        <Waitroom />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
          {imageData.map((imageBatch, idx) => (
            <ImageRow imageRecord={imageBatch} key={idx} />
          ))}
        </div>
      )}
    </>
  );
};
