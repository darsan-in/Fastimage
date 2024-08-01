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
        <title>Fastimage</title>
        <meta
          name="description"
          content="Search engine for collections of images from top free HD image providers."
        />
      </head>
      <body>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
