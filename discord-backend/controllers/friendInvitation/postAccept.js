const FriendInvitation = require("../../models/friendInvitation");
const User = require("../../models/user");
const friendsUpdates = require("../../socketHandlers/updates/friends");

const postAccept = async (req,res) => {
    try {
        const {id} = req.body;

        const invitation = await FriendInvitation.findById(id);

        if(!invitation) {
            return res.status(401).send("Error Occured. Please Try Again");
        }

        const {senderId, receiverId} = invitation;

        //add friends to both users
        const senderUser = await User.findById(senderId);
        senderUser.friends = [...senderUser.friends,receiverId];

        const receiverUser = await User.findById(receiverId);
        receiverUser.friends = [...receiverUser.friends, senderId];

        await senderUser.save();
        await receiverUser.save();

        //delect invitation 
        await FriendInvitation.findByIdAndDelete(id);

        //update list of Friends is the user are online
        friendsUpdates.updateFriendsPendingInvitation(receiverId.toString());
        friendsUpdates.updateFriends(receiverId.toString());
        


        // upddate the list of friends pending invitation
        friendsUpdates.updateFriendsPendingInvitations(receiverId.toString());

        return res.status(200).send ("Friend successfully added");

    } catch(err){
        console.log(err);
        return res.status(500).send("Something Went Wrong. Please try again");
    }
};



module.exports = postAccept;