import React, {useState} from 'react'
import axios from 'axios'

import "./css/form.css"

const SubmitJob = () => {

    const [jobTitle, setJobTitle] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [jobLocation, setJobLocation] = useState("")
    const [jobSalary, setJobSalary] = useState("")

    const postJob = (e) => {
        const data = { title: jobTitle, description: jobDescription, location: jobLocation,
                        salary: jobSalary }
        axios.post('http://localhost:4001/api/jobs', data)
        .then(response => {
          console.log(response)
		  alert('new job post submitted succesfully')
		
        }).catch(function (error) {
			console.log(error);
		  });
    }

    return(
        <div className="submitJobContainer">
            <form className="formContainer" onSubmit={postJob}>
                <input type="text" name="title" placeholder="Job Title" 
                  onChange={e => setJobTitle(e.target.value)} required/>
                 <input type="text" name="description" placeholder="Job Description"
                    onChange={e => setJobDescription(e.target.value)} required/>
                <input type="text" name="location" placeholder="Job Location"
                    onChange={e => setJobLocation(e.target.value)} required/>
                <input type="number" name="salary" placeholder="Job Salary"
                    onChange={e => setJobSalary(e.target.value)} required/>
                <button className="Button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SubmitJob
