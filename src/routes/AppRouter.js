import {BrowserRouter} from "react-router-dom";
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';


export const AppRouter = () => {

    const {user} = useContext(LoginContext);

    return (
        <BrowserRouter>
          {
            user.logged
              ?   <PrivateRoutes/>
              :   <PublicRoutes/>
          }
        </BrowserRouter>
    )
}
