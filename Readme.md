# Diet + Vue + Socket.io
A tiny example on how to use Diet.js as the Router/Static File Handler, Vue for Dynamic Data Binding and Socket.io for Real-time Data Streaming.

![Diet.js + Vue.js + Socket.io](http://g.recordit.co/szNjnYjmo1.gif)


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

The MIT License (MIT)

Copyright (c) 2016 Ádám Halász

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
