export interface Product{
    ProductID: number;
    Name: string;
    Type: ProductType;
    Section: Section;
    Details: Deatils;
    DateSold: number;
    Description: string;
    PhotoUrl: string;
    Price: number;
    Amount: number;
    IsOnSale: number;
}

export enum ProductType{
    Furniture,
    Light,
    Mirror,
    Decoration,
}

export enum Section{
    desk,
    etagere,
    armchair,
    couch,
    commode,
    chair,
    bed,
    shelf,
    sofa,
    table,
    kitchenUnit,
    wardrobe,
    dressingTable,
    lamp,
    standingLamp,
    wallLamp,
    outdoorLamp,
    chandelier,
    flowerpot,
    laceCurtain,
    wallMirror,
    bathroomMirror,
    standingMirror,
    decoration,
    curtain,
    other
}

 export enum Deatils{
    toOffice,
    kids,
    toLivingroom,
    slivingchair,
    onePerson,
    twoPerson,
    corner,
    noFoldDown,
    foldDown,
    threePersonAndMore,
    toDiningRoom,
    coffeeTable,
    surface,
    kitchenUnit,
    sliding,
    traditional,
    buildIn,
    other
 }