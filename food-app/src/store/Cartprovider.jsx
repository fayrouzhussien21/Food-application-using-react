import CartContext from './cart-context'
import { useReducer } from 'react'
const initialCartState = {
    items: [],
    totalAmount: 0
  };
const CartReducer=(state,action)=>{
    if(action.type==="Add")
    {
        
        const newtotalAmount=state.totalAmount+action.item.price*action.item.totalAmount
        const existingindx=state.items.findIndex(item=>item.id==action.item.id)
        const existingCartItem=state.items[existingindx];
        
        let updateditem;
        let updateditems;
        if(existingCartItem){
            updateditem={
                ...existingCartItem,
                totalAmount: Number(action.item.totalAmount)+Number(existingCartItem.totalAmount)
            }
            updateditems=[...state.items];
            updateditems[existingindx]=updateditem;
        }
        else{
            updateditem={...action.item};
            updateditems=state.items.concat(action.item);
        }
        return{
            items:updateditems,
            totalAmount:newtotalAmount
        }
    }
    else if(action.type==="delete"){
        const existingindx=state.items.findIndex(item=>item.id==action.id);
        const newtotalAmount=state.totalAmount-state.items[existingindx].price;
        let updateditems;
        if(state.items[existingindx].totalAmount==1)
        {
            updateditems=state.items.filter((item)=>item.id!==action.id);

        }
        else{
            const updateditem={...state.items[existingindx],totalAmount:state.items[existingindx].totalAmount-1}
             updateditems=[...state.items];
            updateditems[existingindx]=updateditem;
        }
        return{
            items:updateditems,
            totalAmount:newtotalAmount
        }

    }

    return initialCartState;
}
const Cartprovider =(props)=>{
    const [CartState,Cartdispatcher] = useReducer(CartReducer,initialCartState);
    const AddItemToCart=item=>{
        Cartdispatcher({
            type:"Add",
            item:item

        })
    }
    const DeleteItemFromCart=id=>{
        Cartdispatcher({
            type:"delete",
            id:id

        })
    }
    const cartContext={
        items:CartState.items,
        totalAmount:CartState.totalAmount,
        addItem:AddItemToCart,
        removeItem:DeleteItemFromCart
        
        }
   return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}
export default Cartprovider;