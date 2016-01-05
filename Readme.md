# Diet + Vue + Socket.io
A tiny example on how to use Diet.js as the Router/Static File Handler, Vue for Dynamic Data Binding and Socket.io for Real-time Data Dinding.

# Features
- Updates a counter every second and streams the new value to all connected user agents with socket.io
- Shares server side data with client side. Uses the ECT template engine to pass the signal ($) `data` values to the Vue Instance
- Listens on Vue Instance Propety updates. When a user changes the input values the new values are saved to a JSON Object on the server and broadcasts the new values to all connected user agents
 
# Usage

### Install Dependencies
```
npm install
```

### Run
```
node index.js
```

### Visit
```
http://localhost:5000/
```