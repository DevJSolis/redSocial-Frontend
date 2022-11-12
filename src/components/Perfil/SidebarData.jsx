import React from "react";
import {ReactComponent as HomeOutlinedIcon} from './icons/Home.svg';
import {ReactComponent as ChatBubbleOutlineOutlinedIcon} from './icons/Chat.svg';
import {ReactComponent as NotificationsNoneOutlinedIcon} from './icons/Notifications.svg';
import {ReactComponent as SettingsOutlinedIcon} from './icons/Settings.svg';
import {ReactComponent as LogoutOutlinedIcon} from './icons/Logout.svg';

export const SidebarData = [
  {
    icon: <HomeOutlinedIcon/>,
    link: "/home",
  },
  {
    icon: <ChatBubbleOutlineOutlinedIcon style={{fontSize: 22 }}/>,
    link: "/chat",
  },
  {
    icon: <NotificationsNoneOutlinedIcon />,
    link: "/notifications",
  },
  {
    icon: <SettingsOutlinedIcon />,
    link: "/settings",
  },
  {
    icon: <LogoutOutlinedIcon />,
    link: "/logout",
  },
];