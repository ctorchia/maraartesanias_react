import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cuerpo from './components/Cuerpo/Cuerpo';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      {/* <Cuerpo /> */}
      <ItemListContainer greeting='Bienvenidos a MaraArtesanias'/>
    </>
  );
}

export default App;
