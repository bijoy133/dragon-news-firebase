import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";

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
                    loader:()=> fetch("/news.json"),
                    hydrateFallbackElement:<Loading></Loading>
                }
            ]

        },
        {
            path: '/auth',
            element:<AuthLayout></AuthLayout>,
            children:[
                {
                    path:'/auth/login',
                    element:<Login></Login>
                },
                {
                    path:'/auth/register',
                    element:<Register></Register>,
                }
            ]
        },
        {
            path: '/news-details/:id',
            element:<PrivateRoute>
                <NewsDetails></NewsDetails>
                </PrivateRoute>,
            loader:()=> fetch("/news.json"),
            hydrateFallbackElement:<Loading></Loading>
        },
        {
            path: '/*',
            element:<h2>error</h2>
        },
    ]
)

export default router