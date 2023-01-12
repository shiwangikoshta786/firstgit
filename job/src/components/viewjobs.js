import React, {useState, useEffect} from 'react'
import "./css/table.css"
import axios from 'axios'

import {Link} from "react-router-dom";

const ViewJobs = () => {

    const [viewJobs, setJobsArray] = useState([])

    useEffect(() => {          
        axios.get('http://localhost:4001/api/view')
        .then(response => {
            console.log(response.data.Records)
            setJobsArray(response.data.Records)
          })
    }, [])

	return (
	
		<>
	        <a href="add" style={{backgroundColor:"transparent", borderRadius:'5px',textDecorationLine:'none', color:"white",borderStyle:"inset"}}>Add jobs</a><br />

		<table>
		
		<tr>
			<th>
				Title
			</th>
		
			<th>
				Description
			</th>
		
			<th>
				Location
			</th>
			<th>
				Salary
			</th>
		</tr>
		
		{viewJobs.map((elem)=>{
		  
		 return(
		
		
			<>
		  
		  <tbody>
		  
		  <tr>
			  <td>
				  {elem.title}
			  </td>
		  
			  <td>
				  {elem.description}
			  </td>
		  
			  
			  <td>
				  {elem.location}
			  </td>

			  <td>
				{elem.salary}
			  </td>
			   <td><a href={"/apply/"+elem.title} style={{backgroundColor:'transparent', borderRadius:'5px',textDecorationLine:'none' ,color:"white",borderStyle:"inset"}}>apply</a></td>
			   
		 		
			
			  
		  </tr>
		  
		  </tbody>
		  </>
		  
		  
		  
		
		
		 )
		
		})}
		
		</table>
	
		</>
			
		
			
		);
		
}

export default ViewJobs



     