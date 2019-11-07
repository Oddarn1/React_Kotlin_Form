import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './Form.css'
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";

const Form = () =>{
    const [name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [phone,setPhone]=React.useState("");
    const [areacode,setAreacode]=React.useState("");
    const [comment,setComment]=React.useState("");
    const [error,setError]=React.useState(null);

    const resetFields=()=>{
        setName("");
        setEmail("");
        setPhone("");
        setAreacode("");
        setComment("");
    };

    const submit = async () => {
        const obj=JSON.stringify({
            "name":name,
            "email":email,
            "phone":phone,
            "areacode":areacode,
            "comment":comment
        });
        const resp=await fetch("http://localhost:5000/api/forms",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:obj,
        });
        if (resp.status!==200){
            console.log(resp);
            setError("Klarte ikke oppdatere, vennligst prøv igjen")
        }else {
            setError(null);
            resetFields()
        }
    };

    return (
        <div className={"form"}>
            <div className={"centering"}>
            <TextField type={"text"}
                       onChange={e=>setName(e.target.value)}
                       className={"textField"}
                       value={name}
                       label={"Navn"}
                       placeholder={"Ola Nordmann"}
                       margin="normal"
                       variant="outlined"/>
            <br/><br/>
            <TextField type={"email"}
                       onChange={e=>setEmail(e.target.value)}
                       className={"textField"}
                       value={email}
                       label={"Epost"}
                       placeholder={"navn@domene.no"}
                       margin="normal"
                       variant="outlined"/>
            <br/><br/>
            <TextField type={"tel"}
                       onChange={e=>setPhone(e.target.value)}
                       className={"textField"}
                       label={"Telefon"}
                       value={phone}
                       placeholder={"XXX XX XXX"}
                       margin="normal"
                       variant="outlined"/>
            <br/><br/>
            <TextField type={"number"}
                       label={"Postnummer"}
                       onChange={e=>setAreacode(e.target.value)}
                       className={"textField"}
                       value={areacode}
                       max={"9999"}
                       min={"0000"}
                       margin="normal"
                       variant="outlined"
                       placeholder={"1234"}/>
            <br/><br/>
            <TextField onChange={e=>setComment(e.target.value)}
                       className={"textField"}
                       value={comment}
                       label={"Kommentar"}
                       multiline
                       margin="normal"
                       variant="outlined"/>
            <br/><br/>
            <Typography variant={"body1"} style={{color:"#DD2222"}}>
                {error}
            </Typography>
            <br/>
            <div className={"buttonDiv"}>
                <Button onClick={submit}
                        className={"button"}
                        variant={"contained"}>
                    Send inn
                </Button>
                <Link to={"/answers"} className={"link"}>
                    <Button href={"button"}
                            className={"button"}
                            variant={"contained"}>
                        Til svar
                    </Button>
                </Link>
            </div>
            </div>
        </div>
    )
};

export default Form;
