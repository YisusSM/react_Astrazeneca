
import { PacmanLoader } from 'react-spinners';

function LoadingScreen() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <PacmanLoader color={'#123abc'} loading={true} />
        </div>
    );
}

export default LoadingScreen;
