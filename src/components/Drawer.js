"use client"

import { drawerToggle } from "@/redux/invoiceSlice";
import { useSelector, useDispatch } from "react-redux" 

export default function Drawer(){
  const { drawerOpen } = useSelector((store) => store.invoice);
  const dispatch = useDispatch();

  return (
    <div>
      {drawerOpen && (
        <div onClick={() => dispatch(drawerToggle())} className="absolute bg-black bg-opacity-50 w-full top-0 left-0 bottom-0"></div>
      )}
      <div className={`absolute bg-white left-0 bottom-0 top-0 w-[719px] z-10 transition -translate-x-full ${drawerOpen && "translate-x-0"} duration-700`}>Drawer</div>
    </div>
  )
}