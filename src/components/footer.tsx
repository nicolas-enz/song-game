import Link from "next/link";
import Image from "next/image";
import { Disclosure } from '@headlessui/react'

export default function Footer() {
  return (
    <Disclosure as="footer" className="container mx-auto">
      <div className="mx-auto min-h-40 max-w-7xl px-2 sm:px-6 lg:px-8 bg-slate-100 rounded-t-xl dark:bg-slate-900 dark:text-white">
        
      </div>
    </Disclosure>
  );
}