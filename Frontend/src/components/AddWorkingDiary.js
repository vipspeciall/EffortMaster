import React, { useState } from 'react';
import $ from 'jquery';

const AddWorkingDiary = ({handleAddWorkingDiary}) => {

    const [headerText, setHeaderText] = useState('');
    const [date, setDate] = useState('');

    const handleSaveClick = () => {

      
            handleAddWorkingDiary(headerText,date);
            setDate('')
            setHeaderText('')

          
    }

    return (
        <div className="modal fade" id="addDiary" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addDailyTitle">Yeni Bir Gün Ekle</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <div className="row ml-2 mb-4">
                  <label className="mr-4" htmlFor="diaryHeader">Günlük Başlığı</label>
                  <input id="diaryHeader" name="diaryHeader" type="text" value={headerText} onChange={(event) => setHeaderText(event.target.value)}/>
                </div>
                <div className="row ml-2">
                  <label className="mr-4" htmlFor="diaryDate">Günlük Tarihi</label>
                  <input id="diaryDate" name="diaryDate" type="date" value={date} onChange={(event) => setDate(event.target.value)}  />
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{$('#diaryDate').value = new Date(); setDate('');setHeaderText('')}}>İptal</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleSaveClick}>Ekle</button>
            </div>
          </div>
        </div>
      </div>
    )
}
export default AddWorkingDiary;