import { For, createEffect, createSignal } from "solid-js";
import { addCart, cart, deleteCart, removeCart } from "../../../store";
import { convertToNumber } from "../../../utils/utility";

export const [ totalSum, setTotalSum ] = createSignal(0)
export const [ itemTotal, setItemTotal ] = createSignal(0)

export const deliveryFee = 2.5;


const CartDetail = () => {

  // similar to useEffect to track cart signal, and do sideEffect on totalQty and Sum calculation
  createEffect(() => {
    let sum = 0;
    let totalQty = 0;
    let price;

    for (const item of cart) {     
      if(typeof item.price === "string") {
        // conversion from string € to number 
        price = convertToNumber(item.price)
      } else {
        price = item.price
      }  
      totalQty = totalQty + item.quantity
      sum = sum + price;
    }
    setItemTotal(totalQty)
    setTotalSum(sum);
  });
    

  return (
    <div class="bg-[#fff]">
      <div class="flex flex-col overflow-y-auto max-h-[350px] min-h-[50px] gap-4 mt-4">
        <For each={cart}>
          {(item) => {            
            return (
              <div class="cart flex gap-4 justify-between">
                <div class="flex items-center whitespace-nowrap">
                  {/* decremente quantity */}
                  <button onClick={()=> {removeCart(item)}}>
                    <i class="icon-minus text-2xl"/>
                  </button>
                  <span>{item.quantity}</span>
                  {/* add quantity */}
                  <button onClick={()=>{addCart(item)}}>
                    <i class="icon-plus text-2xl"/>
                  </button>    
                </div>
                <div class="cart-name">
                  <span>{item.name}</span>
                </div>
                <div class="flex items-center">
                  <div>
                    <span>
                    { typeof item.price === "string" ? convertToNumber(item.price).toFixed(2)
                      : (item.price).toFixed(2)
                    }
                    </span>
                  </div>  
                    {/* delete items in one click */}
                  <button onClick={()=> {deleteCart(item)}}>
                    <i class="icon-cross text-2xl"/>
                  </button>
                </div>
              </div>
          )}}
        </For>
      </div>
      <div class="flex flex-col gap-3 py-5 border-y-2 mt-4">
        <div class="flex justify-between mx-4">
          <p>Sous-total</p>
          <p>{`${totalSum().toFixed(2)} €`}</p>
        </div>
        <div class="flex justify-between mx-4">
          <p>Frais de livraison</p>
          <p>{`${deliveryFee} €`}</p>
        </div>
      </div>
      <div class="flex justify-between mx-4 my-4">
        <p>Total</p>
        <p>{`${(totalSum() + deliveryFee).toFixed(2)} €`}</p>
      </div>
    </div>
  )    
}

export default CartDetail;