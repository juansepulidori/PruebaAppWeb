import { useEffect, useRef, useState } from "react";
import "../App.css";
import { Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

export default function Inicio() {
    const [message, setMessage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate()

    const onClickNavigate = () => {
        navigate("/componentes")
    }

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
    };

    const handleMessage = (msg: string) => {
        try {
            window.ReactNativeWebView.postMessage(msg);
        } catch (error) {
            console.log(error);
        }
    };

    const [imageURL, setImageURL] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImageURL(imageURL);
        }
    };

    const handleButtonSelectImage = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="App">
            <header className="App-header">
                <input
                    type="file"
                    className="Input-file"
                    onChange={handleImageUpload}
                    ref={fileInputRef}
                />
                <ButtonSelectImage
                    variant="contained"
                    onClick={() => {
                        handleMessage("requestCameraPermission");
                        handleButtonSelectImage();
                    }}
                    className="Button-select-image"
                >
                    Seleccionar Imagen
                </ButtonSelectImage>
                {imageURL && (
                    <img
                        src={imageURL}
                        alt="Imagen seleccionada"
                        width={200}
                        height={300}
                    />
                )}
                <ButtonViewMessage
                    variant="contained"
                    onClick={() => handleMessage("requesrMessage")}
                >
                    Ver Mensaje desde la APP Nativa
                </ButtonViewMessage>
                <ButtonReadQR
                    variant="contained"
                    onClick={() => handleMessage("readQR")}
                >
                    Leer QR
                </ButtonReadQR>
                {message && <p>{message}</p>}
                <ButtonNavigate onClick={() => onClickNavigate()}>Componentes ➡</ButtonNavigate>
            </header>
        </div>
    );
}

const ButtonSelectImage = styled(Button)(({ theme }) => ({
    marginBottom: 30,
}));
const ButtonViewMessage = styled(Button)(({ theme }) => ({
    marginBottom: 30,
}));
const ButtonReadQR = styled(Button)(({ theme }) => ({
    marginBottom: 30,
}));
const ButtonNavigate = styled(Button)(({ theme }) => ({
    marginBottom: 30,
    backgroundColor: "green",
    color: "white"
}));
