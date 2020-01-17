import React from "react";

export function Table({data}) {
    if(!data)
        return <div>TableEmpty</div>
    if(data.constructor !== Array)
        return <div>Data Invalid</div>
    if(data.length<1)
        return <div>Data Empty</div>

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
                    data.map((item, id) => 
                        <tr key={item._id || id}>
                            {Object.values(item).map(val => { 
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
