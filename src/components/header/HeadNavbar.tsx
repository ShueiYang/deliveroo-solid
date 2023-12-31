import { cart } from "../../store";
import { deliveryFee, totalSum } from "../content/items/CartDetail";
import Logo from "./headItems/Logo";


const HeadNavbar = () => {
 

  return (
    <nav class="fixed w-full top-0 inset-x-0 flex justify-between items-center px-4 h-[72px] z-10 bg-orange-50">
      <Logo />
      <div class="relative max-w-[500px] grow hidden lg:block ml-2">
        <input 
          type="text"
          name="search"
          class="w-full px-7 py-1.5 outline-none focus:ring-2 focus:ring-zinc-500 rounded-sm"
          placeholder="Chercher Subway - Rambuteau"    
        />
        <i class="absolute icon-search left-0.5 inset-y-2 text-slate-400"/>
      </div>

      <a href="https://github.com/ShueiYang/deliveroo-solid"
        class="hidden md:flex items-center mx-2 border-none"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          class="w-6"
          src="/icons/github.svg"
          alt="github"
        />
        <span>Source</span>
      </a>

      <div class="flex gap-2">
        <button class="hidden sm:flex items-center">
            <i class="icon-cart mr-2" />
            <span>
              {`${cart.length === 0 ? "0.00" : (totalSum() + deliveryFee).toFixed(2)} €`} 
            </span> 
        </button>
        <button class="hidden sm:flex items-center">
            <i class="icon-user mr-2" />
            <span>Inscription ou connexion</span> 
        </button>

        <button class="flex items-center border-[1px] border-[#e5e7eb]">
          <i class="icon-menu-bars mr-2" />
            Menu
        </button>
      </div>
    </nav>  
  )
}

export default HeadNavbar;