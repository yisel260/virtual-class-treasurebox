import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Classes from "./pages/Classes"
import Prizes from "./pages/Prizes"
import  TeacherHome from "./pages/TeacherHome";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    index: true
                },
                {
                    path: "/ManageClasses",
                    element: <Classes/>
                },
                {
                    path: "/MaganePrizes",
                    element: <Prizes/>
                },
                // {
                //     path: "/profile",
                //     element: <ProtectedRoute><Profile/></ProtectedRoute>
                // },
                // {
                //     path: "/editprofile",
                //     element: <ProtectedRoute><EditProfile/></ProtectedRoute>
                // },
                // {
                //     path: "/admin",
                //     element: <ProtectedRoute><Admin/></ProtectedRoute>
                // },
                // {
                //     element: <ProtectedRoute role="user"/>,
                //     children:[
                //         {
                //             path: "/profile",
                //             element: <Profile/>
                //         },
                //         {
                //             path: "/editprofile",
                //             element: <EditProfile/>
                //         },
                //     ]
                // },
                // {
                //     element: <ProtectedRoute role="admin"/>,
                //     children:[
                //         {
                //             path: "/admin",
                //             element: <Admin/>
                //         }
                //     ]
                // },
                {
                    path:"*",
                    element:<p>404 Error - Nothing here...</p>
                }
            ]
        }
    ]
);

export default router