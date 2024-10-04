import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonProps } from "../../types";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faPlus, faSignOutAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

const Button: React.FC<ButtonProps> = React.memo(
    ({ text, className = "", onClick, type }) => {
        const buttonIcon: Record<string, IconDefinition> = {
            edit: faEdit,
            delete: faTrashAlt,
            add: faPlus,
            logout: faSignOutAlt,
            cancel: faTimes,
            submit: faCheck,
        };

        const buttonColor: Record<string, string> = {
            edit: "bg-sky-500 hover:bg-sky-500/80",
            delete: "bg-red-500 hover:bg-red-500/80",
            add: "bg-blue-500 hover:bg-blue-500/80",
            logout: "bg-accent-secondary hover:bg-accent-secondary/80",
            submit: "bg-green-500 hover:bg-green-500/80",
        };

        const icon = type ? buttonIcon[type] : undefined;
        const color = type ? buttonColor[type] : undefined;

        return (
            <button
                aria-label={text}
                type={type === "submit"|| type === "add" ? "submit" : "button"}
                className={`flex cursor-pointer justify-center items-center p-2 rounded-md focus:outline-none border-none text-white ${className} ${color} h-10 sm:min-w-28`}
                onClick={onClick}
            >
                {icon && <FontAwesomeIcon icon={icon} className="p-2 md:mr-2 md:p-0" />}{" "}
                <span className="text-sm md:text-base hidden md:block">{text}</span>{" "}
            </button>
        );
    },
);

export default Button;
