// Korzystam z API "wheretheiss".
const url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function setData() {
    // Pobiera dane z adresu URL.
    const response = await fetch(url);

    // Konwertuje dane na format JSON.
    const data = await response.json();

    // Przypisuje wszystkie potrzebne wartości do zmiennej "data".
    const { latitude, longitude, visibility, velocity, name, id } = data;

    // Wyświetla wartości użytkownikowi.
    document.getElementById('latitude').innerText = `${latitude}`;
    document.getElementById('longitude').innerText = `${longitude}`;
    document.getElementById('visibility').innerText = `${visibility}`;
    document.getElementById('velocity').innerText = `${velocity}`;
    document.getElementById('name').innerText = `${name}`;
    document.getElementById('id').innerText = `${id}`;
}

// Co sekundę wywołuje funkcje setData i setCurrentDate.
setInterval(() => {
    setData();
}, 1000);