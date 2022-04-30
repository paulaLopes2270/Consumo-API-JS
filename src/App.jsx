import "./styles.css"
import { useEffect, useState } from "react"
import { getAllPokemons } from "../services/getAllPokemons"

export default function App() {
  const [pokemonList, setPokemonList] = useState([])
  useEffect(() => {
    //função asyncrona, que vai esperar a resposta
    const updatePokemons = async () => {
      const allPokemons = await getAllPokemons()
      const { results } = allPokemons.data
      setPokemonList(results)

      console.log("resposta: ", allPokemons)
    }
    updatePokemons()
  }, [])
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {pokemonList.map(({ name }) => (
          <p>{name}</p>
        ))}
      </div>
    </div>
  )
}
