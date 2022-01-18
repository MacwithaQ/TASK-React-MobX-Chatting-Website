# Chatting website

## First things first:
1. fork [this repo](https://github.com/JoinCODED/Task-react-MobX/)
2. clone 
4. `npm install`
5. `npm start`

## Instructions
1. `npm install mobx mobx-react`
2. Create a file called roomStore in src
3. define the room class and inside create an empty array rooms =[]
4. `import { makeObservable, observable, action } from "mobx";`
5. make a constructor that will make this a store 
6. create a store and export it


## Fetch rooms :
7. move fetchRooms function to the store and modify it (remove setRooms)
8. add fetchRoom as an action in the constructor 
9. in the list component :
    1. `import roomStore from "../roomStore";`
    2. `import { observer } from "mobx-react";`
    3. add useEffect to call fetchRooms
    4.  add observer before component export if it needs too 

## Create a room:
1. move createRoom function to the store 
2. add createRoom as an action in the constructor 
9. in the create room component :
    1. `import roomStore from "../roomStore";`
    2. `import { observer } from "mobx-react";`
    3. call createRoom in the correct place (instead of the old one)
    4.  add observer before component export if it needs too 


## Delete a room :
1. move deleteRoom function to the store 
2. add deleteRoom as an action in the constructor 
9. in the room component :
    1. `import roomStore from "../roomStore";`
    2. `import { observer } from "mobx-react";`
    3. call deleteRoom in the correct place (instead of the old one)
    4.  add observer before component export if it needs too 


## Clean up:
dont forget to clean up the code in App.js and remove room state as you no longer need it !

### Challenge
## Update , Create a msg:
no steps ! its a challenge 

