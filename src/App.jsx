import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer
        mensaje={"mensaje desde app.JSX"}/>
    </>
  )
}

export default App
