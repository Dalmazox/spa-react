import React from 'react'
import Axios from 'axios'

import { Contact } from '../Contact'
import ContactModel from '../../models/contact'

const ContactList: React.FC = () => {
  const [contacts, setContacts] = React.useState<ContactModel[]>([])
  const [filteredContacts, setFilteredContacts] = React.useState<ContactModel[]>([])
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  const onLabelClick = () => searchInputRef.current?.focus()
  const onInputChange = () => {
    if (!contacts) return

    const searchedValue = searchInputRef.current?.value.toLowerCase()
    if (!searchedValue) {
      setFilteredContacts(contacts)
      return
    }

    const matches = contacts.filter((x) => x.name.toLowerCase().includes(searchedValue))

    if (matches) setFilteredContacts(matches)
  }

  React.useEffect(() => {
    const initialFunction = async () => {
      const response = await Axios.get('https://jsonplaceholder.typicode.com/users')
      const data = response.data as ContactModel[]
      setContacts(data)
      setFilteredContacts(data)
    }

    initialFunction()
  }, [])

  return (
    <main className='w-full h-full'>
      <div className='px-4 md:px-0 container py-4 mx-auto h-full flex flex-col'>
        <div className='w-full pt-8'>
          <label className='text-xl block text-white font-bold mb-2' onClick={onLabelClick}>
            Search for contact
          </label>
          <input onChange={onInputChange} ref={searchInputRef} type='text' placeholder='Type searched contact' className='w-full bg-gray-200 text-xl py-4 px-6 text-gray-600 rounded shadow' />
        </div>
        <div className='w-full mt-8 grid grid-cols-1 md:grid-cols-4 gap-4'>
          {filteredContacts.map((contact) => (
            <Contact email={contact.email} name={contact.name} phone={contact.phone} key={contact.id} />
          ))}
        </div>
      </div>
    </main>
  )
}

export { ContactList }
