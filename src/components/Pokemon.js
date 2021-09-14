import React from 'react'

export default function Pokemon({poke}) {
  return (
    <div>
      <h1>{poke.name} </h1>
      <p>{poke.power} {poke.element}</p>
    </div>
  )
}
