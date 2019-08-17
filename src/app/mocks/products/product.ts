export interface Product{
    id: number;
    name: string;
    type: ProductType;
    section: Section;
    details: Deatils;
    dateSold: number;
    description: string;
    photoUrl: string;
    price: number;
    amount: number;
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
    coffeTable,
    surface,
    kitchenUnit,
    sliding,
    traditional,
    buildIn,
    other
 }