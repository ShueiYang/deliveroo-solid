import { createResource } from "solid-js";
import { DeliverooData } from "../data.types";
import { getDeliverooPageData } from "./service/fetchData";
import { cartProps } from "./components/content/MainContent";
import { createStore } from "solid-js/store";
import { convertToNumber } from "./utils/utility";

// use Store to manage cart
export const [ cart, setCart ] = createStore<cartProps[]>([]);

export const [ pageData ] = createResource<DeliverooData>(getDeliverooPageData, {initialValue: undefined});



export function addCart(foodItem: cartProps) {
    if (cart.length) {
      const itemIndex = cart.findIndex((item) => item.id === foodItem.id);
      if (itemIndex !== -1) {    
        setCart(itemIndex, "quantity", (quantity) => quantity + 1) 
        setCart(itemIndex, "price", (price) => {  
          if(typeof price === "string") {
            return convertToNumber(price) + (convertToNumber(price) / (cart[itemIndex].quantity - 1)) 
          } else {
            return price  + (price / (cart[itemIndex].quantity - 1)) 
          }  
        })
      } else {
        setCart((prev) => {
          return [...prev, foodItem];
        });
      }
    } else {
      setCart((prev) => {
        return [...prev, foodItem];
      });
    }
  }


export function deleteCart(foodItem: cartProps) {
    const newCart = [...cart];
    const cartFilter = newCart.filter((item) => item.id !== foodItem.id);
    setCart(cartFilter);
  }


export function removeCart(foodItem: cartProps) {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex((item) => item.id === foodItem.id);
    if (itemIndex !== -1) {
      if (newCart[itemIndex].quantity === 1) {
        deleteCart(foodItem);
      } else {
        setCart(itemIndex, "quantity", (quantity) => quantity - 1)  
        setCart(itemIndex, "price", (price) => {  
          if(typeof price === "string") {
            return convertToNumber(price) - (convertToNumber(price) / (cart[itemIndex].quantity + 1)) 
          } else {
            return price - (price / (cart[itemIndex].quantity + 1)) 
          }  
        })
      }
    }
  }