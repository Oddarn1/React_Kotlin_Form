import React from 'react';
import AnswerList from "../Answers/AnswerList";
import {Loading} from "../Loading/Loading";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const AnswerInfo = (props) => {
    const [answer, setAnswer] = React.useState(Object);
    const [loading,setLoading]=React.useState(false);
    const [error,setError]=React.useState(null);

    async function fetchAnswers() {
        const { match: { params } } = props;
        setLoading(true);
        try {
            const response = await fetch(
                `http://localhost:5000/api/forms/${params.formId}`
            );
            const data = await response.json();
            setAnswer(data);
            setLoading(false);
        } catch (err) {
            if (err.name !== "AbortError") {
                setError("Noe gikk galt");
                setLoading(false);
            }
        }
    }

    React.useEffect(()=>{
        setLoading(true);
        fetchAnswers();
    },[]);

    return (
        <div>
            {error}
            {loading&&<Loading/>}
            {!loading&&
            <div>
                Navn: {answer.name} <br/>
                Epost: {answer.email} <br/>
                Telefon: {answer.phone} <br/>
                Postnummer: {answer.areacode} <br/>
                Kommentar: {answer.comment} <br/>
            </div>}
            <Link to={"/answers"}>
                <Button variant={"contained"}>Tilbake til svar</Button>
            </Link>
        </div>
    )
};

export default AnswerInfo;