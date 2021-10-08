import React, { Component } from 'react'

class AlpStyleSelect extends Component {
    render() {
        const {labelText,setTimePeriod,timePeriodList} = this.props;
        
        return (
            
               <div className="row">
                    <label htmlFor="workingPieceTimePeriod">{labelText}</label>
                    <select name="timePeriod" id="workingPieceTimePeriod" onChange={(event) => setTimePeriod(event.target.value)}>
                    {
                        timePeriodList.map((timePeriod, idx) =>{
                            return <option value={timePeriod.key} key={idx+'_'}>{timePeriod.value}</option>
                        })
                    }
                    </select>
               </div>
         
        )
    }
}
export default AlpStyleSelect;