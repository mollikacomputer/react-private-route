import AddService from "../AddService";
import UpdateService from "../UpdateService";

export const PrivateRoute =[
    {path:'/addservice', name:AddService, Component: AddService },
    {path:'/updateservice', name:UpdateService, Component: UpdateService }

]