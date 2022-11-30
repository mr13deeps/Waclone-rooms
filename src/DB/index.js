const msg1 = {
    text: "I'm Mani",
    sentBy: "Mani",
    timestamp: "1:00 am"
};
const msg2 = {
    text: "I'm Eessh",
    sentBy: "Eessh",
    timestamp: "1:00 am"
};
const msg3 = {
    text: "I study at IIT(ISM) Dhanbad",
    sentBy: "Mani",
    timestamp: "1:01 am"
};
const msg4 = {
    text: "Me too",
    sentBy: "Eessh",
    timestamp: "1:03 am"
};

const room1 = {
    name: "Batch of 2023",
    messages: [msg1, msg2],
    lastMessage: msg3
};
const room2 = {
    name: "Department of Electronics Engineering",
    messages: [msg1, msg2, msg3],
    lastMessage: msg3
};
const room3 = {
    name: "Students of IIT(ISM) Dhanbad",
    messages: [msg1, msg2, msg3, msg4],
    lastMessage: msg4
};

const DB = {
    rooms: [room1, room2, room3]
};

export default DB;
