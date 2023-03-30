
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import CustomWelcome from './components/CustomWelcome';
import CustomAllTheBooks from './components/CustomAllTheBooks';

function App() {
  return (
    <div className="App">
      <CustomNavbar />

     <div className="App">
      <CustomWelcome />
     </div>
      <div className="App">
        <CustomAllTheBooks />
      </div>
     
     <footer className="App">
<CustomFooter />
     </footer>
    </div>
  );
}

export default App

