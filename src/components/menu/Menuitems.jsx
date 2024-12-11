import { menuItems } from '@/constants/menu'; // Importing menuItems
import { useOutsideClick } from '@/hooks/use-outside-click';
import { AnimatePresence, motion } from 'framer-motion';
import { Beef, VeganIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Input } from '../ui/input';

export default function MenuItems({ filteredItems }) {

  const [active, setActive] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full !z-20" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`item-${active.name}`}
              ref={ref}
              className="relative w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden md:pb-0 pb-6">
              <motion.button
                key={`button-${active.name}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex md:hidden absolute bottom-3 right-2 lg:hidden items-center justify-center bg-gray-700 rounded-xl h-14 w-[96%] text-white z-40"
                onClick={() => setActive(null)}>
                <span className="text-lg">CLOSE</span>
              </motion.button>
              <motion.div className="relative">
                <motion.div layoutId={`image-${active.name}`} className="relative">
                  <Image
                    priority
                    width={200}
                    height={200}
                    // src={active.image_src}
                    src={"/images/carousel/1.jpeg"}
                    alt={active.name}
                    className="w-full h-72 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center" />
                </motion.div>
                <motion.div
                  layoutId={`item-${active.veg}-${active.name}`}
                  className="absolute bottom-4 right-4">
                  {active.veg ? (
                      <Image
                        src="/images/icons/veg.png"
                        alt="Veg"
                        width={35}
                        height={35}
                      />
                    ) : (
                      <Image
                        src="/images/icons/non-veg.png"
                        alt="Veg"
                        width={35}
                        height={35}
                      />
                    )}
                </motion.div>
              </motion.div>

              <div className="relative overflow-y-auto">
                <div className="flex flex-col justify-between items-start py-4 px-6">
                  <motion.div className="flex flex-col w-full items-center justify-between text-2xl md:text-xl">
                    <motion.div layoutId={`name-${active.name}`} className="font-semibold text-amber-500 w-full text-center">
                      {active.name}
                    </motion.div>
                    <div className='w-full flex flex-col md:flex-row items-center justify-center gap-0 md:gap-3'>
                      <span
                        className="text-green-500 dark:text-green-400">
                        ({active.category})
                      </span>
                      <motion.span
                        className='flex md:flex-row items-center justify-center gap-3'
                      >
                        <motion.span
                          className=''
                          layoutId={`item-${active.price}-${active.name}`}>
                          ₹{active.price}
                        </motion.span>
                        <motion.span
                          layoutId={`item-${active.calories}-${active.name}`}
                          className="text-red-700 dark:text-red-400 font-semibold">
                          [{active.calories !== null ? `${active.calories}KCAL` : "N/A"}]
                        </motion.span>
                      </motion.span>
                    </div>
                  </motion.div>
                  <motion.p
                    layoutId={`description-${active.description}`}
                    className="text-neutral-700 dark:text-neutral-300 text-base mt-2 w-full text-center">
                    {active.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div id="menu" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 justify-center pt-2 items-stretch">
        {filteredItems.map((item, index) => (
          <div
            key={`item-${item.name}`}
          >
            <motion.div
              layoutId={`item-${item.name}`}
              className="flex items-center border-2 border-gray-100 dark:border-gray-800 rounded-lg shadow-lg h-full"
            >
              {/* Details Section */}
              <motion.div className="px-4 py-3 flex flex-col items-left justify-between w-full h-full">
                <motion.div className='flex flex-col items-left justify-start w-full'>
                  <motion.div layoutId={`name-${item.name}`} className="text-lg md:text-base font-medium text-amber-500 pb-1">
                    {`${item.name.length > 40 ? item.name.slice(0, 40) + "..." : item.name}`}
                  </motion.div>
                  <motion.div className="flex text-base gap-2 items-center">
                    <motion.span layoutId={`item-${item.price}-${item.name}`}>₹{item.price}</motion.span>

                    <motion.span layoutId={`item-${item.calories}-${item.name}`} className="text-red-700 dark:text-red-400">
                      {item.calories !== null ? `${item.calories}KCAL` : "N/A"}
                    </motion.span>
                  </motion.div>
                </motion.div>
                <motion.div
                  onClick={() => setActive(item)}
                  className='cursor-pointer text-gray-700 dark:text-gray-200 border rounded-3xl w-fit py-[2px] px-4 hover:text-gray-800 dark:hover:text-gray-300 text-sm md:text-sm mt-2 bg-gray-100 dark:bg-gray-800'
                >
                  More Details &nbsp; &rarr;
                </motion.div>
              </motion.div>

              {/* Image Section */}
              <motion.div className="flex flex-col w-2/5 md:w-3/5 p-3 gap-1 md:gap-2 items-center justify-center">
                <motion.div className='relative' layoutId={`image-${item.name}`}>
                  <Image
                    // src={item.image_src}
                    src={"/images/carousel/1.jpeg"}
                    alt={item.name}
                    height={300}
                    width={300}
                    className="w-full aspect-square object-cover rounded-md"
                  />
                </motion.div>
                <motion.div className='flex h-fit items-center justify-center gap-3 w-full' >
                  <motion.div
                    layoutId={`item-${item.stars}-${item.name}`}
                    className='flex items-center justify-center gap-1'
                  >
                    <FaStar size={15} color='orange' />
                    <span>{item.stars}</span>
                  </motion.div>
                  <motion.div
                    className=""
                    layoutId={`item-${item.veg}-${item.name}`}
                  >
                    {item.veg ? (
                      <Image
                        src="/images/icons/veg.png"
                        alt="Veg"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src="/images/icons/non-veg.png"
                        alt="Veg"
                        width={20}
                        height={20}
                      />
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>

            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
}