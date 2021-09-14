import logo from './logo.svg';
import './App.css';
import PokemonList from '../src/components/PokemonList'
import PokemonAddForm from './components/PokemonAddForm';

function App() {

  


  return (
    <>
      <div className='App'>
        <h1>Pokemons</h1>
        <PokemonAddForm />
        <PokemonList />
      </div>
    </>
  );
}

export default App;
