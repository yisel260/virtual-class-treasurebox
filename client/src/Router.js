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
                    path: "/ManagePrizes",
                    element: <Prizes/>
                },
                {
                    path:"*",
                    element:<p>404 Error - Nothing here...</p>
                }
            ]
        }
    ]
);

export default router