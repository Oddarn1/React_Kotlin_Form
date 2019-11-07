import React from 'react';
import AnswerList from './AnswerList';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const Answers = () => {
    const [answers, setAnswers] = React.useState([]);
    const [loading,setLoading]=React.useState(false);
    const [error,setError]=React.useState(null);

    async function fetchAnswers() {
        setLoading(true);
        try {
            const response = await fetch(
                "http://localhost:5000/api/forms"
            );
            const data = await response.json();
            setAnswers(data);
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
        <div style={{width:"100%"}}>
            {error}
            <AnswerList answers={answers} loading={loading}/>
            <Link to={"/form"}>
                <Button variant={"contained"} style={{marginTop:"3%"}}>
                    Til skjema
                </Button>
            </Link>

        </div>
    )
};

export default Answers