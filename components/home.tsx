"use client";

import { useState } from "react";
import ImageRow from "./image-row";
import Navbar from "./navbar";
import Waitroom from "./waitroom";

export default () => {
  const [imageData, setImageData] = useState([]);

  return (
    <>
      <Navbar
        formCallback={(query) => {
          const page = 1;

          fetch(`/api/images?query=${query}&page=${page}`)
            .then((response) => {
              response
                .json()
                .then((data) => {
                  setImageData(data.results);
                })
                .catch(console.error);
            })
            .catch(console.error);
        }}
      />
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
