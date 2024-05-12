const { Server } = require("socket.io");

const io = new Server({ cors: ["http://localhost:19335", "http://localhost:5173", "http://localhost:5174"] });
let onlineUser = [];
io.on("connection", (socket) => {
    console.log("new connection", socket.id)

    //listen to a connection
    socket.on("addNewUser", (userId) => {
        !onlineUser.some(user => user.userId == userId) &&
            onlineUser.push({
                userId,
                socketId: socket.id
            })

        console.log("onlineUser: ", onlineUser)
        io.emit("getOnlineUser", onlineUser)

    })

    socket.on("createdEmployee", (message) => {


        io.emit("getNewEmployee", message)


    })
    socket.on("deletedEmployee", (message) => {


        io.emit("getNewEmployee", message)


    })
    socket.on("editEmployee", (message) => {


        io.emit("getNewEmployee", message)


    })


    socket.on("createdJobHistory", (message) => {


        io.emit("getNewJobHistory", message)


    })
    socket.on("deletedJobHistory", (message) => {


        io.emit("getNewJobHistory", message)


    })
    socket.on("editJobHistory", (message) => {


        io.emit("getNewJobHistory", message)


    })
    socket.on("disconnect", () => {



    })




});

io.listen(8080);