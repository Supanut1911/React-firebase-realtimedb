import React, {useState, useEffect} from 'react'
import firebase from '../firebase/firebase'
import Pokemon from '../components/Pokemon'
import { getDatabase, onValue, ref } from '@firebase/database'

export default function PokemonList() {

  const [pokemonsList, setpokemonsList] = useState([])

  useEffect( () => {
    const db = getDatabase()
    const pokemons = ref(db, 'pokemon')
    const pokeArr = []
    onValue(pokemons, (snapshot) => {
      const data = snapshot.val()
      for(let i in data) {
        pokeArr.push({i, ...data[i]})
      }
      setpokemonsList(pokeArr)
    console.log('iiii',pokemonsList)

    })

  }, []) 


  return (
    <div>
      {console.log('yoyo',pokemonsList)}
      {
        pokemonsList 
        ? pokemonsList.map((poke, index) => 
         <Pokemon poke={poke}  key={index} />)
        : ''
      }
    </div>
  )
}
