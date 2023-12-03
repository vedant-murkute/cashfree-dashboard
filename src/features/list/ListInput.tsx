import React, { useState } from "react"
import styles from "./list.module.css"
import { useAppDispatch } from "../../app/hooks"
import { addCard } from "../collection/collectionSlice"

export const ListInput = ({ list }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const dispatch = useAppDispatch()

  const handleAddCard = () => {
    if (title && description) {
      dispatch(
        addCard({
          listId: list.listId,
          cardTitle: title,
          cardDescription: description,
        }),
      )
      setTitle("")
      setDescription("")
    } else {
      alert("Please enter title and description")
    }
  }
  return (
    <div className={styles.inputContainer}>
      <input
        required
        placeholder="add title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      ></input>
      <input
        placeholder="add description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
      ></input>
      <button className="buttonContainer" onClick={handleAddCard}>
        Add Card
      </button>
    </div>
  )
}
