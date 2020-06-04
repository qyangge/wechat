/*
 加入群聊
 */
async function onRoomJoin(room, inviteeList, inviter) {
  const nameList = inviteeList.map(c => c.name()).join(",");
  console.log(
    `Room ${room.topic()} got new member ${nameList}, invited by ${inviter}`
  );
}

module.exports = onRoomJoin;
