import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FaHome,FaSearch, FaStar, FaShoppingBag, FaClipboardList, FaHeart, FaUser } from 'react-icons/fa';

function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(6);

  const handleMouseEnter = () => {
    setIsOpen(true);
    setSidebarWidth(12);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setSidebarWidth(6);
  };

  return (
    <div
      className="flex flex-col w-6rem h-screen px-4 py-8 bg-black text-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: `${sidebarWidth}rem` }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src="https://source.unsplash.com/100x100/?portrait"
            alt="Profile"
          />
          <h1 className="ml-3 text-lg font-medium">
          {isOpen && <span>John Doe</span>}</h1>
        </div>
      </div>
      <div className="flex-grow">
        <nav className="space-y-3 mt-5">
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <FaSearch  className=" -ml-1 mr-3 h-6 w-6 text-gray-400 "/>
            {isOpen && <span>Search</span>}
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <FaHome  className=" -ml-1 mr-3 h-6 w-6 text-gray-400"/>
            {isOpen && <span>Home</span>}
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <FaStar  className=" -ml-1 mr-3 h-6 w-6 text-gray-400"/>
            {isOpen && <span>Featured</span>}
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <FaShoppingBag  className=" -ml-1 mr-3 h-6 w-6 text-gray-400 "/>
            {isOpen && <span>Products</span>}
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <FaClipboardList className=" -ml-1 mr-3 h-6 w-6 text-gray-400"/>
            {isOpen && <span>Order</span>}
          </a>
      
      <a
            href="#"
            className="flex items-center px-3 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <FaHeart className=" -ml-1 mr-3 h-6 w-6 text-gray-400"/>
            {isOpen && <span>Wishlist</span>}
          </a>



</nav>
</div>
<div className=" bottom-0 left-0 w-full mb-20">
        <div className="mt-auto">
          <Menu as="div" className="relative inline-block text-left">
          <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium hover:bg-gray-600 ">
          <FaUser  className=" -ml-1 mr-3 h-5 w-5 text-gray-400"/>
          {isOpen && <span>Account</span>}
              </Menu.Button>
</div>

            <div >
  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
              <Menu.Items className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700'
                        } block px-4 py-2 text-sm`}
                      >
                        Edit Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active? 'bg-gray-100 text-gray-900'
: 'text-gray-700'
} block px-4 py-2 text-sm} > Settings </a> )} </Menu.Item> <Menu.Item> {({ active }) => ( <a href="#" className={${
active
? 'bg-gray-100 text-gray-900'
: 'text-gray-700'
} block px-4 py-2 text-sm`}
>
Logout
</a> 
)}
</Menu.Item>
</div>
</Menu.Items>
</Transition>
</div>
</Menu>
</div>
</div>
</div>
 
  );
  }
  export default SideNavigation;
