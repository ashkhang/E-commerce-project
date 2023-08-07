const cart={
    cartitem:[]
}
const reducer =(state=cart,action)=>{
    const object = action.data
    switch(action.type){
        case "ADD_TO_CART":
                return{
                ...state,cartitem:[...state.cartitem,{...object}]
            }
            default:return state
        }
    }
    export default reducer;






    // let existproduct=state.cartitem.find((y)=>y.id === object.id)
    // if (existproduct) {
    //     const obj= state.cartitem.map((x)=> {
    //         if (x.id === object.id) {
    //             const newqty = x.qty + object.qty
    //             return{
    //                         ...x,
    //                         qty :  newqty 
    //                     }
    //                 }
    //                 else{
    //                     return x
    //                 }
    //             })
    //             return {
    //                 ...state,
    //                 cartitem: obj
    //             }
    // }
    // else{
    //     return{
    //         ...state,cartitem:[...state.cartitem,{...object}]
    //     }
    // }