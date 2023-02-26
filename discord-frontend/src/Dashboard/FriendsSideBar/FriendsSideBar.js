import React from "react";
import {styled} from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import FriendTitle from "./FriendTitle";
import FriendList from "./FriendList/FriendList";
import PendingInvitationList from "./PendingInvitationsList/PendingInvitationsList";

const  MainContainer = styled("div")({
    width: "224px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2F3136",
})

const FriendsSideBar = () => {
    return (
        <MainContainer>
        <AddFriendButton />
        <FriendTitle title="Private Messages" />
        <FriendList />
        <FriendTitle title="Invitations" />
        <PendingInvitationList />

          
        </MainContainer>
    );
};

export default FriendsSideBar;