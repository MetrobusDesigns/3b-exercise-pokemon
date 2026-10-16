import { useEffect, useState } from 'react'

// https://pokeapi.co/api/v2/pokemon/ditto
const Pokemon = () => {
  const [name, setName] = useState('')

  const [pokemon, setPokemon] = useState(null)

  const [submitPokemon, setSubmitPokemon] = useState('pikachu')

  const [isFront, setIsFront] = useState(true)

  // API Call
  // fetch
  // useEffect
  // async await
  // state for data

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${submitPokemon}`
      )
      const data = await res.json()
      console.log(data)
      setPokemon(data)
    }
    fetchPokemon()
  }, [submitPokemon])

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitPokemon(name)
  }

  return (
    <>
      <h2>Pokemon Component</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter a Pokemon: </label>
          <input value={name} onChange={event => setName(event.target.value)} />
        </div>
        <button>Go!</button>
      </form>
      {/* using short-circuit guarantees that we have data before trying to display it */}
      {pokemon && (
        <div onClick={() => setIsFront(!isFront)}>
          <h2>{pokemon.name}</h2>
          <img
            src={
              isFront
                ? pokemon.sprites.front_default
                : pokemon.sprites.back_default
            }
          />
        </div>
      )}
    </>
  )
}

export default Pokemon