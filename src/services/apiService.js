export async function getCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results;
}

export async function getCharacter(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    return data;
}