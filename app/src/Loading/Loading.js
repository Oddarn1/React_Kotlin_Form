import React from 'react';

export const Loading = (props) => Comp => (
    <div>
        {props.loading?<div>Loading...</div>:<Comp/>}
    </div>
);