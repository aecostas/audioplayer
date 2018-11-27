# Audio player
The goal of this project is to build a system to list and reproduce songs.
These songs should be stored at the server side or retrieved from the Internet.

The repository includes both, the client and backend side.

Next, some design considerations for both sides are listed. Some are basic
features, to be included in the first prototype, whereas others are advanced
ones, to consider in future versions.

## Web backend
The backend is responsible for retrieving detailed information about songs and
serve the media files. Moreover, some real time information may be gathered from
the client side to improve the user experience and to make monitoring easier.
From an implementation point of view it a `expressjs` application.

To do so, some modules are considered:
* `Index`. This is the main module, responsible for receiving REST requests
from the client side. These requests will ask for the list of songs, maybe with
some kind of query, also ask for detailed information of a specific song.
* `Repositories`. A repository is a module responsible for retrieving metadadata
of one source. The system may have as many repositories as desired, for instance,
one for Last.fm, another one for local audio files, etc. Whenever a client asks
for information to the Index modules, this one will delegate the responsability
on the available repositories. From a implementation point of view, each
repository is a `expressjs middleware`.
* `Storage`. This module reads the file from sources, which may be both dist or
remote storage, and creates an `nodejs stream`. This `stream` will be piped to
the `http response object`

## Real time backend
* `EventManager`. This module is in charged of maintaining a websocket
connection with the clients for asynchronous communications. The 'app' will send
some events, like "pause song". Taking advantage of bidirectional capabilities
of websockes, the server will send back some values to the clients, like some
real time information about the general status of the system, such us the
number of connected users, or the number of users playing the current song.
It would be possible also to use this channel to broadcast some messages, like
announcements.
* `Redis` is a key-value in-memory storage. The system will use it to store real
time values, like number of connected users or basis statistics about current
playings. This information is updated continuously so an efficient way of storin
g it is required. Moreover, Redis fits fine for this task, since it has ad-hoc
method to work with counter, that allow to increment, decrement, expirations
times, etc. The use of `Redis` is also interesting to scale out the system,
because information related to user sessions may be storaged here, so new
process may read it.
* `Message broker`. `Redis` is great to keep updated values, but some applications
needs the sequence of changes. This is interesting, for instance,
for analytics, where the evolution of values provides rich information. It is
out of the scope of the initial prototype, but it would be great to insert all
the events in a message broker, with persistent capabilities, like Apache Kafka,
and to have a microservice that reads from it and mantains the values in `Redis`
 updated.
