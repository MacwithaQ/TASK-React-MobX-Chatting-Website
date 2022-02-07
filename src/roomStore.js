import { makeObservable, observable, action } from "mobx";
import axios from "axios";
class RoomsStore {
  // Links the data file to the mobx class
  rooms = [];

  fetchRooms = async () => {
    try {
      const response = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      this.rooms = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  createRoom = async (newRoom) => {
    try {
      const response = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        newRoom
      );
      this.rooms = [...this.rooms, response.data];
      console.log(this.rooms);
    } catch (error) {
      console.log(error);
    }
  };

  deleteRoom = async (id) => {
    try {
      const response = await axios.delete(
        `https://coded-task-axios-be.herokuapp.com/rooms/${id}`
      );
      let tempRooms = this.rooms.filter((room) => room.id !== id);
      this.rooms = tempRooms;
    } catch (error) {
      console.log(error);
    }
  };

  // Makes the items observable for the browser to rerender on changes
  constructor() {
    makeObservable(this, {
      rooms: observable,
      fetchRooms: action,
      createRoom: action,
      deleteRoom: action,
    });
  }
}

const roomsStore = new RoomsStore();
export default roomsStore;
