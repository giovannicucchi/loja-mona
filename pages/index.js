import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { getProducts, getBanners } from "../utils/api";

const HomePage = ({ products, categories }) => {
  return (
    <div>
      <Head>
        <title>Loja da Mona</title>
      </Head>
      <ProductsList products={products} categories={categories} />
    </div>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products }, revalidate: 60 };
}

export default HomePage;
