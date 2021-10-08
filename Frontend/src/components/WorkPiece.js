import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md';

const WorkPiece = ({workingPiece,belongerId,handleDeleteWorkingPiece,timePeriodList}) => {
        
const[isVisible,setIsVisible] = useState(false);    
    const {id,header,context,timePeriod} = workingPiece;
    
    
    return (
            
        <div className="row  working-piece col-md-12">
            <div className="card w-100">    
                    
                    <div className="card-header d-flex w-100">
                        <div className="row w-100">
                                <div className="col-md-12 d-flex justify-content-between">
                                    <h5 id="header" className="d-inline" style = {{cursor:"pointer"}} onClick={() => setIsVisible(!isVisible)}>{header}</h5>
                                    <MdDeleteForever 
                                            onClick = {() => handleDeleteWorkingPiece(id,belongerId) }
                                            className='delete-icon'
                                            size='1.3em'
                                            style={{cursor:"pointer"}}
                                        />
                                    {/* <i onClick = {() => handleDeleteWorkingPiece(id,belongerId)} className="far fa-trash-alt" style = {{cursor:"pointer"}}></i> */}
                                </div>
                        
                    
                            <div className="col-md-12 d-flex justify-content-between">
                                <p className="mb-0 working-piece-time-period">{timePeriodList.map((timePer) =>{return timePer.key === timePeriod ? timePer.value: ""})}</p>
                            </div>    
                            </div>                      
                    </div>
                {
                            isVisible ? 
                            <div className="card-body">
                                    <span className="card-text working-piece-time-period"></span>
                                    <span className="card-text working-piece-context ml-2">{context}</span>
                            </div> : null
                            }
            </div>
        </div>


        )
    
}
export default WorkPiece;