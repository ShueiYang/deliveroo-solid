
import { RambuteauRawData } from "../header/Header";
import MenuCard from "./items/MenuCard";
import { For } from "solid-js";



const MenuLists = (props: RambuteauRawData) => {

  const categories = props.datas.meta.categories;
  const items = props.datas.items;
  const heroImage = props.datas.meta.metatags.image;


  return (
    <section class="w-full md:grow md:w-[60%] xl:w-3/4">
      <p class="w-[95%] mx-auto my-8 text-sm">
        Certains produits de la gamme sont en rupture momentanée suite au contexte actuel exceptionnel. Nous nous réservons le droit de remplacer la boisson Volvic 33cl par la boisson Evian 33cl en cas de rupture de stocks sur ce produit. Veuillez nous excuser pour la gêne occasionnée.
      </p>

      <div class="flex justify-between items-center gap-6 w-[95%] mx-auto my-4 text-sm bg-[#fff] drop-shadow-md">
        <div class="flex flex-col mx-6 my-4">
          <h4>{props.datas.layoutGroups[1].layouts[0].header}</h4>
          <p class="my-2">
            {`Le concept ? Du sur-mesure préparé sous vos yeux !! Chez Subway®, c'est vous qui créez votre sandwich, votre salade ou votre wrap suivant vos envies et vos besoins.`}
          </p>
        </div>
        <img 
          class="aspect-square rounded-full max-w-[50px] max-h-[50px] mx-6"
          src={heroImage}
          alt="Subway"     
        />
      </div>
      
      <For each={categories}>
        {(menuSection) => {
          return (
            <div class="hover:cursor-pointer">
              <MenuCard 
                categoryId={menuSection.id}
                name={menuSection.name} 
                items={items}
              />
            </div>    
        )}}
      </For>
    </section>
  )
}

export default MenuLists;