import React from "react";


const Table = ({data}) => {
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
                            {Object.values(item).map(val => <td>{String(val) || JSON.stringify(val)}</td>)}
                        </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    )
}

export default Table;