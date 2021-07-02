import React from 'react'
import {useSelector} from 'react-redux'
import Contact from './Contact'

const Contacts = () => {
    const contat = useSelector(state => state.contact.contacts)

    return (
        <div className="container py-5">
            <table className="table">
            <thead>
            <tr>
                <th>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck"  />
                        <label className="custom-control-label" for="customCheck"></label>
                    </div>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                    contat.map(contact => <Contact contact={contact}/>)
                }
            
            
            </tbody>
        </table>
        </div>
    )
}

export default Contacts
