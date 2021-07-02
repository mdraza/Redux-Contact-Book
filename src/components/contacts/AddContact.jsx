import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addContact} from '../../action/ContactAction'
import {useHistory} from 'react-router-dom'
import shortid  from 'shortid'

const AddContact = () => {
    const dispatch = useDispatch()
    const histry = useHistory()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const createContact = (e) => {
        e.preventDefault()
        const create_contact = {
            id: shortid.generate(),
            name: name,
            email: email,
            phone: phone
        }
        dispatch(addContact(create_contact))
        histry.push("/")
    }

    return (
            <div className="card w-50 my-5 p-3 container">
                <form onSubmit={createContact}>
                <div className="form-group ">
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter name" />
                </div>
                <div className="form-group mt-3">
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group mt-3">
                    <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter mobile number" />
                </div>
                <button type="submit" className="mt-3 btn btn-primary">Add Contact</button>
                </form>
            </div>
    )
}

export default AddContact
