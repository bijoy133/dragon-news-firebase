import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Category from "../Pages/Category";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path:'',
                    element:<Home></Home>
                },
                {
                    path:'/category/:id',
                    element:<Category></Category>,
                    loader:()=> fetch("/news.json")
                }
            ]

        },
        {
            path: '/auth',
            element:<h2>Authentication</h2>
        },
        {
            path: '/news',
            element:<h2>News Layout</h2>
        },
        {
            path: '/*',
            element:<h2>error</h2>
        },
    ]
)

export default router