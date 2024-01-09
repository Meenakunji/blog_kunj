import React, { createContext, useState } from "react";
export const Context = createContext({});
export const Provider = (props) => {

  // web socket for  community 
  const [socket, setSocket] = useState(null);
  const [socketId, setSocketId] = useState("");

  const CommonContext = {
    socket,
    setSocket,
    socketId,
    setSocketId,
  };

 

  return (
    <Context.Provider
      value={{
        socket: socket,
        setSocket: setSocket,
        socketId: socketId,
        setSocketId: setSocketId,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const { Consumer } = Context;

export { Context as CommonContext, Provider as CommonContextProvider } from "./commonContext";

