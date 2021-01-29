import Link from "next/link";
import React from 'react'

const Carousel = () => {
    return (
        <section className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right banner-bg" style={{maxWidth:1600, height: '260px'}}>
            <div className="container mx-auto">
                <div className="flex flex-col w-2/3 lg:w-1/3 justify-center items-start  px-6 tracking-wide">
                    <h2 className="text-white text-2xl my-4 titulo">Tudo para você ficar ainda mais</h2>
                    <a className="text-xl text-white inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-white hover:border-white titulo" href="#">maravilhosa</a>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
