import { DeliverooData } from "../../../data.types";
import HeadNavbar from "./HeadNavbar"
import HeroSection from "./HeroSection"

export interface RambuteauRawData {
  datas: DeliverooData
}

const Header = (props: RambuteauRawData) => {
  
    
  return (
    <div class="container pt-[72px]">
      <HeadNavbar />
      <HeroSection datas={props.datas}/>   
    </div>
  )
}

export default Header;