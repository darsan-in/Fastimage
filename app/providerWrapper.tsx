"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useState } from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

interface AppStateType {
  imageData: any[][];
  isLoading: boolean;
  pagination: { currentPage: number; currentQuery: string };
  getResult: (query: string, page?: number) => void;
}

const intialState: AppStateType = {
  imageData: [],
  isLoading: false,
  pagination: { currentPage: 0, currentQuery: "" },
  getResult: () => {},
};

export const NavContext = createContext<{ appState: AppStateType }>({
  appState: intialState,
});

export default ({ children }: { children: React.ReactNode }) => {
  const [appState, setAppState] = useState<AppStateType>(intialState);

  const router = useRouter();

  /* callback */
  const getResult = (query: string, page: number = 1): void => {
    router.replace("/");

    const formData: string = JSON.stringify({
      query: query,
      page: page,
    });

    /* set load state */
    setAppState({ ...appState, isLoading: true });
    /*  */

    fetch(`https://asia-south1-bonse-430603.cloudfunctions.net/fastimage-api`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        response
          .json()
          .then((data) => {
            setAppState({
              imageData: data.results,
              isLoading: false,
              pagination: { currentPage: page, currentQuery: query },
              getResult: getResult,
            });
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
  };
  /*  */

  return (
    <NavContext.Provider value={{ appState }}>
      <header>
        <Banner />

        <Navbar formCallback={getResult} />
      </header>
      {children}
      <Footer />
    </NavContext.Provider>
  );
};
