import { headers } from "next/headers";

export default function RootLayout({ children }) {
  const pathname = headers().get("x-pathname");
  return (
    <html>
      <head />
      <body>
        <p>pathname: {pathname}</p>
        {children}
      </body>
    </html>
  );
}
