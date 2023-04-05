import React from 'react';
import {socket, WebsocketContext, WebsocketProvider} from "../../common/contexts/WebsocketContext";
import {Websocket} from "../../components/websocket/Websocket";

const Home = () => {
    return (
        <WebsocketProvider value={socket}>
            <div>
                <h1>This is home page</h1>
                <Websocket/>
            </div>
        </WebsocketProvider>
    );
};

export default Home;