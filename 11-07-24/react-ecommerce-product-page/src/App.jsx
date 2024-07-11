import styles from "./App.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Layout from "./components/layout/Layout";
import ProductDetail from "./components/product-detail/ProductDetail";
import ProductLightBox from "./components/product-lightbox/ProductLightBox";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <Layout>
          <div className={styles.mainContent}>
            <ProductLightBox />
            <ProductDetail />
          </div>
        </Layout>
        <Footer />
      </div>
    </>
  );
}

export default App;
