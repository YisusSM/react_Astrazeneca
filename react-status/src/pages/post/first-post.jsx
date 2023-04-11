import { useEffect } from 'react';
import io from 'socket.io-client';

function App() {
  useEffect(() => {
    const socket = io('http://localhost:3099');

    // Enviar un mensaje de "status" al servidor
    socket.emit('status', '¡Hola, servidor!');

    // Escuchar los mensajes de "status" enviados por el servidor
    socket.on('status', (data) => {
      console.log(`El servidor envió el siguiente mensaje: ${data}`);
    });

    // Cerrar la conexión cuando se desmonte el componente
    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Cliente de Socket.io</div>;
}

export default App;
