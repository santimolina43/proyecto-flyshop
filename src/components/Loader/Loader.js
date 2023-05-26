
import './Loader.scss';
import Spinner from 'react-bootstrap/Spinner';
import { useContext } from 'react';
import { GeneralContext } from '../../context/GeneralContext';

export const Loader = () => {

    const {fijarFooter} = useContext(GeneralContext);
    fijarFooter()

    return (
        <div className='loader'>
            <Spinner animation="border" variant="primary" />
        </div>
    )
}