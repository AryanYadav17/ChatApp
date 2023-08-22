import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Components/ChatFeed'
import LoginForm from './Components/LoginForm'
import './App.css';

const App = () => {
if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="5cea9025-a168-48cf-aef4-8feade834303"
       userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      
    />
  );
};



export default App