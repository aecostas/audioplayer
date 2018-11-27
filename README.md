# Audio player
The goal of this project is to build a system to list and reproduce songs. These songs should be stored at the server side or retrieved from the Internet.

The repository includes both, the client and backend side.

Next, some design considerations for both sides are listed. Some are basic features, to be included in the first prototype, whereas are advanced one, to consider in future versions.

## Backend
The backend is responsible for retrieving detailed information about songs and serve the media files. Moreover, some real time information may be gathered from the client side to improve the user experience and to make monitoring easier.

To do so, some modules are considered:
* `Index`. This is the main module, responsible for receiving REST requests from the client side. These requests will ask for the list of songs, maybe with some kind of query, also ask for detailed information of a specific song.
* `Repositories`. A repository is a module responsible for retrieving data of one source. The system may have as many repositories as desired, for instance, one for Last.fm, another one for local audio files, etc. Wheneven a client asks for information to the Index modules, this one will delegate the responsability on the available repositories. From a implementation point of view, each repository is a `expressjs middleware`.
* `EventBroker`. This module is in charged of maintaining a websocket connection with the clients for asynchronous communications. The 'app' will send some events, like "pause song" and, from time to time, the server will update some real time information about the general status of the system, like the number of connected users, or the number of users in playing the current song.
* `Redis` is a key-value in-memory storage. This systems will use it to store real time values, like number of connected users or basis statistics about current playings. This information is updated continuously so an efficient way of storing it is required.


## Frontend
