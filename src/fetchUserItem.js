// import axios                   from 'axios';
// import { useState, useEffect } from 'react';
// import api                     from './api';
// import url                     from './url';

// export default function FetchUserItem () {
//     const [ userItem, setUserItem ] = useState('');
//     const email = api.verifyUser().then( res => {
//         return res.data.email
//     }).catch(err => { console.log(err) })
    
//     useEffect((email) => {
//         axios.post(`${url}/getItem`).then(res => {
//             const items = res.data.payload
//             setUserItem(items)
//         }).catch(err => {
//             console.log(err)
//         })
//     }, [userItem])

//     return [ userItem, setUserItem ]
// }