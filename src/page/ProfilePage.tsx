import { GearIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import AOS from "aos";

export default function Profile() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    });
    return (
        <>
            <div
                className="min-h-screen flex items-center justify-center "
                data-aos="fade-in"
                data-aos-delay="1000"
            >
                <h1 className="text-md md:text-4xl font-bold mr-3 ">
                    Still on the way
                </h1>
                <GearIcon
                    width={40}
                    height={40}
                    className="text-blue-400 font-bold animate-spin"
                />
            </div>
        </>
    );
}
