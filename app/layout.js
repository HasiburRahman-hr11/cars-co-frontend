import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

export const metadata = {
  title: "Over 180+ premium brands & used exotic cars in inventory",
  description:
    "Buy best Pre owned imported cars from Big BoyToyz. We offer an unrivalled selection of top end used luxury vehicles for sale. Choose from 150+ models of luxury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
