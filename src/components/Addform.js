import React from 'react'
const Addform = () => {

    function handleSubmit(e){
        e.preventDefault();


        let agent = {
            FirstName: document.getElementById("FirstName").value,
            LastName: document.getElementById("LastName").value,
            DateOfBirth: document.getElementById("DateOfBirth").value,
            Height: document.getElementById("Height").value,
            Aliases: [],
            Missions: []
        }

        const url = "http://localhost:5277/api/agent";

        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(agent)
        };
    
        fetch(url, init).
        then(response=>{
            if(response.status != 201){
                alert("Error: status " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json=>{
            alert("successfully added new agent with ID of " + json.agentId)
        })
    }

  return (
    <>
    <br/>
    <h3>ADD</h3>
    <form name = "add-form" onSubmit = {handleSubmit}>
      <label>First Name: </label>
      <input type="text" name="FirstName" id="FirstName"/><br></br>
      <label>Last Name: </label>
      <input type="text" name="LastName" id="LastName"/><br></br>
      <label>Date of Birth: </label>
      <input type = "date" id = "DateOfBirth" /> <br></br>
      <label>Height (feet): </label>
      <input type="number" step="0.01" id="Height" /> <br></br>
      <input type="submit" value="Add Agent" />
    </form>
    </>
  )
}

export default Addform
