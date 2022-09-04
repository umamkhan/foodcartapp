
import React from "react";
import Pdf from 'react-to-pdf';

const ref = React.createRef();

const PDF =(props) => {
    
    return(
       <>
       <div className="Post" ref={ref}>
        
        <h3 className="mt-4">Name: {props.name}</h3>
        <h3 className="mt-4">Email: {props.email}</h3>
         <h3 className="mt-4">Number: {props.number}</h3>          
          <h3 className="mt-4">Date: {props.date}</h3>
        <h4 className="mt-4">Issue: {props.content}</h4>

       </div>
       <Pdf targetRef={ref} filename='post.pdf'>
        {({ toPdf }) => <button onClick={toPdf}>Capture as Pdf</button>}
       </Pdf>
       </> 
    )
}

export default PDF;