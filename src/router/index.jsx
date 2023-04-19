import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CountryPage from "../pages/CountryPage";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../Layout/LayoutPublic";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    { path: '/', element: <HomePage /> },
                    { path: '/:name', element: <CountryPage /> },
                ]
            }
        ]
    }
]);