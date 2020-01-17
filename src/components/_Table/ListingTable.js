import React from "react";
import { connect } from "react-redux";
import { isObject } from "../../utils";
import { ModalBtn } from "../Modals";

const CustomTd = ({data, emp_id}) => {
    if(!data)
        return <td></td>;

    const style={
        fontSize: '14px'
    };
    return (
        <td>
            <div className="d-flex justify-content-between">
            <div>
            {   
                Object.keys(data).map(key => 
                    <div style={style}><label>{key}</label> : <span>{data[key]}</span></div>

                    )
            }
            </div>
            <div>
                <ModalBtn
                    name={'Modal'}
                    target= {'#view-modal'}
                    emp_id={emp_id}
                    />
            </div>
            </div>
        </td>
    )
}

export function ListingTable({data}) {
    if(!data)
        return <div>TableError</div>
    if(data.constructor !== Array)
        return <div>TableError</div>
    if(data.length<1)
        return <div>TableError</div>

    const tableHeadings = Object.keys(data[0]);

    return (
        <div className="table-responsive" style={{maxWidth: '1300px'}}>
        <table className="table table-bordered table-md-sm">
            <thead style={{backgroundColor: '#5bc0de'}}>
                <tr>
                {
                    tableHeadings.map(head => <th scope="col">{head}</th>)
                }
                </tr>
            </thead>
            <tbody>
                {
                    data.map(item => 
                        <tr key={item._id}>
                            {Object.values(item).map(val => { 
                                if(isObject(val))
                                    return <CustomTd data={val} emp_id={item._id} />;
                                return <td>{String(val)}</td>;
                            })}
                        </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    )
}

