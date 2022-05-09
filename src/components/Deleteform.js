import React from 'react'

const Deleteform = () => {

    function handleSubmit(e){
        e.preventDefault();
        const init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }
        const url = "http://localhost:5277/api/agent/" + document.getElementById("agentId").value;

        fetch(url, init)
        .then(response=>{
            if(response.status != 200){
                alert("Error: status " + response.status);
            }
            else{
                alert("Agent " + document.getElementById("agentId").value + " Successfuly deleted");
            }
        })
    }

  return (
    <>
    <br/>
    <h3>DELETE</h3>
    <form name="delete-form" onSubmit = {handleSubmit}>
        <label>Agent ID: </label>
        <input type="number" id = "agentId"></input>
        <input type="submit" value="Delete" />
    </form>
    </>
  )
}

export default Deleteform
