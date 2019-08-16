import { Product, ProductType } from './product';

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Stół nowoczesny',
        type: ProductType.Furniture,
        dateSold: 0,
        description: 'Stół do jadalni',
        photoUrl: 'https://cdn.pixabay.com/photo/2017/02/16/13/41/architect-2071534_1280.jpg',
        price: 1500
    },
    {
        id: 2,
        name: 'Stół tradycyjny',
        type: ProductType.Furniture,
        dateSold: 0,
        description: 'Stół tradycyjny do jadalni. Wysokość 76 cm.',
        photoUrl: 'https://cdn.pixabay.com/photo/2017/08/06/02/25/chair-2587847_1280.jpg',
        price: 800
    }
]