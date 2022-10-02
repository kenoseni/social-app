import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { unfollow, follow } from "./api-user.js";

export const FollowButton = ({ onButtonClick, following }) => {
  const handleFollow = () => {
    onButtonClick(follow);
  };
  const handleUnfollow = () => {
    onButtonClick(unfollow);
  };

  return (
    <>
      {following ? (
        <Button variant="contained" color="secondary" onClick={handleUnfollow}>
          Unfollow
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={handleFollow}>
          Follow
        </Button>
      )}
    </>
  );
};

FollowButton.propTypes = {
  following: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
