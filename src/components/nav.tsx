"use client";

import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/lib/hooks/use-scroll";
import clsx from "clsx";

const navItems = ["Products", "Integrations", "Pricing", "Teams", "Resources",];

// const transparentHeaderSegments = new Set(["metatags", "pricing",]);

export default function Nav() {


    const scrolled = useScroll(20);

    const segment = useSelectedLayoutSegment();

    console.log(segment);
    return (
        <div
            className={clsx(`sticky inset-x-0 top-0 z-30 w-full transition-all `, {
                "bg-[#1d2939] ": !scrolled,
                " border-gray-200 bg-white/70":
                    segment,
            })}
        >
            <div className="flex h-16 items-center justify-center w-full ">
                <div className="flex flex-row items-center justify-between gap-2 mr-3">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={20}
                        height={19}
                        className="w-5 h-5"
                    />
                    <h1 className="text-2xl text-white font-bold ">Hypotenuse AI</h1>
                </div>
                <div className="flex flex-row items-center justify-between ">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href='/'
                            className={`rounded-md text-white text-base p-2 m-5 flex justify-center items-center font-medium capitalize ${segment === item ? "text-black" : "text-gray-500"
                                } transition-colors ease-out hover:text-black`}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href='/'
                        className="rounded-md text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black mr-4"
                    >
                        Log in
                    </Link>
                    <Link
                        href='/'
                        className="ml-4 rounded-md border bg-[#223042] px-4 py-1.5 text-sm text-white transition-all hover:opacity-80"
                    >
                        Try it free
                    </Link>
                </div>
            </div>
        </div>
    );
}
