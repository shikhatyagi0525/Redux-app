import React, { useEffect, useState } from 'react';
import { fetchPosts } from './redux/action'
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    const [usr, showusr] = useState(null);
    let users;
    useEffect(() => {
        if (!usr) {
            (async () => {
                users = await dispatch(fetchPosts());
                showusr(users);
                console.log(usr);
            })();
        }

    }, [usr]);
    return (
        <>
            <ul>
                {
                    usr ? usr.map((item) => {
                        return (<li key={item.id}>
                            {item.title}
                        </li>)
                    }) : ''
                }
            </ul>
        </>


    );
}

export default App;