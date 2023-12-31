import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";

function Widgets() {
  const navigate = useNavigate();

  const handleSubscription = (e)=>{
    e.preventDefault();
    navigate('/subscribe');
  }
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="subscription-container">
        <h3 className="subscription-heading3">Subscribe to premium</h3>
        <p className="subcription-paragraph">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button className="subscription-button" onClick={handleSubscription}>
          Subscribe
        </button>
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1557187138352861186"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />


      </div>
    </div>
  );
}

export default Widgets;