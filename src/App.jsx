import React from "react";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";


const LAUNCHES_QUERY = `query samplePokeAPIquery {
  gen3_species: pokemon_v2_pokemonspecies(where: {pokemon_v2_generation: {name: {_eq: "generation-iii"}}}, order_by: {id: asc}) {
    name
    id
  }
 
  generations: pokemon_v2_generation (limit:10) {
    name
    pokemon_species: pokemon_v2_pokemonspecies_aggregate {
      aggregate {
        count
      }
    }
  }
}`
function App() {
  const [launches, setlaunches] = React.useState([])
  React.useEffect(() => { fetch('https://beta.pokeapi.co/graphql/v1beta', {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({ query: LAUNCHES_QUERY})
  }).then(response => response.json())
  .then(data => setlaunches(data.data.gen3_species))

  }, []);
  return (
    <div>  
           
    {/* {launches.map(launch => (
     <span key={launch.id}>{launch.name}</span>
    ))} */}
  
    <Router>
      <Topbar />
        <Route exact path="/">
          <Homepage />
        </Route>
    </Router>
    </div>
  );
}

export default App;
