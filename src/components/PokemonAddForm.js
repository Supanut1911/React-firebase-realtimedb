import React, {useState} from 'react'
import firebase from '../firebase/firebase'
import { getDatabase, ref, set } from "firebase/database";

export default function PokemonAddForm() {

  const [name, setname] = useState('')
  const [power, setpower] = useState(0)
  const [element, setelement] = useState('')

  const handleOnChangeName = (e) => {
    setname(e.target.value)
  }

  const handleOnChangePower = (e) => {
    setpower(e.target.value)
  }

  const handleOnChangeElement = (e) => {
    setelement(e.target.value)
  }



  const addPokemon = () => {
    const db = getDatabase()
    set(
      ref(db, `pokemon/${name}`), {
        name,
        power,
        element
      }
    )
  }

  return (
    <div>
      <label>Name</label><input type='text' onChange={handleOnChangeName} value={name}></input>
      <label>Power</label><input type='text' onChange={handleOnChangePower} value={power}></input>
      <label>Element</label><input type='text' onChange={handleOnChangeElement} value={element}></input>
      <button className="add-btn" onClick={addPokemon}>add Pokemon</button>
    </div>
  )
}
