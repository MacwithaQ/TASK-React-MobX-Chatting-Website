import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Routes } from "react-router-dom";
import roomsStore from "./roomStore";
import axios from "axios";
import { observer } from "mobx-react";

const App = () => {
  useEffect(() => {
    roomsStore.fetchRooms();
  }, []);

  const rooms = roomsStore.rooms;

  const updateRoom = async (updatedRoom) => {
    try {
      const response = await axios.put(
        `https://coded-task-axios-be.herokuapp.com/rooms/${updatedRoom.id}`,
        updatedRoom
      );
      let tempRooms = rooms.map((room) =>
        room.id === updatedRoom.id ? response.data : room
      );
      // setRooms(tempRooms);
    } catch (error) {
      console.log(error);
    }
  };

  const createMsg = async (roomId, msg) => {
    try {
      const response = await axios.post(
        `https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}`,
        msg
      );
      let tempRooms = rooms.map((room) =>
        room.id === roomId
          ? { ...room, messages: [...room.messages, response.data] }
          : room
      );
      console.log(tempRooms);
      // setRooms(tempRooms);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="__main">
      <div className="main__chatbody">
        <center>
          <Routes>
            <Route
              path="/room/:roomSlug"
              element={<ChatRoom rooms={rooms} createMsg={createMsg} />}
            />
            <Route
              path="/"
              element={<ChatRoomsList rooms={rooms} updateRoom={updateRoom} />}
            />
          </Routes>
        </center>
      </div>
    </div>
  );
};

export default observer(App);
