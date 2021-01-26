import Link from "next/link";
import React from 'react'
import { getStrapiMedia } from "../utils/medias";

const ProductsList = ({ products }) => {
  const [categoriesOpen, setCategoriesOpen] = React.useState(false)
  const [currentCategory, setCurrentCategory] = React.useState('loja')

  return (

    <section className="bg-white py-8">

      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
              LOJA
			      </a>

            <div className="flex items-center" id="store-nav-content">

              <button className="pl-3 inline-block no-underline hover:text-black" onClick={() => setCategoriesOpen(!categoriesOpen)}>
                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
              </button>

              <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                </svg>
              </a>

            </div>
          </div>
        </nav>

        {products.map((_product) => (
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <div key={_product.id}>
              <Link href={`/products/${_product.slug}`}>
                <a>
                  <img className="hover:grow hover:shadow-lg" src={getStrapiMedia(_product.image.formats.thumbnail.url)} alt={_product.title} />
                  <div className="pt-3 flex items-center justify-between">
                    <p className="">{_product.title}</p>
                    <svg className="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                    </svg>
                  </div>
                  <p className="pt-1 text-gray-900">R${_product.price}</p>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    // <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
    //   {products.map((_product) => (
    //     <div
    //       key={_product.id}
    //       className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
    //     >
    //       <Link href={`/products/${_product.slug}`}>
    //         <a>
    //           <div className="rounded-t-lg pt-2 pb-2" >
    //             <img
    //               className="crop mx-auto"
    //               src={getStrapiMedia(_product.image.formats.thumbnail.url)}
    //               alt={_product.title}
    //             />
    //           </div>
    //           <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg" >
    //             <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
    //               {_product.title}
    //             </h4>
    //             <div className="mt-1 text-sm text-gray-700">
    //               {_product.description}
    //             </div>
    //           </div>
    //         </a>
    //       </Link>
    //     </div>
    //   ))}
    // </div>
  );
};

export default ProductsList;
