import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editContact, updateContact} from '../../action/ContactAction'
import {useHistory, useParams} from 'react-router-dom'

const EditContact = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const histry = useHistory()

    const updContact = useSelector(state => state.contact.updcontact)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    useEffect(() => {
        if(updContact != null){
            setName(updContact.name)
            setEmail(updContact.email)
            setPhone(updContact.phone)
        }
        dispatch(editContact(id))
    }, [updContact])
    
    const updateCont = (e) => {
        e.preventDefault()
        const updCont = Object.assign(updContact, {name: name, email: email, phone: phone})
        dispatch(updateContact(updCont))
        histry.push("/")
    }

    return (
            <div className="card w-50 my-5 p-3 container">
                <form onSubmit={updateCont}>
                <div className="form-group ">
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter name" />
                </div>
                <div className="form-group mt-3">
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group mt-3">
                    <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter mobile number" />
                </div>
                <button type="submit" className="mt-3 btn btn-warning">Update Contact</button>
                </form>
            </div>
    )
}

export default EditContact
