import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelListContainer, ChannelContainer } from "./components";
import "./App.scss";

const apiKey = "c889pcmm5jwc";

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app_wrapper">
      <Chat client={client}>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
