"use client";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { imageMeta } from "../scripts/getimagelist";
import "../styles/globals.scss";

export const LayoutContext = createContext<{
  imageData: imageMeta[][];
  setImageData: any;
}>({} as any);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [imageData, setImageData] = useState([]);
  const router = useRouter();

  return (
    <html lang="en">
      <head>
        <title>Fastimage</title>
        <meta
          name="description"
          content="Search engine for collections of images from top free HD image providers."
        />
      </head>
      <body>
        <LayoutContext.Provider value={{ imageData, setImageData }}>
          <header>
            <Banner />

            <Navbar
              formCallback={(query) => {
                const page = 1;
                router.replace("/");

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
          </header>
          {children}
          <Footer />
        </LayoutContext.Provider>
      </body>
    </html>
  );
}
