import React from 'react';
import {Loading} from "../Loading/Loading";
import AnswerList from './AnswerList';

const Answers = () => {
    const [answers, setAnswers] = React.useState([]);
    const [loading,setLoading]=React.useState(false);
    const [error,setError]=React.useState(null);

    React.useEffect(()=>{
        setLoading(true);
        fetch("http://localhost:5000/api/forms")
            .then(r=>r.json())
            .then(r=>{setLoading(false);setAnswers(r.data)})
            .catch(()=>{setLoading(false);setError("Failed to load. Please try again")})
    },[]);

    return (
        <div>
            {error}
            <Loading loading={loading}>
                <AnswerList answers={answers}/>
            </Loading>
        </div>
    )
};

export default Answers