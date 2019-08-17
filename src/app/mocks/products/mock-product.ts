import { Product, ProductType, Section, Deatils } from './product';

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Stół nowoczesny',
        type: ProductType.Furniture,
        section: Section.table,
        details: Deatils.toDiningRoom,
        dateSold: 0,
        description: 'Stół do jadalni',
        photoUrl: 'https://cdn.pixabay.com/photo/2017/02/16/13/41/architect-2071534_1280.jpg',
        price: 1500,
        amount: 10
    },
    {
        id: 2,
        name: 'Stół tradycyjny',
        type: ProductType.Furniture,
        section: Section.table,
        details: Deatils.toDiningRoom,
        dateSold: 0,
        description: 'Stół tradycyjny do jadalni. Wysokość 76 cm.',
        photoUrl: 'https://cdn.pixabay.com/photo/2017/08/06/02/25/chair-2587847_1280.jpg',
        price: 800,
        amount: 8
    },
    {
        id: 3,
        name: 'Stolik do kawy',
        type: ProductType.Furniture,
        section: Section.table,
        details: Deatils.coffeTable,
        dateSold: 0,
        description: 'Stolik do kawy.',
        photoUrl: 'https://cdn.pixabay.com/photo/2018/04/02/07/28/furniture-3283149_1280.jpg',
        price: 1800,
        amount: 10
    },
    {
        id: 4,
        name: 'Kanapa salonowa',
        type: ProductType.Furniture,
        section: Section.couch,
        details: Deatils.toLivingroom,
        dateSold: 0,
        description: 'Kremowa kanapa trzyosobowa.',
        photoUrl: 'https://cdn.pixabay.com/photo/2019/04/18/16/24/home-4137379_1280.jpg',
        price: 1500,
        amount: 5
    }
]