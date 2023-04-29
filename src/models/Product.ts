export interface ProductEntry {
    _id            : string
    
    visibility     : string
    
    name           : string
    
    price          : number
    shippingWeight : number|undefined
    
    stock          : number|undefined
    
    description    : string|undefined
    images         : string[]
    path           : string|undefined
}