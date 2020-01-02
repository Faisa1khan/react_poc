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

function ListingComponent({data,attributes,paginationContext}) {
    return(
        <Table>
              
            <thead>
                <tr>
                {
                attributes.map((item,index)=>{
                    return(
                    <th key={index}>{item}</th>
                    )
                })
            }
                </tr>
            </thead>
            <tbody>
                {getPageItems(data,paginationContext).map((item)=>{
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
                                            <DetailsSection details={item[attr]} />
                                                
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

export default ListingComponent;