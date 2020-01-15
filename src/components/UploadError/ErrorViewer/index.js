import React from 'react'
import { generateColName } from './utils'

const errorData1=[
    [{error:'Invalid entry',value:'dfg'} ],
    [undefined,{error:'',value:'dfg'},undefined,undefined],
    [undefined,undefined,undefined,undefined],
    [{error:'Invalid entry',value:'fg'},undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,{error:'Invalid entry',value:'dfdfg'}]
]

const errorData2={
    'A1':{
        error:'Invalid entry',value:'dfg'
    },
    'A4':{
        error:'Invalid entry',value:'fg'
    },
    'D7':{
        error:'Invalid entry',value:'dfdfg'
    },
    'D23':{
        error:'Missing value',value:null
    }
}

function getErrorByIndex(error_data,row_index,col_index) {
    if(error_data[row_index]!==undefined && error_data[row_index][col_index]!==undefined && error_data[row_index][col_index]!==null)
    {
        if(error_data[row_index][col_index].error.length!=0)
        {
            return(
                <td style={{color:'#fff',backgroundColor:'red',padding:'1px 30px 1px 30px',border:'2px solid' }}>
                    <span>
                    {generateColName(col_index)}{row_index+1}<br/>
                    {error_data[row_index][col_index].error}
                    </span>
                </td>
            )
        }
        else{
            return(
             
                <td style={{color:'#000',backgroundColor:'#d8dee9',padding:'1px 30px 1px 30px',border:'2px solid' }}>
                    <span>
                    {generateColName(col_index)}{row_index+1}<br/>
                     
                    </span>
                </td>
                )

        }
         
    }

    else{
        return(
             
        <td style={{color:'#000',backgroundColor:'#d8dee9',padding:'1px 30px 1px 30px',border:'2px solid' }}>
            <span>
            {generateColName(col_index)}{row_index+1}<br/>
             
            </span>
        </td>
        )
    }

}

function getErrorByCellName(error_data,cell_name) {
    
    if(error_data[cell_name]!==undefined)
    {
        if(error_data[cell_name].error.length!=0)
        {
            return(
                <td style={{color:'#fff',backgroundColor:'red',padding:'1px 30px 1px 30px',border:'2px solid' }}>
                    <span>
                    {cell_name}<br/>
                    {error_data[cell_name].error}
                    </span>
                </td>
            )
        }
        else{
            return(
                <td style={{color:'#000',backgroundColor:'#d8dee9',padding:'1px 30px 1px 30px',border:'2px solid' }}>
                <span>
                {cell_name}<br/>
                 
                </span>
            </td>
            )
        }
         
    }

    else{
        return(
             
        <td style={{color:'#000',backgroundColor:'#d8dee9',padding:'1px 30px 1px 30px',border:'2px solid' }}>
            <span>
            {cell_name}<br/>
             
            </span>
        </td>
        )
    }
 
}

function ErrorViewer({ baseData ,wbTypes }) {
    return (
        <div>
            <table   style={{ margin: 10 }}>
            {
                baseData.map((row, row_index) => {
                    return(
                        <tr key={row_index}>

                        {
                            row.map((col, col_index) => {


                                
                                
                  
                                    {/* <span>{generateColName(col_index)}{row_index + 1}<br/>{baseData[row_index][col_index]}</span>
                                      */}
                                     return getErrorByCellName(errorData2,`${generateColName(col_index)}${row_index+1}`)
                                 
                                // return getErrorByIndex(errorData1,row_index,col_index)



                            })
                        }
                    </tr>
                    )

                })
            }
        </table> 
        <div>
        {wbTypes!==null?
            Object.keys(wbTypes).map((key)=>{
                return(
                <span style={{margin:10}}>{wbTypes[key]===undefined?null:`${key} : ${wbTypes[key].t}`} </span>
                )
            })
            :
            null
        }
        </div>
        </div>
    )
}

export default ErrorViewer
