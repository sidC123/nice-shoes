import PopularProductCard from "@components/popularProductCard/PopularProductCard";
import { products } from "@constants/index";

const PopularProducts = () => {
    return (
        <section id='products' className="max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-Jost font-bold">
                    Explore <span className="text-coral-red">Popular</span> Products
                </h2>
                <p className="lg:max-w-lg mt-2 font-montserrat">Unveiling the Best: Elevate your style and performance with our top picks from Nike&apos;s collection of sought-after products.</p>
            </div>

            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-16">
                {products.map((product) => (
                    <PopularProductCard
                        key={product.name}
                        {...product}
                    />
                ))}
            </div>

        </section>
    )
}

export default PopularProducts