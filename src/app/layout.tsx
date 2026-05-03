import CartContext from "../context/CartContext";
import Header from "../layout/Header";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="page" lang="en">
      <body className="page-body">
        <div id="root">
          <CartContext>
            <Header />
            {children}
          </CartContext>
        </div>
      </body>
    </html>
  );
}
