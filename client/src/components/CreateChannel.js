import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";
import { userList } from "./";
import UserList from "./UserList";
import "../styles/CreateChannel.scss";

const ChannelNameInput = ({ channelName = "", setChannelName }) => {
  const handleChange = (e) => {
    e.preventDefault();

    setChannelName(e.target.value);
  };

  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input
        type="text"
        value={channelName}
        onChange={handleChange}
        placeholder="Channel Name (no spaces)"
      />
      <p>Add Members</p>
    </div>
  );
};

const CreateChannel = ({ createType, setIsCreating }) => {
  const [channelName, setChannelName] = useState("");

  return (
    <div className="create-channel__container">
      <div className="create-channel__header">
        <p>
          {createType === "team"
            ? "Create a New Channel"
            : "Send a Direct Message"}
        </p>
        <IconButton>
          <Close setIsCreating={setIsCreating} fontSize="small" />
        </IconButton>
      </div>
      {createType === "team" && (
        <ChannelNameInput
          channelName={channelName}
          setChannelName={setChannelName}
        />
      )}
      <UserList />
    </div>
  );
};

export default CreateChannel;
