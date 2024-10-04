import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <App />
    },
    {
        path: "/",
        element: <Home />,
    }
]);

export default router;
