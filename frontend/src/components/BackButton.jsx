import { useNavigate } from 'react-router-dom';
import '../sass/Backbutton.scss'

const BackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button onClick={handleGoBack} className='backButton'></button>
    );
};

export default BackButton;