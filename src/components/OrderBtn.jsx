"use client";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "./ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/constants/orderBtn";
import Link from "next/link";
import { contactInfo } from "@/constants/contacts";
import { Route, Sandwich, ShoppingBasket, Soup } from "lucide-react";

export default function OrderBtn() {
    return (
            <Modal>
                <ModalTrigger
                    className="bg-ktheme-500 px-5 text-gray-700 dark:text-black flex justify-center group/modal-btn">
                    <span
                        className="group-hover/modal-btn:-translate-x-40 text-center transition duration-500 font-bold">
                        Order Now
                    </span>
                    <div
                        className="translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 text-2xl">
                        🚛
                    </div>
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4
                            className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Explore healthy eating with{" "}
                            <span
                                className="px-1 py-0.5 rounded-md bg-ktheme-500 dark:bg-ktheme-500 dark:text-gray-800 dark:border-neutral-700 border border-gray-200">
                                खुRaak
                            </span>{" "}
                            now! 🥗
                        </h4>
                        <div className="flex justify-center items-center">
                            {images.map((image, idx) => (
                                <motion.div
                                    key={"images" + idx}
                                    style={{
                                        rotate: Math.random() * 20 - 10,
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 0,
                                        zIndex: 100,
                                    }}
                                    whileTap={{
                                        scale: 1.1,
                                        rotate: 0,
                                        zIndex: 100,
                                    }}
                                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden">
                                    <Image
                                        src={image}
                                        alt="healthy food images"
                                        width="500"
                                        height="500"
                                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0" />
                                </motion.div>
                            ))}
                        </div>
                        <div
                            className="pt-10 pb-2 flex flex-wrap gap-x-4 gap-y-6 items-center justify-center max-w-sm mx-auto">
                            <div className="flex items-center justify-center">
                                <ShoppingBasket className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Fresh ingredients daily
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Route className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Diet plans customized
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Sandwich className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Healthy snacks on the go
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Soup className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Nutritious meals for all
                                </span>
                            </div>
                        </div>
                    </ModalContent>

                    <ModalFooter className="flex items-center justify-center gap-4">
                        <Link href={contactInfo.order.swiggy}
                            className="px-8 py-[6px] text-base text-black bg-gradient-to-r from-orange-500 to-yellow-400 dark:from-orange-600 dark:to-yellow-500 border rounded-xl">
                            Swiggy
                        </Link>
                        <Link href={contactInfo.order.zomato}
                            className="px-8 py-[6px] text-base text-white bg-gradient-to-r from-red-500 to-red-700 dark:from-red-600 dark:to-red-800 border rounded-xl">
                            Zomato
                        </Link>
                    </ModalFooter>
                </ModalBody>
            </Modal>
    )
}
