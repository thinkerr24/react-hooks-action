import {useState, useEffect} from 'react';

export default function useUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://api.randomuser.me/?nat=US&results=3") // 3 denotes that generating 2 users.
            .then(res => res.json())
            .then(json => setUsers(json.results));
    }, []);

    return users; // array or object 
}