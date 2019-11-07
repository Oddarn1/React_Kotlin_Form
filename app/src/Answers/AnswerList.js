import React from 'react';
import {Loading} from "../Loading/Loading";
import './AnswerList.css'
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import History from '../History/History'

const AnswerList = (props) => {
    if (props.loading){
        return (
            <Loading/>
        )
    }
    return (
        <Paper>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align={"right"}>Navn</TableCell>
                        <TableCell align="right">Epost</TableCell>
                        <TableCell align="right">Telefon</TableCell>
                        <TableCell align="right">Postnummer</TableCell>
                        <TableCell align="right">Kommentar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.answers.map(p=><TableRowMap obj={p}/>)}
                </TableBody>
            </Table>
        </Paper>
    )
};

export default AnswerList

const TableRowMap = (props) =>(
        <TableRow key={props.obj.id} onClick={()=>toForm(props.obj.id)} className={"tableRow"}>
            <TableCell component="th" scope="row"> {props.obj.id}</TableCell>
            <TableCell align={"right"}>{props.obj.name}</TableCell>
            <TableCell align="right">{props.obj.email}</TableCell>
            <TableCell align="right">{props.obj.phone}</TableCell>
            <TableCell align="right">{props.obj.areacode}</TableCell>
            <TableCell align="right">{props.obj.comment}</TableCell>
        </TableRow>
);

const toForm=(id)=>{
    History.push("/answer/"+id)
};
