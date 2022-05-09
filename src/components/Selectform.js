import React from 'react'

const Selectform = () => {

    function handleSubmit(e){
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
            document.getElementById("agentHeader").innerHTML = "Displaying Agent ID#" + json.agentId;
            document.getElementById("agentName").innerHTML = json.firstName + " " + json.lastName;
            document.getElementById("agentDob").innerHTML = "Date of Birth: " + json.dateOfBirth.substring(0,10);
            document.getElementById("agentHeight").innerHTML = "Height: " + json.height + "ft";
        });
    }

  return (
    <div>
    <br/>
    <h3>SEARCH</h3>
    <form name = "select-from" onSubmit = {handleSubmit}>
        <label>Agent ID: </label>
        <input type= "number" id="agentId"></input>
        <input type="submit" value="View"></input>
    </form>
    <h5 id = "agentHeader"></h5>
    <p id = "agentName"></p>
    <p id = "agentDob"></p>
    <p id = "agentHeight"></p>
    </div>
  )
}

export default Selectform
