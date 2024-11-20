import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
    className,
    children
}) => {
    return (
        (<div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto ",
                className
            )}>
            {children}
        </div>)
    );
};

export const BentoGridItem = ({
    className,
    data
}) => {
    return (
        (<div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}>
            <Image
                src={data.src}
                alt={data.title}
                width={400}
                height={400}
                className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
            />
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="flex items-center justify-start">
                    <Image
                        height="100"
                        width="100"
                        alt="Avatar"
                        src={data.avatar}
                        className="h-7 w-7 rounded-full border-2 object-cover"
                    />
                    <span
                        className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
                        {data.name}
                    </span>
                </div>
                <div
                    className="font-sans text-lg font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {data.title}
                </div>
                <div
                    className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
                    {data.description}
                </div>
            </div>
        </div>)
    );
};
