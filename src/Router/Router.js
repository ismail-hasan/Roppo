import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Layout from "../Layout/Layout"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    }
])

export default router