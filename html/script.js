// html/script.js

window.addEventListener('message', function (event) {
  const data = event.data;

  if (data.type === 'open') {
    document.getElementById('mdt-container').classList.remove('hidden');
  } else if (data.type === 'close') {
    document.getElementById('mdt-container').classList.add('hidden');
  }
});

document.getElementById('close-btn').addEventListener('click', function () {
  fetch(`https://${GetParentResourceName()}/close`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({})
  });
});