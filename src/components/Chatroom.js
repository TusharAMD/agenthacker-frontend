import firebase from 'firebase/app';
import 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {useState, useEffect, useRef} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Jdenticon from 'react-jdenticon';
import axios from 'axios';
import Tooltip from "react-simple-tooltip"
import ToggleButton from 'react-toggle-button'
import { useParams } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAdm-J76vN0gPDGhkoxpzi6tyFOkGZg0nw",
        authDomain: "topsecret-11485.firebaseapp.com",
        projectId: "topsecret-11485",
        storageBucket: "topsecret-11485.appspot.com",
        messagingSenderId: "428420007808",
        appId: "1:428420007808:web:42c08972a7a08781bc2365",
        measurementId: "G-6LPBDKRPM4"
    });
 }else {
    firebase.app(); // if already initialized, use that one
 }



const firestore = firebase.firestore();

function Chatroom() {
// Parameters are here
let { id } = useParams();
const messagesRef = firestore.collection(`${id}`);
const query = messagesRef.orderBy('createdAt', 'asc').limit(100);
const dummy = useRef();

const { user, isAuthenticated, isLoading } = useAuth0();
const [messages] = useCollectionData(query, {idField: 'id'});
const [message, setMessage] = useState('');
const [encryptedMessages, setEncryptedMessages] = useState('');
const [togglevalue, setTogglevalue] = useState(true);
const [otp, setOtp] = useState('');

useEffect(() => {
    axios.post(`http://localhost:5000/cipherIt`, { messages })
      .then(res => {
        //console.log("response",res.data);
        //console.log("messages",messages)
        setEncryptedMessages(res.data);
        dummy.current.scrollIntoView({ behavior: 'smooth' });
        setMessage('');
      })
  }, [messages]);

const sendMessage = async (e) => {
    e.preventDefault();
    //console.log(message);
    await messagesRef.add({
      user: user.name,
      email: user.email,
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setMessage('');
  }


  function handleToggle(value) {
    if (value==true){
    axios.post(`http://localhost:5000/verify`, { email:user.email })
      .then(res => {
        setOtp(res.data["otp"]);
        const enteredOTP = prompt('Please enter OTP received on your number')
        if (enteredOTP == res.data["otp"]){
            setTogglevalue(false);
        }
        else{
            alert("OTP entered is incorrect")
        }
      })
    }
    else{
        setTogglevalue(true);
    }

  }


if (togglevalue==true){
return(
    <>
    {/*JSON.stringify(messages)*/}
    <div className="chatroom">
    <p className="joininfo">To Join this Room send this link http://localhost:3000/chatroom/{id}</p>
    {encryptedMessages["messages"] && encryptedMessages["messages"].map((eachmessage) => <ChatMessage user={user} eachmessage = {eachmessage} /> )}
    
    <span ref={dummy}></span>
    </div>
    <form onSubmit={sendMessage}>
        

        <div className="sendtools">
        <input className="inputMessage" type="text" name="message" onChange={(e)=>setMessage(e.target.value)}/>
        <ToggleButton
        value={ togglevalue }
        onToggle={(value) => {handleToggle(value)}} />
        <button type="submit" disabled={!message}><i class="material-icons">send</i></button>
        </div>
    </form>

    
    
    </>
);
}
else{
    return(
        <>
        <div className="chatroom">
          
        <p className="joininfo">To Join this Room send this link http://localhost:3000/chatroom/{id}</p>
        {messages && messages.map((eachmessage) => <ChatMessage user={user} eachmessage = {eachmessage} /> )}
        
        <span ref={dummy}></span>
        </div>
        <form onSubmit={sendMessage}>
            

            <div className="sendtools">
            <input className="inputMessage" type="text" name="message" onChange={(e)=>setMessage(e.target.value)}/>
            <ToggleButton
            value={ togglevalue }
            onToggle={(value) => {handleToggle(value)}} />
            <button type="submit" disabled={!message}><i class="material-icons">send</i></button>
            </div>
        </form>
        
        </>
    );
}
}


function ChatMessage(props) {
    const messageClass = props.user.email === props.eachmessage.email ? 'sent' : '';
  
    return (
     <div className=  {`messageline${messageClass}`}>
         <Tooltip content={"Agent "+ props.eachmessage.user.split(" ")[0][0]+props.eachmessage.user.split(" ")[1][0]}>
         <p> <Jdenticon size="48" value={props.eachmessage.user} /> {props.eachmessage.text}
         </p>
         </Tooltip>
     </div>
    )
  }


export default Chatroom;