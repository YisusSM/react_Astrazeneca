
import { PacmanLoader } from 'react-spinners';

function LoadingScreen() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <PacmanLoader color={'#123abc'} loading={true} />
            <p class="text-center my-4">Redirigiendo al Login</p>

        </div>
    );
}

export default LoadingScreen;
