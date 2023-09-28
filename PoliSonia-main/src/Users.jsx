import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([])
    


    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users')
            .then(data => {
                // console.log(data.data)
                setUsers(data.data)
                
            })
            .catch(e => {
                
                console.log('Ошибка', e.message);
            })
    }, [])
    return (
        <div className="users">

            {/* <Outlet /> */}
            <div>
                {users.length > 0 ? <>
               
                    {users.map((el, id) => (
                        <div className="user" key={id}>
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">{el.name} {el.surname} {el.thirname}</h5>
                                    <p className="card-text">Почта: {el.email}</p>
                                    <p className="card-text">Телефон: {el.phone}</p>
                                    <a href="#" className="btn btn-primary">Подробнее</a>
                                </div>
                            </div>,

                            

                            

                        </div>
                    ))}{ }
                </> : 'Пусто'}



            </div>
        </div>
        
    )
}