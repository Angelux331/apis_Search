const form = document.getElementById('search-form');
const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results');

if (form && searchInput && resultsContainer) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (query !== '') {
      searchCharacter(query);
    }
  });
}

async function searchCharacter(query) {
  try {
    const link = `https://rickandmortyapi.com/api/character/?name=${(query)}`;
    const response = await fetch(link);

    if (!response.ok) {
      throw new Error('Personaje no encontrado');
    }

    const data = await response.json();
    const characters = data.results;

    resultsContainer.innerHTML = '';

    characters.forEach((character) => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p>Estado: ${character.status}</p>
        <p>Especie: ${character.species}</p>
      `;

      resultsContainer.appendChild(card);
    });
  } catch (error) {
    resultsContainer.innerHTML = `<p class="error">${error.message}</p>`;
    console.error('Error:', error.message);
  }
}

async function loadInitialCharacters() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    if (!response.ok) {
      throw new Error('No se pudieron cargar los personajes iniciales');
    }

    const data = await response.json();
    const characters = data.results;

    resultsContainer.innerHTML = '';

    characters.forEach((character) => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p>Estado: ${character.status}</p>
        <p>Especie: ${character.species}</p>
      `;

      resultsContainer.appendChild(card);
    });
  } catch (error) {
    resultsContainer.innerHTML = `<p class="error">${error.message}</p>`;
    console.error('Error inicial:', error.message);
  }
}

if (form && searchInput && resultsContainer) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query !== '') {
      searchCharacter(query);
    }
  });
}

loadInitialCharacters();
