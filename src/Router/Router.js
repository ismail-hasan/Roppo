import { createBrowserRouter } from "react-router-dom";
import Student from "../Components/Student/Student";
import Home from "../Components/Home/Home";
import Layout from "../Layout/Layout"
import Success from "../Components/Success/Success";
import Gallery from "../Components/Gallery/Gallery";


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
                element: <Student></Student>
            },
            {
                path: "/success",
                element: <Success></Success>
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            }
        ]
    }
])

export default router