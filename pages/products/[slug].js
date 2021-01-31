import Head from "next/head";
import { useRouter } from "next/router";
import { getProducts, getProduct, getBanners } from "../../utils/api";
import { getStrapiMedia } from "../../utils/medias";

const ProductPage = ({ product, banners }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
      <Head>
        <title>{product.title} product</title>
      </Head>
      <div className="rounded-t-lg pt-2 pb-2">
        <img
          src={getStrapiMedia(product.image.formats.small.url)}
          className="m-auto"
          style={{maxHeight: 260}}
          alt={product.title}
        />
      </div>
      <div className="w-full p-5 flex flex-col justify-between">
        <div>
          <h4 className="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
            {product.title} 
            </h4>
            <div className="mt-1 text-gray-800">R${product.price}</div>
          <div className="mt-1 text-gray-600">{product.description}</div>
        </div>

        {product.status === "published" ? (
          <button
            className="mt-4 border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"
            style={{ backgroundColor: 'var(--color-primary-4)', color: 'var(--color-primary-2' }}
          >
            Comprar agora!
          </button>
        ) : (
            <div className="text-center mr-10 mb-1" v-else>
              <div
                className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                role="alert"
              >
                <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                  Coming soon...
              </span>
                <span className="font-semibold mr-2 text-left flex-auto">
                  This article is not available yet.
              </span>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default ProductPage;

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug);
  const banners = await getBanners();
  
  return { props: { product, banners }, revalidate: 60 };
}

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((_product) => {
      return {
        params: { slug: _product.slug },
      };
    }),
    fallback: true,
  };
}
