import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import DetailsSection from './DetailComponent';

{
    /*
        Taking data and column names attributes as props
    */
}

function getPageItems(data,context)
{
    return data.slice(context.firstItemIndex,context.lastItemIndex+1)
}


//Create a context for user object passed in details component as it will be used in modal component as well

function ListingComponent({filter,filtered_data,attributes,paginationContext}) {
    return(
        <Table >

            <thead>
                <tr>
                {
                attributes.map((item,index)=>{
                    return(
                    <th key={index}>
                        {item=='ctc'?<span>CTC<span>
                             
                        </span></span>:item}
                    </th>
                    )
                })
            }
                </tr>
            </thead>
            <tbody>
                {getPageItems(filtered_data,paginationContext).map((item)=>{
                    return(
                      <tr key={item._id}>
                          {
                              Object.keys(item).map((attr)=>{
                                return(
                                    <td key={attr}>
                                        {
                                            typeof(item[attr])!=='object'?
                                                item[attr]
                                            :
                                            <DetailsSection user={item} details={item[attr]} />
                                                
                                        }
                                    </td>
                                )
                                })
                          }
                      </tr>  
                    )
                })}
            </tbody>
        </Table>
    )
}

// const mapStateToProps=(store)=>{
//     return{
//         data:
//     }
// }

export default ListingComponent;