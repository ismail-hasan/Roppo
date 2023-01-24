import { createBrowserRouter } from "react-router-dom";
import Student from "../Components/Student/Student";
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
                element: <Student></Student>
            }
        ]
    }
])

export default router