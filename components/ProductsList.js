import Link from "next/link";
import React from 'react'
import { getStrapiMedia } from "../utils/medias";

const ProductsList = ({ products, categories = [] }) => {
  const [categoriesOpen, setCategoriesOpen] = React.useState(false)
  const [currentCategory, setCurrentCategory] = React.useState('loja')

  return (

    <section className="py-8">

      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
              {currentCategory}
            </a>

            <button htmlFor="menu-toggle" class="cursor-pointer md:hidden block " onClick={() => setCategoriesOpen(!categoriesOpen)}>
              <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
              </svg>
            </button>

            <div className={"md:flex md:items-center md:w-auto w-full order-3 md:order-1" +
              (categoriesOpen ? " flex" : " hidden")} id="menu">
              <nav>
                <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                  {categories.map((_category, index) => (
                    <li>
                      {_category.name.toLowerCase() !== currentCategory.toLowerCase() &&
                        <Link href={`/categories/${_category.slug}`} key={_category.id}>
                          <a className={"inline-block no-underline hover:text-black hover:underline py-2 px-4"} onClick={() => {
                            setCurrentCategory(_category.name)
                            setCategoriesOpen(false)
                          }
                          }>{_category.name}</a>
                        </Link>
                      }
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </nav>

        {products.map((_product) => (
          <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <div key={_product.id} style={{margin: 'auto'}}>
              <Link href={`/products/${_product.slug}`}>
                <a>
                  <img className="hover:grow hover:shadow-lg" src={getStrapiMedia(_product.image.formats.thumbnail.url)} alt={_product.title} />
                  <div className="pt-3 flex items-center justify-between">
                    <p className="">{_product.title}</p>
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
