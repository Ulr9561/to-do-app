import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import {
    selectColor,
    selectIsLoading,
} from "../../app/slices/turboLoaderslice";

const TurboLoader: React.FC = () => {
    const isLoading = useAppSelector(selectIsLoading);
    const [turbo, setTurbo] = useState(0);
    const color = useAppSelector(selectColor) || "#FAFAFA";

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isLoading) {
            if (turbo < 75) {
                timer = setInterval(() => {
                    setTurbo((prev) => Math.min(prev + 5, 75));
                }, 50);
            } else if (turbo < 95) {
                timer = setInterval(() => {
                    setTurbo((prev) => Math.min(prev + 1, 95));
                }, 100);
            }
        } else {
            if (turbo > 0 && turbo < 100) {
                timer = setInterval(() => {
                    setTurbo((prev) => Math.min(prev + 5, 100));
                }, 50);
            } else if (turbo === 100) {

                timer = setTimeout(() => {
                    setTurbo(0);
                }, 300);
            }
        }

        return () => {
            clearInterval(timer);
            clearTimeout(timer);
        };
    }, [isLoading, turbo]);

    if (turbo === 0) {
        return null;
    }

    return (
        <div
            className={`z-50 w-full h-[3px] bg-transparent overflow-hidden fixed ${
                turbo > 0 ? "auto" : "hidden"
            }`}
        >
            <div
                className="absolute top-0 left-0 h-full"
                style={{
                    width: `${turbo}%`,
                    backgroundColor: color,
                    transition: "width 0.1s ease-out",
                }}
            ></div>
        </div>
    );
};

export default TurboLoader;
