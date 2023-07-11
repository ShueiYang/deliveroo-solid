import { For } from "solid-js";
import { LayoutNavigation } from "../../../data.types";


const MenuNavbar = (props: {layoutDatas: LayoutNavigation[]}) => {

  return (
    <div class="menuNav h-[72px] flex items-center justify-around bg-orange-50">
      <div class="flex gap-8 max-w-[85%] max-h-[72px] flex-wrap overflow-y-hidden">
        <For each={props.layoutDatas}>
          {(labelName) => (
            <button class="h-[72px] whitespace-nowrap text-sm text-[#00b8a9]">
              {labelName.label}
            </button>
          )}
        </For>
      </div>
      <button class="flex items-center gap-2">
        <span>Plus</span>
        <i class="icon-chevron-down"></i>
      </button>
    </div>
  )
}

export default MenuNavbar;