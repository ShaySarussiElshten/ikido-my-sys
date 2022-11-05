import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition,Popover, } from '@headlessui/react'
import {
  ChevronRightIcon,
  CogIcon,
  HomeIcon,
  PhotoIcon,
  RectangleStackIcon,
  Squares2X2Icon as Squares2X2IconOutline,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import {

  MagnifyingGlassIcon,
 
} from '@heroicons/react/24/solid'


import {
  Bars3Icon,
  BellIcon,
} from '@heroicons/react/24/outline'
import PieChart from './Components/PieChart/PieChart'
import TableScans from './Components/TableScans/TableScans'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  role: 'Human Resources Manager',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}


const stats = [
  { label: 'Vacation days left', value: 12 },
  { label: 'Sick days left', value: 4 },
  { label: 'Personal days left', value: 2 },
]





const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: false },
  { name: 'All Files', href: '#', icon: Squares2X2IconOutline, current: false },
  { name: 'Photos', href: '#', icon: PhotoIcon, current: true },
  { name: 'Shared', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Albums', href: '#', icon: RectangleStackIcon, current: false },
  { name: 'Settings', href: '#', icon: CogIcon, current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]


function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}



const HomeScreen = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-gray-50">
      <body class="h-full overflow-hidden">
      ```
    */}
    <div className="flex h-full bg-white">
      {/* Narrow sidebar */}
      <div className="hidden w-28 overflow-y-auto bg-gray-800 md:block">
        <div className="flex w-full flex-col items-center py-6">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=white"
              alt="Your Company"
            />
          </div>
          <div className="mt-6 w-full flex-1 space-y-1 px-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-indigo-800 text-white' : 'text-white hover:bg-lime-500 hover:text-white',
                  'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-white' : 'text-gray-400 group-hover:text-white',
                    'h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                <span className="mt-2">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-1 right-0 -mr-14 p-1">
                    <button
                      type="button"
                      className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      <span className="sr-only">Close sidebar</span>
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                    alt="Your Company"
                  />
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                  <nav className="flex h-full flex-col">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                              'bg-indigo-800 text-white',
                            'group py-2 px-3 rounded-md flex items-center text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-white' : 'text-white group-hover:text-white',
                              'mr-3 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Content area */}
      <div className="w-full flex justify-center">
        <div className="w-11/12">
          <Popover as="header" className="bg-gradient-to-r from-sky-800 to-cyan-600 pb-24">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                    {/* Logo */}
                    <div className="absolute left-0 flex-shrink-0 py-5 lg:static">
                      <a href="#">
                        <span className="sr-only">Your Company</span>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=200"
                          alt=""
                        />
                      </a>
                    </div>

                    {/* Right section on desktop */}
                    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                      <button
                        type="button"
                        className="flex-shrink-0 rounded-full p-1 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-4 flex-shrink-0">
                        <div>
                          <Menu.Button className="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>

                    <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                      <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
                        {/* Left nav */}
                      
                        <div className="px-12 lg:px-0">
                          {/* Search */}
                          <div className="mx-auto w-full max-w-xs lg:max-w-md">
                            <label htmlFor="search" className="sr-only">
                              Search
                            </label>
                            <div className="relative text-white focus-within:text-gray-600">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                              </div>
                              <input
                                id="search"
                                className="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-white placeholder-white focus:border-transparent focus:bg-opacity-100 focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                                placeholder="Search"
                                type="search"
                                name="search"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Menu button */}
                    <div className="absolute right-0 flex-shrink-0 lg:hidden">
                      {/* Mobile menu button */}
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Popover.Button>
                    </div>
                  </div>
                </div>

                <Transition.Root as={Fragment}>
                  <div className="lg:hidden">
                    <Transition.Child
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="duration-150 ease-in"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="duration-150 ease-in"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                      >
                        <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="pt-3 pb-2">
                            <div className="flex items-center justify-between px-4">
                              <div>
                                <img
                                  className="h-8 w-auto"
                                  src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600"
                                  alt="Your Company"
                                />
                              </div>
                              <div className="-mr-2">
                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                  <span className="sr-only">Close menu</span>
                                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                              </div>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                              {navigation.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                          <div className="pt-4 pb-2">
                            <div className="flex items-center px-5">
                              <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                              </div>
                              <div className="ml-3 min-w-0 flex-1">
                                <div className="truncate text-base font-medium text-gray-800">{user.name}</div>
                                <div className="truncate text-sm font-medium text-gray-500">{user.email}</div>
                              </div>
                              <button
                                type="button"
                                className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                              >
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                              {userNavigation.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition.Child>
                  </div>
                </Transition.Root>
              </>
            )}
          </Popover>
          <main className="-mt-24 pb-8">
            <div className="">
              <h1 className="sr-only">Profile</h1>
              {/* Main 3 column grid */}
              <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                {/* Left column */}
                <div className="grid grid-cols-1 gap-4 lg:col-span-3">
                  {/* Welcome panel */}
                  <section aria-labelledby="profile-overview-title">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                      <h2 className="sr-only" id="profile-overview-title">
                        Profile Overview
                      </h2>
                      <div className="bg-gray-100 p-6">
                        <div className="sm:flex sm:items-center sm:justify-between">
                          <div className="sm:flex sm:space-x-5">
                            <div className="flex-shrink-0">
                              <img className="mx-auto h-20 w-20 rounded-full" src={user.imageUrl} alt="" />
                            </div>
                            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                              <p className="text-sm font-medium text-gray-600">Welcome back,</p>
                              <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user.name}</p>
                              <p className="text-sm font-medium text-gray-600">{user.role}</p>
                            </div>
                          </div>
                          <div className="mt-5 flex justify-center sm:mt-0">
                            <a
                              href="#"
                              className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                            >
                              View profile
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                        {stats.map((stat) => (
                          <div key={stat.label} className="px-6 py-5 text-center text-sm font-medium">
                            <span className="text-gray-900">{stat.value}</span>{' '}
                            <span className="text-gray-600">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Actions panel */}
                  <section aria-labelledby="quick-links-title">
                    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-3 sm:gap-px sm:divide-y-0">
                      <h2 className="sr-only" id="quick-links-title">
                        Quick links
                      </h2>
                        
                        {/* 1 square */}
                        <div
                          key={'Request time off'}
                          className={classNames(
                            'relative group bg-gray-100 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500'
                          )}
                        >
                          <div>
                            <p className="text-lg font-bold text-black font-sans sm:text-lg">
                               Risk Manegement - High Level Organization View
                            </p>
                          </div>
                          <div className="mt-8">
                            <div className="w-4/5">
                                <PieChart />
                            </div>
                          </div>
                          <span
                            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                            aria-hidden="true"
                          >
                            
                          </span>
                        </div>
                        {/* 2 square */}
                         <TableScans />
                    </div>
                  </section>
                </div>

                
              </div>
            </div>
          </main>
          <footer>
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
                <span className="block sm:inline">&copy; 2021 Your Company, Inc.</span>{' '}
                <span className="block sm:inline">All rights reserved.</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
    </>
  );
}

export default HomeScreen