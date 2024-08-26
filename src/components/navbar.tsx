import Link from "next/link";
import Image from "next/image";
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Reglas', href: '/rules', current: false },
  { name: 'Nuevo Juego', href: '/game', current: false }
]

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-b-2 bg-slate-100 rounded-md">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center">
            <div className="absolute left-0 items-center sm:items-stretch sm:justify-start font-medium">
              <Link className="text-lg h-8 w-auto" href="/">Playlist Game</Link>
            </div>
            <div className="rounded-lg border-b-2 border-slate-300 sm:ml-6 sm:block">
              <div className="flex">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(item.current ? 'bg-slate-300 text-black' : ' hover:bg-slate-300 hover:text-black', 'rounded-lg px-4 py-3 text-lg font-medium')}>
                    {item.name}</Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image className="h-10 w-10 rounded-full" width={50} height={50} src={"/user-placeholder.png"} alt="User image" />
                </MenuButton>
                <MenuItems transition className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                  <MenuItem>
                    <Link className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100" href="/user/profile">Perfil</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100" href="/user/settings">Configuracion</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100" href="/user/signout">Cerrar Sesion</Link>
                  </MenuItem>
                </MenuItems>
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}