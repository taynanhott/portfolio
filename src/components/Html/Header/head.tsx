import { ModeToggle } from "@/components/Resources/ModeToggle";
import { NavigationMenuDemo } from "../../Resources/NavigationMenu/navigation";

export function Head() {
    return (
        <div className="z-20 relative border backdrop-blur-sm flex items-center justify-between py-4 mb-10">
            <div>
                <div className="flex items-center">
                    <a
                        href="https://portfolio-taynanzh.vercel.app/home"
                        target="_self"
                    >
                        <p className="font-bold mr-4 text-xl lg:text-2xl ml-4">Portfólio</p>
                    </a>
                    <NavigationMenuDemo />
                </div>
            </div>
            <div className="flex items-center mr-10">
                <ModeToggle />
            </div>
        </div>
    );
}