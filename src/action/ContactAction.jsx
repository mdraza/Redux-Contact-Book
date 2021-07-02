import {ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, UPDATE_CONTACT} from '../type/Type'

export const addContact = (contact) => ({
    type: ADD_CONTACT,
    payload: contact
})

export const editContact = (id) => ({
    type: EDIT_CONTACT,
    payload: id
})

export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact
})

export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
})



