import React, { useState,useEffect } from 'react';
import {nanoid} from 'nanoid';
import Search from './components/Search';
import DiaryList from './components/DiaryList';
import AddWorkingDiary from './components/AddWorkingDiary';


const App = () => {

  
  const [workingDiaries, setWorkingDiaries] = useState([]);

  const [workingPieces, setWorkingPieces]  = useState([]);

  const [lookingOnDate, setLookingOnDate] = useState('')
  
  const [searchText, setSearchText] = useState('');
  

  const handleAddWorkingPiece = (belongerId,inheritedDate,header,context,timePeriod) => {
    
    const newWorkingPiece = {
      
      header: header,
      context: context,
      timePeriod : timePeriod,
      date: inheritedDate,
      belongerId: belongerId
    }
    

    postOrDeleteDatas("saveWorkingPiece",newWorkingPiece,"POST")

  }

  const handleDeleteWorkingPiece = (id,belongerId) => {
    
    var data = {
      id: id
    }
    postOrDeleteDatas("deleteWorkingPiece",data,"DELETE");

  }

  const handleAddWorkingDiary = (header,date) => {
    const formattedDate = new Date(date).toLocaleDateString();
    const newWorkingDiary = {
      id:nanoid(),
      header: header,
      date: formattedDate
    }
   
    postOrDeleteDatas("saveWorkingDay",newWorkingDiary,"POST"); 
  }

  
  const handleDeleteWorkingDiary = (id) => {

    const data = {
      "id": id
    } 
    postOrDeleteDatas("deleteWorkingDay",data,"POST");


  }
  
  const getDatas = async (api) => {
    let data = await fetch('http://localhost:8080/'+api,{
      method:'GET', 
      mode: 'cors'
    })
    .then(response => response.json())
    .then((data)=>{
      return data
    });

    return data
    
  }

  const postOrDeleteDatas = (api, data, method) => {
    
    fetch('http://localhost:8080/'+api,
    {
      method:method,
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Accept': 'application/json'
      }
      
    })
    .then(response => {
     list()
     
    })
    .then((response) => console.log("Response = "+response.json()))
    .catch(err => {
      
      console.log(err)
    })
  }
  

  // document.getElementsByTagName("body")[0].onload =() =>{

  //   setWorkingDiaries(getDatas("getDiaries"));
  //   setWorkingPieces(getDatas("getPieces"));
    

  //  };

  useEffect(() => {
    list()
    //setWorkingPieces(getDatas("getPieces"));
    
  },[])

  const list = () => {

    
    getDatas("getDiaries").then(data=>{
      setWorkingDiaries(data);
    })
    getDatas("getPieces").then(data=>{
      setWorkingPieces(data);
    })
    
  }


  // const postDatas = (data) => { 
  //   var settings = {
  //   "url": "localhost:8080/saveWorkDay",
  //   "method": "POST",
  //   "timeout": 0,
  //   "headers": {
  //     "Content-Type": "application/json"
  //   },
  //   "data": JSON.stringify(data),
  // };
  
  // $.ajax(settings).done(function (response) {
  //   alert("Kayıt"+response);
  // });
  // }

  

  const chooseDate = (date) => {

    date ? setLookingOnDate (new Date(date).toLocaleDateString()): setLookingOnDate('');
  }


  const handleSearchDiary = (searchText) => {

    setSearchText(searchText);

  }

  
    return (
      <div className="container" >
        <div className="header">
          <h3 id="app-header" className="text-center mt-4">EFFORT MASTER'A HOŞGELDİNİZ</h3>
        </div>
              
            <Search 
                chooseDate = {chooseDate}
                handleSearchDiary = {handleSearchDiary}
                searchText = {searchText}
            />
            <div className="add-diary row mt-4 justify-content-center">
              <button id="new-diary-button" className="btn btn-primary" data-toggle="modal" data-target="#addDiary" toggle="modal" type="button" >Yeni Bir Gün Ekle</button>
            </div>  
           <DiaryList

              workingDiaries = {
                workingDiaries.filter((workingDiary) => workingDiary.header.toLowerCase().includes(searchText.toLowerCase()) && workingDiary.date.includes(lookingOnDate))}
              workingPieces = {workingPieces}
              

              handleDeleteWorkingDiary = {handleDeleteWorkingDiary}
              handleAddWorkingPiece = {handleAddWorkingPiece}
              handleDeleteWorkingPiece = {handleDeleteWorkingPiece}

          />
            
            <AddWorkingDiary
              handleAddWorkingDiary = {handleAddWorkingDiary}
              
              /> 

          

      </div>
    )
  }



export default App;
