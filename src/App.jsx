import './css/App.css';
import {Button} from './components/Button'
import {A} from './components/Atag'
function App() {
  return (
    <div className="App">
      <div>
        <Button theme={"light"}>primary</Button>
        <Button>Default Button</Button>
        <Button theme={"dashed"}>Dashed Button</Button>
      </div>
      <div>
        <Button theme={"text"}>Text Button</Button>
        <Button theme={"link"}><A href="https://www.google.com">Link Button</A></Button>
        
      </div>
    </div>
  );
}

export default App;
