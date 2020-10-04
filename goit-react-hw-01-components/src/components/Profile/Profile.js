import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  Description,
  List,
  Img,
  Name,
  Item,
  Quantity,
} from "./styles";

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <>
      <Wrapper>
        <Description>
          <Img src={avatar} alt={name} width="100" height="100" />
          <Name>{name}</Name>
          <p>{tag}</p>
          <p>{location}</p>
        </Description>
        <List>
          <Item>
            <span>Followers</span>
            <Quantity>{stats.followers}</Quantity>
          </Item>
          <Item>
            <span>Views</span>
            <Quantity>{stats.views}</Quantity>
          </Item>
          <Item>
            <span>Likes</span>
            <Quantity>{stats.likes}</Quantity>
          </Item>
        </List>
      </Wrapper>
    </>
  );
}

Profile.defaultProps = {
  tag: "No tagname",
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
