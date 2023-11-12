'use client';
import { useState } from "react";
import { arrowRight } from "@assets/icons/index";
import { bigShoe1 } from "@assets/images/index";
import { shoes, statistics } from "@constants/index";
import Button from "@components/button/Button";
import ShoeCard from "@components/shoeCard/ShoeCard";
import Image from "next/image";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28" >
                <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
                <h1 className="mt-10 font-Jost text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br />
                    <span className="text-coral-red inline-block mt-3 ">Nike</span> Shoes
                </h1>

                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover Nike&apos;s Innovative and Iconic Footwear for Unmatched Performance.
                </p>

                <Button label="Shop Now" iconURL={arrowRight} />

                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-Jost font-bold">{stat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center bg-hero">
                <Image src={bigShoeImg} alt="show collection" width={610} height={500} className="relative z-10 object-contain" />

                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]">
                    {shoes.map((shoe) => (
                        <div key={shoe}>
                            <ShoeCard
                                imgURL={shoe}
                                changeBigShoeImage={(shoe) => { setBigShoeImg(shoe) }}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero;