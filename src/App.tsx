import './App.css'
import {SinInput} from "./components/SinInput.tsx";

function App() {
    return (
        <div className="container mx-auto">
            <header className="prose mx-auto pb-6">
                <h1>Elective Take Home</h1>
            </header>
            <div className="card card-compact mx-auto bg-base-100 w-fit mb-6 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Person 1</h2>
                    <SinInput id="person1"/>
                </div>
            </div>
            <div className="card card-compact mx-auto bg-base-100 w-fit mb-6 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Person 2</h2>
                    <SinInput id="person2"/>
                </div>
            </div>

        </div>
    )
}

export default App
