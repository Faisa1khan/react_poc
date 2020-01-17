import React from "react";
import { isObject } from "../../utils";

// id used by modal btn
export function ViewModal({id='', data={}}){
    return (
        <div class="modal fade" id={id} tabIndex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id={`${id}Label`}>Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {isObject(data) && Object.keys(data).map((key, i) => {
                        return <div key={i} className="d-flex justify-content-between"><label>{key}</label><span>{data[key]}</span></div>
                    })}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
}