import React, {useState} from 'react'
import AddWorkingPiece from './AddWorkingPiece';
import WorkPiece from './WorkPiece';
import {MdDeleteForever} from 'react-icons/md';
import { timePeriodList } from '../statics/timePeriodList';
// interface IWorkingPieces {
//     id: string,
//     key: string
// }

// let wp : IWorkingPieces = {}

const WorkDay = ({workingDiary, handleDeleteWorkingDiary, handleAddWorkingPiece, handleDeleteWorkingPiece, passedWorkingPieces}) => {



        const {id,header,date} = workingDiary
  
        const [isVisible,setIsVisible] = useState(false);

        // useEffect(() => {
        //     let a = passedWorkingPieces
        //     debugger
        // }, [])
       

        
        // await $("piece-list")[0].ready( async function(){
            
        //         setWorkingPieces(passedWorkingPieces);
            
        // }); 
        // $(function() {
        
        //     setWorkingPieces(passedWorkingPieces);

        // })
        

        return (

             <div className="row mt-4 col-md-12">
                    <div className="card w-100">
                    
                        <div className="card-header d-flex w-100" >
                            <div className="row w-100 align-items-center">
                                <div className="col-md-12 d-flex justify-content-between ">
                                    <h5 id="header" className="d-inline mr-2" style={{cursor:"pointer"}} onClick={(event) => setIsVisible(!isVisible)}>{header}</h5>
                                    <MdDeleteForever 
                                        onClick = {() => handleDeleteWorkingDiary(id) }
                                        className='delete-icon'
                                        size='1.3em'
                                        style={{cursor:"pointer"}}
                                    />
                                    {/* <i onClick={() => handleDeleteWorkingDiary(id,passedWorkingPieces)} className="far fa-trash-alt" style = {{cursor:"pointer"}}></i> */}
                                </div>
                                <div className="col-md-12 d-flex justify-content-between align-items-center ">
                                    <label style={{color: "red", fontStyle: "italic"}} id="workingDiaryDate" >{date}</label>
                                    <button id="new-working-piece-button" className="btn btn-primary" data-toggle="modal" data-target="#addWorkingPiece" toggle="modal" type="button" >İş Parçası Ekle</button>
                                </div>
                            </div>
                       </div>
                        {
                        isVisible ? 
                        <div className="card-body">
                            <div className="row piece-list">
                               {passedWorkingPieces && passedWorkingPieces.map((workingPiece) => (
                                    <WorkPiece
                                        key = {workingPiece.id}
                                        belongerId = {id}
                                        workingPiece = {workingPiece}
                                        timePeriodList = {timePeriodList}
                                        handleDeleteWorkingPiece = {handleDeleteWorkingPiece}
                                        handleAddWorkingPiece = {handleAddWorkingPiece}
                                        
                                    /> 
                                ))} 
                            </div>
                        </div> : null
                        
                        }
                        <AddWorkingPiece
                            handleAddWorkingPiece = {handleAddWorkingPiece}
                            
                            timePeriodList = {timePeriodList}
                            belongerId = {id}
                            inheritedDate = {date}
                        />
                    </div>
            </div>
            
        )
    }

export default WorkDay;