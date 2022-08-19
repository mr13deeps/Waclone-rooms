const msg1 = {
    text: "I'm Hakesh",
    sentBy: "Hakesh",
    timestamp: "1:00 am"
};
const msg2 = {
    text: "I'm gay",
    sentBy: "Gay",
    timestamp: "1:00 am"
};
const msg3 = {
    text: "so many premiums",
    sentBy: "Hakesh",
    timestamp: "1:01 am"
};
const msg4 = {
    text: "want some?",
    sentBy: "Hakesh",
    timestamp: "1:03 am"
};

const room1 = {
    name: "Asthithvav Room",
    messages: [msg1, msg2],
    lastMessage: msg3
};
const room2 = {
    name: "Hakesh Premium Room",
    messages: [msg1, msg2, msg3],
    lastMessage: msg3
};
const room3 = {
    name: "Hakesh Premium Pack Room",
    messages: [msg1, msg2, msg3, msg4],
    lastMessage: msg4
};

const DB = {
    rooms: [room1, room2, room3]
};

export default DB;