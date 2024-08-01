"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useState } from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export const NavContext = createContext<{ imageData: any }>({
  imageData: [],
} as any);

export default ({ children }: { children: React.ReactNode }) => {
  const [imageData, setImageData] = useState([]);
  const router = useRouter();

  return (
    <NavContext.Provider value={{ imageData }}>
      <header>
        <Banner />

        <Navbar
          formCallback={(query) => {
            const page = 1;
            router.replace("/");

            const formData: string = JSON.stringify({
              query: query,
              page: page,
            });

            fetch(
              `https://asia-south1-bonse-430603.cloudfunctions.net/fastimage-api`,
              {
                method: "POST",
                body: formData,
              }
            )
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
      </header>
      {children}
      <Footer />
    </NavContext.Provider>
  );
};
