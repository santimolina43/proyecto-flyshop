import {Routes, Route, Navigate} from "react-router-dom";
import { LoginScreen } from '../components/LoginScreen/LoginScreen';

export const PublicRoutes = () => {

    return (
        <Routes>
            <Route path='/inicio' element={ <LoginScreen/> }/>
            <Route path='*' element={ <Navigate to={"/inicio"}/> }/> 
        </Routes>
    )
} 