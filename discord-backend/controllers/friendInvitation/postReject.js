const FriendInvitation = require("../../models/friendInvitation");
const friendsUpdates = require("../../socketHandlers/updates/friends");


const postReject = async (req,res) => {
    try {
        const {id} = req.body;
        const { userId } =req.user;
        
        //remove that invitation from friend invitation collection
        const invitationExists = await FriendInvitation.exists({_id: id});

        if (invitationExists) {
            await FriendInvitation.findByIdAndDelete(id);
        }
        //update pending invitation

        friendsUpdates.updateFriendsPendingInvitation(userId);
        return res.status(200).send("Invitation Successfully Rejected");

    } catch (err) {
        console.log(err);
        return res.status(500).send("Something Went Wrong Please try again");
    }
    return res.send("Reject handler!");
};



module.exports = postReject;