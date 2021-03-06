import { Button, IconButton } from "@material-ui/core";
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
  const { client, setActiveChannel } = useChatContext();
  const [selectedUsers, setSelectedUsers] = useState([client.userID || ""]);
  const [channelName, setChannelName] = useState("");

  const createChannel = async (e) => {
    e.preventDefault();

    try {
      const newChannel = await client.channel(createType, channelName, {
        name: channelName,
        members: selectedUsers,
      });

      await newChannel.watch();

      setChannelName("");
      setIsCreating(false);
      setSelectedUsers([client.userID]);
      setActiveChannel(newChannel);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-channel__container">
      <div className="create-channel__header">
        <p>
          {createType === "team"
            ? "Create a New Channel"
            : "Send a Direct Message"}
        </p>
        <IconButton
          onClick={() => {
            if (setIsCreating) setIsCreating(false);
          }}
        >
          <Close fontSize="small" />
        </IconButton>
      </div>
      {createType === "team" && (
        <ChannelNameInput
          channelName={channelName}
          setChannelName={setChannelName}
        />
      )}
      <UserList setSelectedUsers={setSelectedUsers} />
      <div className="create-channel__button-wrapper">
        <Button variant="contained" onClick={createChannel}>
          {createType === "team" ? "Create Channel" : "Create Message Group"}
        </Button>
      </div>
    </div>
  );
};

export default CreateChannel;
