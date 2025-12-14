import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.ace_the_data_science,
  },
  {
    id: 2,
    image: assets.the_perfectionists,
  },
  {
    id: 3,
    image: assets.python_data_science,
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Books</p>
        <div className="w-28 h-0.5 bg-zinc-900 mt-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">

            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={image}
                alt="Featured books"
                fill
                className="object-cover group-hover:brightness-75 transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;