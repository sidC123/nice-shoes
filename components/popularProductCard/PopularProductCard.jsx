import { star } from "@assets/icons/index";
import Image from "next/image";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <Image src={imgURL} alt={name} className="w-[280px] h-[280px]" />

            <div className="mt-8 flex justify-start gap-2.5">
                <Image src={star} alt="ratings" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">{rating}
                </p>
            </div>
            <h3 className="mt-2 text-xl leading-normal font-semibold font-Jost">{name}
            </h3>
            <p className="mt-2 text-coral-red leading-normal font-semibold font-montserrat">{price}
            </p>

        </div>
    )
}

export default PopularProductCard;