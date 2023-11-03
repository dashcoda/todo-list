import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const products = await (await import ('$lib/dummy-products.json')).default;
    return {
        products
    };
};