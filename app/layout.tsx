import "../styles/globals.scss";

export const metadata = {
  title: "Fastimages",
  description:
    "Search engine for collections of images from top free HD image providers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
