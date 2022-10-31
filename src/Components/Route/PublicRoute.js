import About from "../About";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";

export const PublicRoute = [
    {path:'/', name:Home, Component: Home },
    {path:'/about', name:About, Component: About },
    {path:'/login', name:Login, Component: Login },
    {path:'/register', name:Register, Component: Register }
]