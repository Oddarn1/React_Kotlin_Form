import React from 'react';

const Form = () =>{
    const [name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [phone,setPhone]=React.useState("");
    const [areacode,setAreacode]=React.useState("");
    const [comment,setComment]=React.useState("");
    const [error,setError]=React.useState(null)

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
            setError("Klarte ikke oppdatere, vennligst prøv igjen")
        }else {
            resetFields()
        }
    };

    return (
        <div>
            <label>
                Navn:
                <br/>
                <input type={"text"} onChange={e=>setName(e.target.value)} value={name} placeholder={"Ola Nordmann"}/>
            </label>
            <br/><br/>
            <label>
                Epost:
                <br/>
                <input type={"email"} onChange={e=>setEmail(e.target.value)} value={email} placeholder={"navn@domene.no"}/>
            </label>
            <br/><br/>
            <label>
                Telefon:
                <br/>
                <input type={"tel"} onChange={e=>setPhone(e.target.value)} value={phone} placeholder={"XXX XX XXX"}/>
            </label>
            <br/><br/>
            <label>
                Postnummer:
                <br/>
                <input type={"number"} onChange={e=>setAreacode(e.target.value)} value={areacode} max={"9999"} placeholder={"1234"}/>
            </label>
            <br/><br/>
            <label>
                Kommentar:
                <br/>
                <textarea onChange={e=>setComment(e.target.value)} value={comment}/>
            </label>
            <br/><br/>
            {error}
            <br/>
            <button onClick={submit}>
                Submit
            </button>
        </div>
    )
};

export default Form;
