import "../styles/globals.scss";
import ProviderWrapper from "./providerWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Free HD Image Search Engine - Fastimage</title>
        <meta
          name="description"
          content="Discover and download free HD images from multiple providers with Fastimage, the fastest and most reliable image search engine."
        />
      </head>
      <body>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
