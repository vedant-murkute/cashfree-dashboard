import React, { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { addList } from "./collectionSlice"
import styles from "./collection.module.css"

export const CollectionInput = () => {
  const [text, setText] = useState("")

  const dispatch = useAppDispatch()

  const handleAdd = () => {
    if (text) {
      dispatch(addList(text))
      setText("")
    } else {
      alert("Please enter title")
    }
  }

  return (
    <div className={styles.inputContainer}>
      <div>
        <input
          required
          placeholder="Enter List Title"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button className="buttonContainer" onClick={handleAdd}>
          Add List
        </button>
      </div>
    </div>
  )
}
