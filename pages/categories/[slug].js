import Head from "next/head";
import { useRouter } from "next/router";
import ProductsList from "../../components/ProductsList";
import { getCategories, getCategory, getBanners } from "../../utils/api";

const CategoryPage = ({ category, categories }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  return (
    <div>
      <Head>
        <title>{category.name} products</title>
      </Head>
      <ProductsList products={category.products} categories={categories} />
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps({ params }) {
  const category = await getCategory(params.slug);

  return { props: { category } };
}

// export async function getStaticPaths() {
//   const categories = await getCategories();
//   return {
//     paths: categories.map((_category) => {
//       return {
//         params: { slug: _category.slug },
//       };
//     }),
//     fallback: true,
//   };
// }
