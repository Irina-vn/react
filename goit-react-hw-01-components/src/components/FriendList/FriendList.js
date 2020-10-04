import React from "react";
import PropTypes, { bool } from "prop-types";
import { List, Item, Span, Img, Name } from "./styles";

export default function FriendList({ friends }) {
  return (
    <>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <Item key={id}>
              <Span online={isOnline} />
              <Img src={avatar} alt="" width="48" />
              <Name>{name}</Name>
            </Item>
          );
        })}
      </List>
    </>
  );
}

FriendList.defaultProps = {
  id: "",
  isOnline: bool,
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  name: "",
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
