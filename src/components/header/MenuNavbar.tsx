import { For, Show, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { LayoutNavigation } from "../../../data.types";
import { howManyItemsInMenuArray } from "../../utils/utility";


let navigationOuterRef: HTMLDivElement 
let navigationRef: HTMLUListElement 
let moreMenuRef: HTMLDivElement


const MenuNavbar = (props: {layoutDatas: LayoutNavigation[]}) => {
  
  let resizeTimer: ReturnType<typeof setTimeout> | null
  
  // eslint-disable-next-line
  const [priorityItems, setPriorityItems] = createSignal<LayoutNavigation[]>(props.layoutDatas);
  const [moreItems, setMoreItems] = createSignal<LayoutNavigation[]>([]);
  const [navWidthArray, setNavWidthArray] = createSignal<number[]>([]);
  const [open, setOpen] = createSignal(false);

  
  const updateNavigation = () => {
    const outerWidth = navigationOuterRef.getBoundingClientRect().width * 85 / 100;
    const moreMenuWidth = moreMenuRef ? moreMenuRef.getBoundingClientRect().width : 80;
    const arrayAmount = howManyItemsInMenuArray(navWidthArray(), outerWidth, moreMenuWidth, 1);
    const navItemCopy = props.layoutDatas;
    const menuArray = arrayAmount === 0 ? 1 : arrayAmount;
    const priorityItems = navItemCopy.slice(0, menuArray); 
    // set up the navbar and the dropdown menu array
    setPriorityItems(priorityItems);
    setMoreItems(priorityItems.length !== navItemCopy.length ? 
      navItemCopy.slice(menuArray, navItemCopy.length) : []
    );
  }
  
  // use throttled behaviour
  function updateNavigationThrottled() {
    if (!resizeTimer) {
      resizeTimer = setTimeout(() => {
        updateNavigation();
        resizeTimer = null;
      }, 100);
    }
  }

  onMount(()=> {
    const widthArray = Array.from(navigationRef.children).map(item => item.getBoundingClientRect().width);
    setNavWidthArray(widthArray);   
    window.addEventListener("resize", updateNavigationThrottled);
  })
  
  createEffect(()=> {
    updateNavigation();
  })
  
  onCleanup (() => {
    if(resizeTimer) {
      clearTimeout(resizeTimer);
    }  
    window.removeEventListener("resize", updateNavigationThrottled);
  });


  return (
    <div ref={navigationOuterRef} class="menuNav h-[72px] flex items-center justify-between bg-orange-50 px-8">
      <ul ref={navigationRef} class="flex gap-6 max-w-[85%] max-h-[72px]">
        <For each={priorityItems()}>
          {(labelName, index) => (
            <li class="flex items-center justify-center min-w-[160px] h-8 whitespace-nowrap text-sm text-[#00b8a9] cursor-pointer">
              <span class={`py-1 px-4 ${index() === 0 ? "bg-[#17ccbd] text-[#fff] font-bold rounded-2xl" : ""}`}>
                {labelName.label}
              </span>
            </li>
          )}
        </For>
      </ul>
      <Show when={moreItems().length > 0} >
        <div ref={moreMenuRef} class="relative w-20">
          <button
            class="flex justify-center items-center gap-2 w-full"
            onClick={()=> {setOpen(!open())}}
          >
            <span>Plus</span>
            <i class="icon-chevron-down"></i>
          </button>
          { open() && 
            <ul class="absolute top-10 right-0 bg-orange-50">
              <For each={moreItems()}>
                {(labelName) => (
                  <li class="whitespace-nowrap flex items-center w-60 h-12 py-2 px-4 border-b-2 cursor-pointer hover:bg-orange-100">
                    {labelName.label}
                  </li>  
                )}
              </For>
            </ul>
          }       
        </div>
      </Show>
    </div>
  )
}

export default MenuNavbar;