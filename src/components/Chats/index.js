import React, { Component, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBAvatar,
  MDBBadge,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import "./index.scss";

const friends = [
  {
    name: "John Doe",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-8",
    message: "Hello, Are you there?",
    when: "Just now",
    toRespond: 0,
    seen: false,
    active: false,
  },
  {
    name: "Danny Smith",
    message: "Lorem ipsum dolor sit",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1",
    when: "5 min ago",
    toRespond: 0,
    seen: false,
    active: false,
  },
  {
    name: "Alex Steward",
    message: "Lorem ipsum dolor sit",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-2",
    when: "Yesterday",
    toRespond: 0,
    seen: false,
    active: false,
  },
  {
    name: "Ashley Olsen",
    message: "Lorem ipsum dolor sit",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3",
    when: "Yesterday",
    toRespond: 0,
    seen: false,
    active: false,
  },
  {
    name: "Kate Moss",
    message: "Lorem ipsum dolor sit",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-4",
    when: "Yesterday",
    toRespond: 0,
    seen: false,
    active: false,
  },
  {
    name: "Lara Croft",
    message: "Lorem ipsum dolor sit",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5",
    when: "Yesterday",
    toRespond: 0,
    seen: false,
    active: false,
  },
  {
    name: "Brad Pitt",
    message: "Lorem ipsum dolor sit",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
    when: "5 min ago",
    toRespond: 0,
    seen: false,
    active: false,
  },
];
const messages = [
  {
    author: "Brad Pitt",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
    when: "12 mins ago",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua",
  },
  {
    author: "Lara Croft",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5",
    when: "13 mins ago",
    message:
      " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    author: "Brad Pitt",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
    when: "14 mins ago",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
  },
];

function ChatPage() {
  const [isViews, setIsViews] = useState(false);
  const [selectIndex, setSelectIndex] = useState(-1);

  const hundleClick = (item) => {
    setIsViews(item == selectIndex ? !isViews : true);
    setSelectIndex(item);
  };

  return (
    <MDBCardBody>
      <MDBRow className="px-lg-2 px-2">
        <MDBCol md="12" xl="12" className="px-0 mb-2 mb-md-0">
          <div className="white z-depth-1 p-3">
            <div className="form-group basic-textarea my-dwad-ad">
              <textarea
                className="form-control pl-2 my-0"
                id="exampleFormControlTextarea2"
                rows="3"
                placeholder="Type your message here..."
              />
              <MDBBtn
                color="info"
                rounded
                size="sm"
                className="float-right mt-4"
              >
                Send
              </MDBBtn>
            </div>
            <MDBListGroup className="friend-list">
              {friends.map((friend, index) => (
                <Friend
                  key={friend.name}
                  friend={{
                    ...friend,
                    active: isViews && selectIndex == index ? true : false,
                  }}
                  hundleClick={hundleClick}
                  index={index}
                  isViews={isViews}
                  selectIndex={selectIndex}
                />
              ))}
            </MDBListGroup>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBCardBody>
  );
}

const Friend = ({
  friend: { name, avatar, message, when, toRespond, seen, active },
  hundleClick,
  index,
  isViews,
  selectIndex,
  replay,
}) => (
  <>
  
    <MDBListGroupItem
      href="#!"
      className="d-flex justify-content-between p-2 border-light"
      style={{ backgroundColor: active ? "#eeeeee" : "" }}
    >
      <img
        className="chat-img-asadwda"
        src="https://api.time.com/wp-content/uploads/2017/12/joey-degrandis-hsam-memory.jpg"
        alt="Girl in a jacket"
        width="500"
        height="600"
      ></img>
      <div style={{ fontSize: "0.95rem", width: "70%" }}>
        <strong>{name}</strong>
        <p className="text-muted">{message}</p>
        <span onClick={() => hundleClick(index)}>views</span>
      </div>
      <div>
        <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>
          {when}
        </p>
        
          <span className="text-muted float-right" onClick={() => hundleClick(index)}>
            <MDBIcon icon="reply" aria-hidden="true" />
          </span>
      </div>
    </MDBListGroupItem>
    <div
      className={
        isViews && selectIndex == index ? "block-dip-dawaw" : "none-dip-dawdadw"
      }
    >
      <MDBListGroup className="friend-list friend-list-awdjonwkao">
              <div className="form-group basic-textarea my-dwad-ad">
                <textarea
                  className="form-control pl-2 my-0"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  placeholder="Type your message here..."
                />
                <MDBBtn
                  color="info"
                  rounded
                  size="sm"
                  className="float-right mt-4"
                >
                  Send
                </MDBBtn>
              </div>
        {friends.map((friend) => (
            <Friend2 key={friend.name} friend={friend} />
        ))}
      </MDBListGroup>
    </div>
  </>
);

const Friend2 = ({
  friend: { name, avatar, message, when, toRespond, seen, active },
}) => (
  <MDBListGroupItem
    href="#!"
    className="d-flex justify-content-between p-2 border-light"
    style={{ backgroundColor: active ? "#eeeeee" : "" }}
  >
    <div style={{ fontSize: "0.95rem" }}>
      <strong>{name}</strong>
      <p className="text-muted">{message}</p>
    </div>
    <div>
      <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>
        {when}
      </p>
    </div>
  </MDBListGroupItem>
);

const ChatMessage = ({ message: { author, avatar, when, message } }) => (
  <li className="chat-message d-flex justify-content-between mb-4">
    <img
      className="chat-img-asadwda"
      src="https://api.time.com/wp-content/uploads/2017/12/joey-degrandis-hsam-memory.jpg"
      alt="Girl in a jacket"
      width="500"
      height="600"
    ></img>
    <MDBCard>
      <MDBCardBody>
        <div>
          <strong className="primary-font">{author}</strong>
          <small className="pull-right text-muted">
            <i className="far fa-clock" /> {when}
          </small>
        </div>
        <hr />
        <p className="mb-0">{message}</p>
      </MDBCardBody>
    </MDBCard>
  </li>
);

export default ChatPage;
