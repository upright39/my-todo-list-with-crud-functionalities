import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [inputCatch, setInputCatch] = useState('')
  const [inputShow, setInputShow] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editInputId, setEditInputId] = useState(null)
  const [myAlert, setMyAlert] = useState({
    show: false,
    type: '',
    msg: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!inputCatch) {
      showAlert(true, 'danger', 'please enter something')
    } else if (inputCatch && isEditing) {
      setInputShow(
        inputShow.map((item) => {
          if (item.id === editInputId) {
            return { ...item, items: inputCatch }
          }
          return item
        }),
      )

      setInputCatch('')
      setIsEditing(null)
      setEditInputId(false)
      showAlert(true, 'danger', 'Editted successfully')
    } else {
      showAlert(true, 'success', 'added one item successfully')
      const newItem = { id: new Date().getTime().toString(), items: inputCatch }
      setInputShow((shows) => {
        return [...shows, newItem]
      })
      setInputCatch('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setMyAlert({ show, type, msg })
  }

  const clearItem = () => {
    showAlert(true, 'danger', 'you have cleared items successfully')
    setInputShow([])
  }
  const deleteIndivItem = (id) => {
    showAlert(true, 'danger', 'you have deleted successfully')
    setInputShow(inputShow.filter((item) => item.id !== id))
  }
  const editItem = (id) => {
    const specificItem = inputShow.find((item) => item.id === id)
    setIsEditing(true)
    setEditInputId(id)
    setInputCatch(specificItem.items)
  }
  return (
    <section className="section-center">
      <form className="grocery-form">
        <div>
          {myAlert.show && (
            <Alert
              {...myAlert}
              inputShowProp={inputShow}
              removeAlert={showAlert}
            />
          )}
          <h2>uprights Todo</h2>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="e.g eggs :"
            className="grocery"
            value={inputCatch}
            onChange={(e) => setInputCatch(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            {isEditing ? 'Edit' : 'submit'}
          </button>
        </div>
      </form>
      {inputShow.length > 0 && (
        <div className="grocery-container">
          <List
            myItems={inputShow}
            deleteItem={deleteIndivItem}
            editItems={editItem}
          />
          <button className="clear-btn" onClick={clearItem}>
            clear all items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
