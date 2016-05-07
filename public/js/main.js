console.log('sous vide');

//
// Socket io temperature monitor
//
var socket = io();
socket.on('hi', function(data) {
  console.log('got welcome message');
})

socket.on('temp', function(temp) {
  document.querySelector('#t').innerHTML = temp.toFixed(1);
})


//
// Temperature settings
//
var set_temp = 140;
if (!localStorage.temp) {
  localStorage.temp = set_temp;
} else {
  set_temp = parseInt(localStorage.temp);
}
document.querySelector('#temp').value = set_temp;
document.querySelector('#update').addEventListener('click', function() {
    socket.emit('update', document.querySelector('#temp').value);
})
