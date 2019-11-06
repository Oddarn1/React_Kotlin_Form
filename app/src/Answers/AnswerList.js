import React from 'react';

const AnswerList = (props) => {
    if (props.answers){
        return (
            <ul>
                {props.answers.map(p=><li>p.name</li>)}
            </ul>
        )
    }
    return <div>Failed</div>
};

export default AnswerList