const serverStore = require("../serverStore");
const friendsUpdate = require("../socketHandlers/updates/friends");
const roomsUpdate = require("./updates/rooms");
const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;

    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId,
    });


    //update pending friends invitation list

    friendsUpdate.updateFriendsPendingInvitation(userDetails.userId);

    //update friend list
    friendsUpdate.updateFriends(userDetails.userId);

    setTimeout(() => {
        roomsUpdate.updateRooms(socket.id);
      }, [500]);
};

module.exports = newConnectionHandler;