
import { useState } from 'react';
import { useParams } from 'react-router';

const Info = ({Service}) => {
    const {infoId, productInfo} = useParams();
    const {name , img} = useState();

    return (
        <div>
            <h2>this is info: {infoId}</h2>
            <h3>{name}</h3>
        </div>
    );
};

export default Info;