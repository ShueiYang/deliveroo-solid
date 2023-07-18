import { Component } from "solid-js";
import { DeliverooData } from "../../../data.types";
import HeadNavbar from "./HeadNavbar"
import HeroSection from "./HeroSection"

export interface RambuteauRawData {
  datas: DeliverooData
}

const Header: Component<RambuteauRawData> = (props) => {
  
    
  return (
    <div class="container pt-[72px]">
      <HeadNavbar />
      <HeroSection datas={props.datas}/>   
    </div>
  )
}

export default Header;