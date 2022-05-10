import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import Cookies from "universal-cookie";
import { ExitToApp, Group } from "@material-ui/icons";
import "../styles/ChannelListContainer.scss";
import { IconButton } from "@material-ui/core";

const cookies = new Cookies();

const SideBar = ({ logout }) => (
  <div className="channel-list__sidebar">
    <IconButton className="channel-list__icon1">
      <Group />
    </IconButton>
    <div className="channel-list__icon2">
      <div className="icon2__inner">
        <IconButton className="channel-list__icon2" onClick={logout}>
          <ExitToApp />
        </IconButton>
      </div>
    </div>
  </div>
);

const ChatterHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Chatter</p>
  </div>
);

const ChannelListContainer = () => {
  const logout = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("username");
    cookies.remove("fullName");
    cookies.remove("avatarURL");
    cookies.remove("hashedPassword");
    cookies.remove("phoneNumber");

    window.location.reload();
  };

  return (
    <>
      <SideBar logout={logout} />
      <div className="channel-list__list__wrapper">
        <ChatterHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
