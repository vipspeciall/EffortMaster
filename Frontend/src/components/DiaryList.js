import WorkDay from './WorkDay'
import React from 'react';

 const DiaryList = ({workingDiaries,timePeriodList, isWorkingDayVisible, handleDeleteWorkingDiary, handleAddWorkingPiece, handleDeleteWorkingPiece, workingPieces}) => {

    
   
    return (
            <div className="row mt-4 diary-list">
                {workingDiaries.map((workingDiary) => (
                    <WorkDay
                        key = {workingDiary.id}
                        workingDiary = {workingDiary}
                        handleDeleteWorkingDiary = {handleDeleteWorkingDiary}
                        timePeriodList = {timePeriodList}
                        handleDeleteWorkingPiece = {handleDeleteWorkingPiece}
                        handleAddWorkingPiece = {handleAddWorkingPiece}
                        isWorkingDayVisible = {isWorkingDayVisible}
                        passedWorkingPieces = {workingPieces.filter((workingPiece) => workingPiece.belongerId === workingDiary.id)}
                    />
                ))}
                    
            </div>
            )
    
        
}

export default DiaryList;