import Link from "next/link";
import React from 'react'
import { getStrapiMedia } from "../utils/medias";

const ProductsList = ({ products, categories = [], banners }) => {
  const [categoriesOpen, setCategoriesOpen] = React.useState(false)
  const [currentCategory, setCurrentCategory] = React.useState('loja')

  return (
    <section className="py-8 pt-0 pb-0 shadow-md">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 pl-0 pr-0">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
              {currentCategory}
            </a>

            <button htmlFor="menu-toggle" className="cursor-pointer md:hidden block " onClick={() => setCategoriesOpen(!categoriesOpen)}>
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

        <div className="background-nails w-full">
          <div className="w-full flex flex-wrap items-center background-white-blur ">
            {products.map((_product) => (
              <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-6 flex flex-col" style={{ height: '100%' }}>
                <div className="card-product" key={_product.id} style={{ margin: 'auto' }}>

                  <div style={{ backgroundImage: `url(${getStrapiMedia(_product.image.formats.small.url)})` }} className="image-card-wrapper" />
                  <div className="pt-3 flex items-center justify-between">
                    <p className="">{_product.title}</p>
                  </div>
                  <div className="justify-between flex">
                    <p className="pt-1 text-gray-900">R$ {_product.price}</p>
                    <Link href={`/products/${_product.slug}`}>
                      <a>
                        <button className="buy-button" style={{ backgroundColor: 'var(--color-primary-4)', color: 'var(--color-primary-2' }} >comprar</button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductsList;
