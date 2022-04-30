import { pokeApi } from "./pokeApi"

export const getAllPokemons = async () => {
  const response = await pokeApi.get("pokemon?limit=100000&offset=0")
  // console.log(response)
  return response
}
