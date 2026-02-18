const searchInput = document.getElementById('search');
if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    searchCharacter("Sanchez");
    })
  }

  async function searchCharacter(query) {
    try {
      const link = `https://rickandmortyapi.com/api/character/?name=${query}`;
  
      const response = await fetch(link);
  
      if (!response.ok) {
        throw new Error("Character not found");
      }
  
      const data = await response.json();
  
      console.log(data.results);
  
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  searchCharacter("Sanchez");

//fetch('https://rickandmortyapi.com/api/character')
//.then(response=> response.json())
//.then(data=>{
//  console.log(data["results"][15]);
//})