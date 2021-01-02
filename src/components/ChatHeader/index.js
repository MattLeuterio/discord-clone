import React from 'react';
import './style.css';

import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';


function ChatHeader() {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          Main Room
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />

        <div className="chatHeader__search">
          <input type="text" placeholder="Search" />
          <SearchRoundedIcon />
        </div>

        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
