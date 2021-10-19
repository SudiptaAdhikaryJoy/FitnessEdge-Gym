import React, { useState } from 'react';
import { useParams } from 'react-router';

const Info = ({service}) => {
    const {infoId, name} = useParams();
    // const {name , img} = useState();

    return (
        <div>
            <h2>this is info: {infoId}</h2>
            <h3>{name}</h3>
        </div>
    );
};

export default Info;