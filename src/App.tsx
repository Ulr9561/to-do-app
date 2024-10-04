import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectIsLoading, setIsLoading } from "./app/slices/turboLoaderslice";
import { Navigate, useNavigate } from "react-router-dom";
import { IUser } from "./types";
import { selectUser, setUser } from "./app/slices/userSlice";
import React from "react";

function App() {
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectIsLoading);
    const user = useAppSelector(selectUser);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !username || !email) {
            console.log("Please provide all required fields");
            return;
        }
        const newUser: IUser = {
            name,
            username,
            email,
        };
        dispatch(setIsLoading(true));
        setTimeout(() => {
            dispatch(setUser(newUser));
            dispatch(setIsLoading(false));
            navigate("/home");
        }, 3000);
    };


    return (
        <>
            <div
                id="loading-overlay"
                className={`${isLoading ? "fixed" : "hidden"} inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50`}
            >
                <div className="loader"></div>
                <p className="text-white text-2xl">Loading...</p>
            </div>
            <div className="bg-bg-primary w-full h-screen flex flex-col items-center justify-center p-4 ">
                <h1 className="text-center p-4 text-3xl md:text-4xl text-text-primary">
                    Welcome to this TO-DO App
                </h1>
                <p className="text-center text-lg md:text-2xl text-text-secondary mt-2">
                    First you will need to provide your name and email
                </p>
                <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col items-center space-y-5 p-6 md:p-10 w-full"
                >
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 h-12 border-none rounded-md p-3 text-lg"
                    />
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 h-12 border-none rounded-md p-3 text-lg"
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 h-12 border-none rounded-md p-3 text-lg"
                    />
                    <input
                        disabled={!name || !username || !email}
                        type="submit"
                        value="Submit"
                        className="bg-accent-primary w-full sm:w-3/4 md:w-2/3 lg:w-1/3 h-12 flex items-center justify-center border-none rounded-md cursor-pointer hover:bg-accent-primary/80 text-lg"
                    />
                </form>
            </div>
        </>
    );
}

export default App;
