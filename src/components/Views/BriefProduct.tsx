"use client"
import { useState } from "react"
import { singleProductType } from "../utils/types"
import { urlForImage } from "../../../sanity/lib/image";
import PortableText from "react-portable-text"
import Image from "next/image";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types"; 
import { addToCartApiCall } from "../utils/apicalling";
import { useToast } from "./use-toast";
import { Toaster } from "../ui/toaster"; 

const BriefProduct = ({ product, user }: { product: singleProductType, user: KindeUser }) => {
    const [size, setsize] = useState<string>(product.size[0]);
    const [activeImageUrl, setActiveImageUrl] = useState<string>(urlForImage(product.image[0]).url() as string)
    const [imagesArray, setImagesArray] = useState<string[]>(() => {
        return product.image.map(element => {
            return urlForImage(element).url() as string
        })
    });
    const { toast } = useToast();

    async function hadleAddToCart() {
        if (user) {
            await addToCartApiCall(user.id as string, product._id);
            toast({
                title: "Sucessfull",
                description: "Added to Cart Sucessfully",
            })
            console.log("hoh")
        } else {
            toast({
                title: "Unucessfull",
                description: "Can not add to Cart Sucessfully",
                variant: "destructive"
            })
        }
    }

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <Toaster />
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full space-y-5">
                        <Image alt="ProductImage" className="w-full lg:h-auto h-64 object-cover object-center rounded" src={activeImageUrl} />
                        <div className="flex max-w-1/2 gap-7 mx-auto w-full overflow-hidden">
                            {
                                imagesArray.map((item, index) => (
                                    <Image key={index} onClick={() => setActiveImageUrl(item)} width={500} height={500} className={`${item === activeImageUrl && "ring-4 ring-indigo-500 opacity-75"} cursor-pointer w-28 h-36 `} alt={item + index} src={item} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Bait Commerce</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.productname}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <PortableText className="leading-relaxed" content={product.description} />
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex items-baseline gap-4">
                                <span className="mr-3 tex-lg">Color: </span>
                                {
                                    product.size.map((item, index) => (
                                        <button
                                            key={index}
                                            className={`${size === item && "ring-2 ring-indigo-500"} border-2 border-gray-300 rounded-full w-10 h-10 focus:outline-none`}
                                            onClick={() => setsize(item)}
                                        >
                                            {item}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">{"$"}{product.price}{".00"}</span>
                            <button aria-label="This will add product to cart" onClick={hadleAddToCart} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BriefProduct