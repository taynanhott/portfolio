import { ModeToggle } from "@/components/Resources/ModeToggle";
import Link from "next/link";

export function Head() {
    return (
        <div className="fixed top-0 w-full z-20 border shadow-lg backdrop-blur-sm flex items-center justify-center py-4 mb-12 lg:mb-24">
            <Link href="https://taynan.dev" target="_self" className="font-bold text-xl ml-auto pl-20 lg:text-2xl">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-800 relative inline-block">
                    <span className="relative text-white">Portfólio</span>
                </span>
            </Link>
            <div className="flex ml-auto items-center pr-4">
                <ModeToggle />
            </div>
        </div>

    );
}