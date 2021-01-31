import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { getProducts, getBanners } from "../utils/api";

const HomePage = ({ products, categories, banners }) => {
  return (
    <div>
      <Head>
        <title>Loja da Mona</title>
      </Head>
      <ProductsList products={products} banners={banners} categories={categories} />
    </div>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  const banners = await getBanners();
  return { props: { products, banners }, revalidate: 60 };
}

export default HomePage;
