"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useState } from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

interface AppStateType {
  imageData: any[][];
  isLoading: boolean;
}

export const NavContext = createContext<{ appState: AppStateType }>({
  appState: { imageData: [], isLoading: false },
});

export default ({ children }: { children: React.ReactNode }) => {
  const [appState, setAppState] = useState<AppStateType>({
    imageData: [],
    isLoading: false,
  });

  const router = useRouter();

  return (
    <NavContext.Provider value={{ appState }}>
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

            /* set load state */
            setAppState({ imageData: appState.imageData, isLoading: true });
            /*  */

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
                    setAppState({ imageData: data.results, isLoading: false });
                  })
                  .catch((err) => {
                    console.error(err);
                    router.refresh();
                  });
              })
              .catch((err) => {
                console.error(err);
                router.refresh();
              });
          }}
        />
      </header>
      {children}
      <Footer />
    </NavContext.Provider>
  );
};
