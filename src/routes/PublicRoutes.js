import {Routes, Route, Navigate} from "react-router-dom";
import { LoginScreen } from '../components/LoginScreen/LoginScreen';
import { RegisterScreen } from "../components/RegisterScreen/RegisterScreen";

export const PublicRoutes = () => {

    return (
        <Routes>
            <Route path='/inicio' element={ <LoginScreen/> }/>
            <Route path='/registrarme' element={ <RegisterScreen/> }/>
            <Route path='*' element={ <Navigate to={"/inicio"}/> }/> 
        </Routes>
    )
} 