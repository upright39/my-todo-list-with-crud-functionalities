import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ myItems, deleteItem, editItems }) => {
  return (
    <div className="grocery-list">
      {myItems.map((item) => {
        const { id, items } = item
        return (
          <article key={id} className="grocery-item">
            <p className="title">{items}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItems(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => deleteItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
