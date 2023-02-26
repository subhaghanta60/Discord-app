import React from "react";
import {styled} from "@mui/system";
import FriendListItem from "./FriendListItem";
import { connect } from "react-redux";

// const DUMMY_FRIENDS = [
//     {
//         id:1,
//         username: "Subha",
//         isOnline: true,
//     },
//     {
//         id:2,
//         username: "Raktim",
//         isOnline: false,
//     },
//     {
//         id:3,
//         username: "Sourav",
//         isOnline: false,
//     },



// ];

const MainContainer = styled("div") ({
    flesGrow:1,
    width: "100%"
});

const checkOnlineUsers = (friends =[], onlineUsers = []) => {
    friends.forEach((f) => {
        const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
        f.isOnline = isUserOnline ? true : false;
    });
    return friends;
};

const FriendList = ({friends, onlineUsers}) => {
    return <MainContainer>
            {checkOnlineUsers(friends, onlineUsers).map(f => (
                <FriendListItem
                     username={f.username}
                     id={f.id}
                     key={f.id}
                     isOnline = {f.isOnline} 
                 
                />
            ))}
        </MainContainer>
    

};
const mapStoreStateToProps = ({friends}) => {
    return {
        ...friends,
    }

}

export default connect(mapStoreStateToProps)(FriendList);