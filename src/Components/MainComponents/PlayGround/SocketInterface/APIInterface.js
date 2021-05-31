import socketIoClient from 'socket.io-client';

let createSocket= () => {
    let socketObj= socketIoClient(process.env.REACT_APP_SERVER_URL);
    return socketObj;
}

let joinRoom= (socketObj, roomId)=>{
    socketObj.emit("joinRoom", roomId);
}

let addListener= (socketObj, eventName, callbackFn)=>{
    socketObj.on(eventName, callbackFn);
}

let emitEvent= (socketObj, eventName, info)=>{
    console.log("grg");
    socketObj.emit(eventName, info);
}

export let api={
    createSocket,
    joinRoom,
    addListener,
    emitEvent
}