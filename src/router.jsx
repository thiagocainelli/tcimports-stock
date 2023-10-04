import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ListItems from "./pages/items/ListItems";
import CreateItem from "./pages/items/CreateItem";
import ShowItem from "./pages/items/ShowItem";
import UpdateItem from "./pages/items/UpdateItem";
import ItemsLayout from "./pages/items/ItemsLayout";


const router = createBrowserRouter([{

    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
        { index: true, element: <Home></Home> },
        {
            path: "items",
            element: <ItemsLayout></ItemsLayout>,
            children: [
                { index: true, element: <ListItems></ListItems> },
                { path: "new", element: <CreateItem></CreateItem> },
                { path: ":id", element: <ShowItem></ShowItem> },
                { path: ":id/update", element: <UpdateItem></UpdateItem> },
            ]
        }
    ]
}])

export default router