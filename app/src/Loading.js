import React from 'react';

export const Loading = Component => loading => (
    <div>
        {loading?"Loading...":<Component/>}
    </div>
);