import ProductGridViewer from "@/components/Views/productGridViewer";
import { allProductFetherFromSanity } from "@/components/utils/apicalling"
import { allProductFetherFromSanityType } from "@/components/utils/types";



const Products = async () => {
    let data = await allProductFetherFromSanity() as allProductFetherFromSanityType;

    return (
        <>
            <div className="py-4">
                <h1 className="my-3 text-3xl md:text-5xl font-bold text-gray-500 text-center">All Products</h1>
                <p className="text-center">Explore what we have</p>
                <ProductGridViewer ProducData={data.result} />
            </div>
        </>
    )
}

export default Products