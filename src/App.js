import "./styles/index.sass";
import Banner from "./components/Banner";
import Sections from "./components/Sections";

function App() {
    return (
        <div className='App'>
            <header>
                <Banner />
            </header>
            <main>
                <Sections />
            </main>
        </div>
    );
}

export default App;
