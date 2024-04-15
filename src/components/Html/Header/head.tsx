import { ModeToggle } from "@/components/Resources/ModeToggle";
import Link from 'next/link'
import { NavigationMenuDemo } from "../../Resources/NavigationMenu/navigation";

export function Head() {
    return (
        <div className="z-20 bg-gray-900 relative flex items-center justify-between px-6 py-4 mb-10">
            <div>
                <div className="flex items-center">
                    <Link
                        href="/home"
                    >
                        <p className="font-bold text-white mr-4 text-2xl ml-4">Plataforma de Testes</p>
                    </Link>
                    <NavigationMenuDemo />
                </div>
            </div>
            <div className="flex items-center">
                <ModeToggle />
            </div>
        </div>
    );
}