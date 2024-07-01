import {ChatEngine} from 'react-chat-engine'
import ChatFeed  from './components/ChatFeed'
import LoginForm from './components/LoginForm';
import './App.css'


const projectID = '3f9c3bc3-5a77-4881-a47e-c5ba910a8f32'
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return(
        <ChatEngine 
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}     
        />
    )
}

export default App;


