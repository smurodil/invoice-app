"use client"
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return <main className="w-[730px] max-w-full mx-auto">
    <Navbar/>
    <br />
    <h2>Home Page</h2>
    <Link href='invoice/1'>See This Invoice</Link>
  </main>;
}
