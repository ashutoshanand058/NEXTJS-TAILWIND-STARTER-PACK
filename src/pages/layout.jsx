import Footer from '@components/footer';
import Header from '@components/header';

export const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
