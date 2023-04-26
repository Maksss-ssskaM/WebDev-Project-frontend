import React from "react";
import {
  socket,
  WebsocketProvider,
} from "../../common/contexts/WebsocketContext";
import { Index } from "../../components/chat";

const ChatPage = () => {
  return (
    <div>
      <WebsocketProvider value={socket}>
        <div>
          <Index />
        </div>
      </WebsocketProvider>
    </div>
  );
};

export default ChatPage;
