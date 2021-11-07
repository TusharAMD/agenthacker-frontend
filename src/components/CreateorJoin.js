import { useState } from "react";
import { Redirect,Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function CreateorJoin() {
    const [code,setCode] = useState('');
    console.log(typeof(code));
    const[create,setCreate] = useState(uuidv4());
    function handleJoin() {
        return <Redirect to = {"/chatroom/"+{code}} />
    }

    function handleCreate() {
        
    }

    return (
        <div className="CreateOrJoin">
            <div className="Create">
            <Link to={`/chatroom/${create}`}><img src="https://i.ibb.co/myc1bD3/Team-leader-and-teamwork-concept-Businessman-with-telescope-looking-faraway-an-leading-team-Flat-vec.jpg"></img>
            </Link><h1>Create</h1>
            </div>

            <div className="Join">
                <Link to={`/chatroom/${code}`}><img src="https://i.ibb.co/6vDst9P/Employees-giving-hands-and-helping-colleagues-to-walk-upstairs-Team-giving-support-growing-together.jpg"></img>
                </Link><h1>Join</h1>
                <input value ={code} onChange={(e)=>setCode(e.target.value)} placeholder="Please Enter Code" />
            </div>
        </div>
    );

}
export default CreateorJoin;