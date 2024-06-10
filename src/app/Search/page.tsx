"use client"
import { useEffect } from 'react';
import ProductGridViewer from '@/components/Views/ProductGridViewer';
import { searchProductsFromSanity } from '@/components/utils/apicalling';
import { allProductFetherFromSanityType } from '@/components/utils/types';
import { useRouter } from 'next/router';

const Search = () => {
    const router = useRouter();

    useEffect(() => {
        const fetchSearchResults = async () => {
            const searchValue = router.query.query as string;

            if (!searchValue) {
                router.push('/products');
                return;
            }

            try {
                const data = await searchProductsFromSanity(searchValue) as allProductFetherFromSanityType;
                console.log(data);

                // Render ProductGridViewer component with search results
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [router]); // Include router in the dependency array

    return (
        <div className="py-4">
            <h1 className="my-3 text-3xl md:text-5xl font-bold text-gray-500 text-center">Search</h1>
            <p className="text-center">Results will appear here</p>
        </div>
    );
};

export default Search;
