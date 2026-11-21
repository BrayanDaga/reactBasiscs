import { createBrowserRouter } from "react-router";
import routes from "./routes";
import Layout from "../components/Layout";
import HomePage from "../views/HomePage";
import TodoPage from "../views/TodoPage";

const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        children: [
            {
                path: routes.home,
                Component: HomePage
            },
             {
                path: routes.todo,
                Component: TodoPage
            }
        ]
    }
]);

export default router;