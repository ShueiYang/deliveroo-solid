
import Button from "./headItems/Button";
import { RambuteauRawData } from "./Header";
import { For } from "solid-js";


const HeroSection = (props: RambuteauRawData) => {

  const headerSpan1 = () => (props.datas.header.headerTags.lines[0].spans) 
  const headerSpan2 = () => (props.datas.header.headerTags.lines[1].spans)
  const headerInfo = () => (props.datas.header.headerInfoRows) 

  return (
    <section class="relative flex flex-col md:flex-row gap-6 py-8">
      <div class="relative basis-4/12">
        <img class="object-cover w-full h-full max-h-[340px]"
          src={props.datas.meta.metatags.image} alt="Subway" 
        />
        <div class="btn-0">
          <Button />
        </div>
      </div>
      <div class="flex flex-col xl:flex-row justify-between flex-1">
        <div class="h-full">
          <h1 class="xl:text-[40px]">{props.datas.header.title}</h1>
          <div class="pt-2">
            <span class="pr-1">15 - 25 min</span>
            <For each={headerSpan1()}> 
              {(span => {
                return (
                  <span 
                    class="font-medium"
                    style={{color: `${span.color?.hex}`}}
                  >
                    &nbsp;{span.text}
                  </span>
                )
              })}
            </For>
          </div>

          <div class="flex flex-wrap gap-0.5 items-center pt-2">
            <For each={headerSpan2()}>
              { (span => {
                return (
                 <>
                    { span.icon && <i class={`icon-${span.icon.name}`}></i> }                  
                  <div 
                    class="font-medium whitespace-nowrap"
                    style={{color: `${span.color?.hex}`}}
                  >      
                    { span.typeName === "UISpanSpacer" && ""}
                    { span.typeName === "UISpanText" && span.text}
                  </div>
                 </>
                )
              })}
            </For>   
          </div>

          <For each={headerInfo()}>
            {(info => {
              return(
                <div class="pt-4 flex items-center">
                  <i class={`icon-${info.image.name} text-2xl`} 
                    style={{color: `${info.image.color.hex}`}}>
                  </i>
                 
                  <div class="flex flex-col mx-4">
                    <For each={info.lines}>
                      {(line => (
                        <ul>
                          <li style={{color: `${line.spans[0].color.hex}`}}>
                            {line.spans[0].text}
                          </li>
                        </ul>
                      ))}        
                    </For>
                  </div>
                  <i class="icon-chevron-right"></i>     
                </div>
              )
            })}
          </For>     
        </div>
        <div class="flex flex-col items-start pt-3">     
          <div class="flex mb-2">
            <img class="w-6 mr-4" src="/icons/bike.svg" alt="bike" />
            <span>Livrée dans 15 - 25 min</span>
            <span class="mx-2 text-teal-500">Modifie</span> 
          </div>  
          <div class="btn-1 xl:mt-4">
            <Button />
          </div>
        </div> 
      </div>
    </section>
  )
}

export default HeroSection;