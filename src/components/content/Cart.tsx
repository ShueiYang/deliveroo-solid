
import { createSignal } from "solid-js";
import CartDetail, { itemTotal, totalSum } from "./items/CartDetail";
import { cart } from "../../store";

// export interface CustomHooksProps {
//   cart: cartProps[]
//   addCart: (foodItem: cartProps) => void
//   deleteCart: (foodItem: cartProps) => void
//   removeCart: (foodItem: cartProps) => void
// }

const Cart = () => {

  const [ open, setOpen ] = createSignal(false);

  return (
   <>
    { cart.length === 0 ?
      <div class="hidden md:empty-container sticky w-full md:w-[40%] xl:w-1/4 border-2 border-neutral-200 text-center">
        <div>
          <i class="icon-cart text-5xl text-zinc-400"></i>
          <p class="font-strat text-zinc-400">Votre panier est vide</p> 
        </div>
        <button class="bg-neutral-200 font-semibold text-zinc-400 px-4 py-3">
          Finaliser la commande
        </button>  
      </div>

    : <>
        <div class="hidden md:cart-container sticky w-full md:w-2/5 xl:w-1/4 border-2 border-neutral-200 text-center"> 
          <CartDetail />
          <button class="cmd-button">
            Finaliser la commande
          </button>  
        </div>
        <div class="flex flex-col md:hidden sticky bottom-0 w-[95%] my-4 mx-auto border-2 border-neutral-200 text-center z-10"> 
          { open() && <CartDetail/> }

          <button class="cmd-button" onClick={()=> {setOpen(!open())}}>
            <div class="flex justify-around">
              <span>{`Qty ${itemTotal()}`}</span>
              <p>{open() ? "Fermer mon panier" : "Voir mon panier"}</p>
              <span>{`${(totalSum()).toFixed(2)} €`}</span>
            </div>    
          </button>  
        </div>
      </>     
    }  
   </>  
  )
}

export default Cart;