var CHAT_URI = 'https://js-bootcamp-room1-default-rtdb.firebaseio.com/posts.json';

function toArray(obj) { return Object.keys(obj).map(function (key) {return obj[key]}) }

function serialize(obj) { return JSON.stringify(obj); }