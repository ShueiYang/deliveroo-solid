import { Item } from "../../../../data.types"
import { addCart } from "../../../store"
import { For } from "solid-js"


interface MenuCardProps {
  categoryId: string
  name: string
  items: Item[]
}


const MenuCard = (props: MenuCardProps) => {

  const categoryFilter = props.items.filter(item => {
    return item.categoryId === props.categoryId
  })

  return (
    <>
      <h3 class="w-[95%] mt-8 mb-4 mx-auto">{props.name}</h3>
      <div class="max-w-[95%] grid grid-cols-1 xl:grid-cols-2 gap-2 mx-auto">
        
        <For each={categoryFilter}>
          {(item) => {
            return(
              <div
                class="w-full max-h-44 flex justify-between p-4 bg-[#FFF] drop-shadow-md overflow-auto"
                onClick={()=> {
                  addCart({
                    id: item.id,
                    name: item.name,
                    price: item.price.formatted,
                    quantity: 1
                  }) 
                }}           
              >
                <div class="mr-3">
                  <h4>{item.name}</h4>
                  <p class="menu-desc text-sm my-2">{item.description}</p>
                  <p>{item.price.formatted}</p>
                </div>
                <div class="max-w-[25%] flex flex-none items-center">
                  <img 
                    class="max-w-full max-h-full min-w-[90px] aspect-square border-2 border-gray-100"
                    src={item.image ? item.image.url : "/icons/placeholder.svg"}
                    alt={item.image ? item.image.altText : "placeholder"} 
                  />
                </div>
              </div>
          )}}
        </For>
      </div>  
    </>
  )
}

export default MenuCard; 