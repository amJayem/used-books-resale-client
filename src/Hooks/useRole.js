import { useEffect, useState } from 'react';
import axios  from 'axios';

const useRole = (email) => {
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        axios.get(`http://localhost:5000/user?email=${email}`,{
            // headers:{
            //     authorization: `bearer ${localStorage.getItem('token')}`
            // }
        })
        .then(result =>{
            // console.log(result.data.role.toLowerCase());
            if(result.data.role)
            {
                setRole(result.data?.role.toLowerCase());
            }
            else setRole('buyer');
            setIsLoading(false);
        })
    },[email])
    return [role, isLoading];
};

export default useRole;