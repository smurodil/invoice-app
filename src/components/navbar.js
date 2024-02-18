"use client"
import { useDispatch } from "react-redux"
import { drawerToggle } from "@/redux/invoiceSlice"; 

export default function Navbar() {
  const dispatch = useDispatch()
  return (
    <div className="mt-[72px] flex items-center">
      <div className="mr-auto">
        <h2 className="text-3xl font-bold">Invoice</h2>
        <small>There are 7 total invoices</small>
      </div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="m-1 font-bold mr-10">
          Filter by status
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <label className="label cursor-pointer justify-start">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
              />
              <span className="label-text">Draft</span>
            </label>
          </li>
          <li>
            <label className="label cursor-pointer justify-start">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
              />
              <span className="label-text">Pending</span>
            </label>
          </li>
          <li>
            <label className="label cursor-pointer justify-start">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
              />
              <span className="label-text">Paid</span>
            </label>
          </li>
        </ul>
      </div>
      <button onClick={() => dispatch(drawerToggle())} className="btn btn-primary">New invoice</button>
    </div>
  );
}
