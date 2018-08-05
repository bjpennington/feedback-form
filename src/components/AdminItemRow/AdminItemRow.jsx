import React from 'react';

const AdminItemRow = (props) => {
    return (
        <tr>
            <td>
                {props.feedback.feeling}
            </td>
            <td>
                {props.feedback.understanding}
            </td>
            <td>
                {props.feedback.support}
            </td>
            <td>
                {props.feedback.comments}
            </td>
            <td>
                <button>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default AdminItemRow;