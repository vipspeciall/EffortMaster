import React, { useState } from 'react';
import AlpStyleSelect from './AlpStyleSelect';

const AddWorkingPiece = ({belongerId,inheritedDate,handleAddWorkingPiece,timePeriodList}) => {

    const [context,setContext] = useState('');
    const [headerText, setHeaderText] = useState('');
    const [timePeriod,setTimePeriod] = useState(-1);

    
    const handleSaveClick = () => {

        
        console.log(headerText.trim().length);
        console.log(timePeriod);
        if(headerText.trim().length === 0 && timePeriod !== -1){
            alert("Lütfen Başlık Kısmını Boş Bırakmayın!");
        }
        else if(headerText.trim().length !==  0 && timePeriod === -1){
            alert("Lütfen Zaman Aralığı Kısmını Boş Bırakmayın!");
        }
        else if(headerText.trim().length === 0 && timePeriod !== -1)
        {
            alert("Lütfen Başlık ve Zaman Aralığı Kısımlarını Boş Bırakmayın!");
        }
        else{
            
            handleAddWorkingPiece(belongerId,inheritedDate,headerText,context,timePeriod);
            alert("BAŞARILI")
        }
        
    }

    return (
        <div className="modal fade" id="addWorkingPiece" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addWorkingPieceTitle">Yeni Bir İş Parçası Ekle</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">  
                <div className="row mb-2">
                    <label htmlFor="workingPieceHeader">İş Parçası Başlığı</label>
                    <input id="workingPieceHeader" name="dailyHeader" type="text" onChange={(event) => setHeaderText(event.target.value)}/>
                </div>
                <div className="row mb-2">
                    <label htmlFor="workingPieceContext">Açıklama</label>
                    <input id="workingPieceContext" name="workingPieceContext" type="text" onChange={(event) => setContext(event.target.value)}  />
                </div>
                <div className="row mb-2">
                  <AlpStyleSelect
                    
                    labelText = {"Zaman Aralığı"}
                    timePeriodList = {timePeriodList}
                    setTimePeriod = {setTimePeriod}
                    />
                  </div>
                  <div className="row mb-2">
                    <label htmlFor="workingPieceDate">{inheritedDate}</label>
                    </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{setTimePeriod('');setContext('');setHeaderText('');}}>İptal</button>
              <button type="button" className="btn btn-primary" onClick={handleSaveClick}>Ekle</button>
            </div>
          </div>
        </div>
      </div>
    )

    

}
export default AddWorkingPiece;