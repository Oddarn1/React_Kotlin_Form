import React from 'react';
import {Loading} from "../Loading/Loading";
import {Link} from 'react-router-dom';

const AnswerList = (props) => {
    if (props.loading){
        return (
            <Loading/>
        )
    }
    return (
        <table>
            <tr>
                <th>Navn</th>
                <th>Epost</th>
                <th>Telefon</th>
                <th>Postnummer</th>
                <th>Kommentar</th>
            </tr>
            {props.answers.map(p=><TableRow obj={p}/>)}
        </table>
    )
};

export default AnswerList

const TableRow = (props) =>(
    <tr>
        <Link to={`/answer/${props.obj.id}`}>
            <td>{props.obj.name}</td>
            <td>{props.obj.email}</td>
            <td>{props.obj.phone}</td>
            <td>{props.obj.areacode}</td>
            <td>{props.obj.comment}</td>
        </Link>
    </tr>

);
