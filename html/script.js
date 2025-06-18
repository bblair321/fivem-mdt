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

document.getElementById('search-btn').addEventListener('click', function () {
  const query = document.getElementById('search-input').value;

  fetch(`https://${GetParentResourceName()}/searchPlayer`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(data => {
      const resultsDiv = document.getElementById('search-results');
      resultsDiv.innerHTML = '';

      if (data.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
      }

      data.forEach(player => {
        const p = document.createElement('p');
        p.textContent = `ID: ${player.id} | Name: ${player.firstname} ${player.lastname}`;
        resultsDiv.appendChild(p);
      });
    });
});