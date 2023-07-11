import MenuLists from "./MenuLists";
import Cart from "./Cart";
import MenuNavbar from "../header/MenuNavbar";
import { RambuteauRawData } from "../header/Header";


export interface cartProps {
  id: string
  name: string
  price: string | number
  quantity: number
}


const MainContent = (props: RambuteauRawData) => {


  return (
    <div class="w-full flex flex-col">
      <div class="sticky top-[72px] z-10">
        <MenuNavbar  layoutDatas={props.datas.layoutNavigation}/>
      </div>
      <div class="container flex flex-col md:flex-row bg-slate-100 pt-8">
        <MenuLists datas={props.datas} /> 
        <Cart />
      </div>
    </div>
  )
}

export default MainContent;