import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import serviceData from 'services.json';
const Info = () => {
    const {infoId} = useParams();
    console.log('infoId',infoId)
    const [info, setInfo] = useState([]);
    console.log('info',info.id);
    console.log('info',info);
    const infoDetail = info.find(inf => inf.id === infoId);
    
    useEffect(()=>{
        fetch('https://sudiptaadhikaryjoy.github.io/Football-Dashboard/services.json')
        .then(res => res.json())
        .then(data => setInfo(data));
    },[])

    return (
        <div>
            <h2>this is info: {infoDetail?.name}</h2>  
        </div>
    );
};

export default Info;