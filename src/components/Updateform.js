import React from 'react'

const Updateform = () => {

    function handleFinder(e){
        e.preventDefault();
        fetch("http://localhost:5277/api/agent/" + document.getElementById("agentId").value)
        .then(response=>{
            if(response.status !== 200){
                alert("Error: status " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json => {
            document.getElementById("agentFirstName").value = json.firstName;
            document.getElementById("agentLastName").value = json.lastName;
            document.getElementById("agentDob").value = json.dateOfBirth.substring(0,10);
            document.getElementById("height").value = json.height;
        });
    }
    function handleFiller(e){
        e.preventDefault();

        let agent = {
            AgentId: document.getElementById("agentId").value,
            FirstName: document.getElementById("agentFirstName").value,
            LastName: document.getElementById("agentLastName").value,
            DateOfBirth: document.getElementById("agentDob").value,
            Height: document.getElementById("height").value,
            Aliases: [],
            Missions: []
        }

        const url = "http://localhost:5277/api/agent";

        const init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(agent)
        };

        fetch(url, init)
        .then(response => {
            if (response.status != 200){
                alert("error: " + response.status);
            }
            else{
                alert("successfully updated agent " + document.getElementById("agentId").value)
            }

        })
    }

  return (
    <div>
    <br/>
    <h3>UPDATE</h3>
    <form name = "update-form-1" onSubmit = {handleFinder}>
        <label>Agent ID: </label>
        <input type= "number" id="agentId"></input>
        <input type="submit" value="Find"></input>
    </form>
    <form name = "update-form-2" onSubmit = {handleFiller}>
        <label>First Name: </label>
        <input type = "text" id = "agentFirstName" /><br/>
        <label>Last Name: </label>
        <input type = "text" id = "agentLastName" /><br/>
        <label>Date of Birth: </label>
        <input type = "date" id = "agentDob" /><br/>
        <label>Height: </label>
        <input type = "number" step = "0.01" id = "height" /><br/>
        <input type = "submit" value = "Update Agent" />
    </form>
    </div>
  )
}

export default Updateform
