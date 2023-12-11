import React, { useEffect, useState } from 'react'
import "./FollowersList.css"
import axios from "axios"
import { Link } from 'react-router-dom';

// changed to customHook  to comply with the  Single responsability principle SOLID
// function useFollowers() {
//     const [followers, setFollowers] = useState([]);
//     useEffect(() => {
//         fetch("https://randomuser.me/api/?results=5")
//             .then(async (res) => {
//                 if (!res.ok) throw Error(`Http status:  ${res.status}`);
//                 return await res.json();
//             })
//             .then((res) => {
//                 setFollowers(res.results);
//             })
//             .catch((err) => {
//                 console.log(`ERROR:${err}`);
//             });
//     }, []);
//     return { followers };
// }
export default function FollowersList() {
    //const { followers } = useFollowers()

    const [followers, setFollowers] = useState([]);

    useEffect(() => {

        const fetchFollowers = async () => {
            const { data } = await axios.get("https://randomuser.me/api/?results=5")

            setFollowers(data.results)
        }

        fetchFollowers()
    }, []);


    return (
        <div className="followerslist-container">
            <div>
                {followers.map((follower, index) => (
                    <div className="follower-item" data-testid={`follower-item-${index}`} key={`follower-item-${index}`}>
                        <img src={follower.picture.large} />
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="todo-footer">
                {/* <Link to="/">Go Back</Link> */}
            </div>
        </div>
    )
}
