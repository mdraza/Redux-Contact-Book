import React from 'react'
import Avatar from 'react-avatar'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deleteContact} from '../../action/ContactAction'

const Contact = (props) => {
    const dispatch = useDispatch()
    const {id,name, email, phone} = props.contact
    return (
        <tr key={id}>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck"  />
                    <label className="custom-control-label" for="customCheck"></label>
                </div>
            </td>
            <td><Avatar style={{marginRight: '10px'}} size="55px" round={true} name={name}/>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
            <Link to={`/contact/editcontact/${id}`}><i className="material-icons text-primary">edit</i></Link> &nbsp;
            <a href="#" onClick={() => dispatch(deleteContact(id))}><i className="material-icons text-danger">delete</i></a>
            </td>
        </tr>
    )
}

export default Contact
