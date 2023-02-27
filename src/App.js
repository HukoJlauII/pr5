import {store} from "./store";
import './App.css';
import Form from "./components/Form";
import 'bootstrap/dist/css/bootstrap.css';
import {Title} from "./components/Title";

function App() {
    return (
        <div className="App">
            <Title/>
            <Form store={store}/>
        </div>
    );
}

export default App;
