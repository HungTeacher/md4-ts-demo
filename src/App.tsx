import './main.scss'

import { Greet} from "./components/Greet";
import {Person} from "./components/Person";
import {PersonList} from "./components/PersonList";
import {Button} from "./components/Button";
import {Input} from "./components/Input"
import {Container} from "./components/Container.tsx";
import {LoggedIn} from "./components/LoggedIn.tsx";
function App() {
    const personName = {
        first: 'Minh',
        last: 'Hung'
    }
    const nameList = [
        {
            first: 'Thanh',
            last: 'Thu'
        },
        {
            first: 'Thu',
            last: 'Hien'
        },
        {
            first: 'Tien',
            last: 'Dat'
        }
    ]
    return (
        <div className='App'>
            <Greet name="Hung" messageCount={20} isLoggedIn={false}/>
            <Person name={personName}/>
            <PersonList names={nameList}/>
            <Button handleClick={(event, id) => {
                console.log("Hello Cac ban", event, id)
            }} />
            <Input value = '' handleChange={(event) => console.log(event)}/>
            <Container styles={{border: '1px solid black', padding:'1rem'}} />
            <LoggedIn />
        </div>
    )
}

export default App
