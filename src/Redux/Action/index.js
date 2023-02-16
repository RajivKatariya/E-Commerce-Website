// For Add Item

export const addCart = (product)=>{
   return{
    type:"ADDITEM",
    payload: product
   }
}


// For Delete Item

export const delCart=(product)=>{
    return{
        type:"DELITEM",
        payload : product
    }
}