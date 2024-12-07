import "./globals.css";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";

export const metadata = {
  title: "TedxVssut",
  description: "Discover the TEDxVSSUT 2024 event, where innovative ideas and inspiring talks come to life. Join us for engaging sessions, a stellar speaker lineup, and transformative experiences at Veer Surendra Sai University of Technology, Burla. Register now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
