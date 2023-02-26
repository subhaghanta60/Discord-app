import React from "react";
import {styled} from "@mui/system";
import PendingInvitationsListItem from "./PendingInvitationsListItem";
import {connect} from "react-redux";

// const DUMMY_INVITATIONS = [
//     {
//         _id:"1",
//         senderId: {
//             username: "Rock",
//             mail: "dummy1@gmail.com"
//         }
//     },
//     {
//         _id:"2",
//         senderId: {
//             username: "Legend",
//             mail: "dummy2@gmail.com"
//         }
//     },
//     {
//         _id:"3",
//         senderId: {
//             username: "Sub",
//             mail: "dummy3@gmail.com"
//         }
//     }
// ];

const MainContainer = styled("div")({
    width: "100%",
    height: "22%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
});

const PendingInvitationList = ({pendingFriendsInvitations}) => {
    return (
        <MainContainer>
            {pendingFriendsInvitations.map(invitation => (
                <PendingInvitationsListItem 

                    key={invitation._id}
                    id={invitation._id}
                    username={invitation.senderId.username}
                    mail={invitation.senderId.mail}
                />
            ))}
        </MainContainer>
    );
};

const mapStoreStateToProps = ({ friends}) => {
  return {
    ...friends,
  }
};

export default connect(mapStoreStateToProps)(PendingInvitationList);