import { createBrowserRouter } from "react-router-dom";
import Student from "../Components/Student/Student";
import Home from "../Components/Home/Home";
import Layout from "../Layout/Layout"
import Success from "../Components/Success/Success";
import Gallery from "../Components/Gallery/Gallery";
import Teacher from "../Components/Teacher/Teacher";


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
                path: "/student",
                element: <Student></Student>,
                loader: () => fetch("http://localhost:5000/user")
            },
            {
                path: "/success",
                element: <Success></Success>
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>,
            },
            {
                path: "/teacher",
                element: <Teacher></Teacher>,
                loader: () => fetch("http://localhost:5000/user")

            }
        ]
    }
])

export default router