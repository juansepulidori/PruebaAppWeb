import { useEffect, useState } from "react";
import "./App.css";

//Interface de comunicación
declare global {
    interface Window {
        //Enviar mensajes
        ReactNativeWebView: {
            postMessage(message: string): void;
        };
        //Funciones para recibir mensajes
        readMessage?(str: string): void;
    }
}

function App() {
    
    const [message, setMessage] = useState<string|null>(null);

    useEffect(() => {
        //Vinculación de todas las funciones que requieran recibir mensajes de la app nativa
        window.readMessage = readMessage;
        //opcional
        return () => {
            delete window.readMessage;
        };
    }, []);
    
    const readMessage = (str: string) => {
        setMessage(str);
    }

    const handleRequestCameraPermission = () => {
        window.ReactNativeWebView.postMessage("requestCameraPermission");
    };

    const handleMessage = () => {
        window.ReactNativeWebView.postMessage("requesrMessage");
    }

    const [imageURL, setImageURL] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImageURL(imageURL);
        }
    };


    return (
        <div className="App">
            <header className="App-header">
                <input type="file" onChange={handleImageUpload} onClick={handleRequestCameraPermission}/>
                {imageURL && <img src={imageURL} alt="Imagen seleccionada" width={200} height={300}/>}
                <button onClick={handleMessage}>Ver Mensaje desde la APP Nativa</button>
                {message && <p>{message}</p>}
            </header>
        </div>
    );
}

export default App;
