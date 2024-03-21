// // FilterPanel.js
// import React from "react";
// import { Dialog, Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon, FunnelIcon, XMarkIcon } from "@heroicons/react/solid";

// export default function FilterPanel({
//   categories,
//   selectedCategory,
//   setSelectedCategory,
//   mobileFiltersOpen,
//   setMobileFiltersOpen,
// }) {
//   // Function to render category links
//   const renderCategoryLink = (category) => (
//     <li key={category.id} className="flex items-center justify-between text-sm">
//       <input
//         type="radio"
//         value={category.title}
//         name={category.title}
//         id={category.title}
//         onClick={() => setSelectedCategory(category.id)}
//         checked={category.id === selectedCategory}
//       />
//       <label className="capitalize">{category.title}</label>
//     </li>
//   );

//   // Sort options and other UI elements can be defined here

//   return (
//     <>
//       {/* Mobile Filters */}
//       <Transition.Root show={mobileFiltersOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="relative z-40 lg:hidden"
//           onClose={setMobileFiltersOpen}
//         >
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-40 flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="translate-x-full"
//             >
//               <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//                 <div className="flex items-center justify-between px-4">
//                   <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//                   <button
//                     type="button"
//                     className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                     onClick={() => setMobileFiltersOpen(false)}
//                   >
//                     <span className="sr-only">Close menu</span>
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>

//                 {/* Filters */}
//                 <form className="mt-4 border-t border-gray-200">
//                   <h3 className="sr-only">Categories</h3>
//                   <ul
//                     role="list"
//                     className="px-2 py-3 space-y-4 font-medium text-gray-900"
//                   >
//                     {Categories.map(renderCategoryLink)}
//                   </ul>
//                 </form>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>

//       {/* Desktop Filters */}
//       <div className="hidden lg:block sticky top-10 pr-4 border-r-[1px]">
//         {/* Filters UI for desktop */}
//       </div>
//     </>
//   );
// }
