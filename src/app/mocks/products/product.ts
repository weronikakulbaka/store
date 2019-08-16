export interface Product{
    id: number;
    name: string;
    type: ProductType;
    dateSold: number;
    description: string;
    photoUrl: string;
    price: number;
}

export enum ProductType{
    Furniture,
    Light,
    Decoration
}

// export enum DetailType{
//     desk,
//     etagere,
//     armchair,
//     couch,
//     commode,
//     chair,
//     bed,
//     shelf,
//     sofa,
//     table,
//     kitchenUnit,
//     wardrobe,
//     dressingTable,
//     lamp,
//     standingLamp,
//     wallLamp,
//     outdoorLamp,
//     chandelier,
//     flowerpot,
//     laceCurtain,
//     mirror
// }