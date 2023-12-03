import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { deleteList, selectListById } from "../collection/collectionSlice"
import { Card } from "./Card"
import { IoCloseSharp } from "react-icons/io5"
import { ListInput } from "./ListInput"

import styles from "./list.module.css"

export const List = ({ listId }) => {
  const list = useAppSelector((state) => selectListById(state, listId))
  const dispatch = useAppDispatch()

  const handleDeleteList = (id) => {
    dispatch(deleteList(id))
  }

  return (
    <div className={styles.container}>
      <div className={styles.listHeader}>
        <span>{list.listTitle}</span>
        <button
          onClick={() => {
            handleDeleteList(list.listId)
          }}
          className="iconButtonContainer"
        >
          <IoCloseSharp size={20}></IoCloseSharp>
        </button>
      </div>
      <div className={styles.cardList}>
        {list.cards.map((card) => (
          <Card listId={list.listId} key={card.cardId} card={card}></Card>
        ))}
        <ListInput list={list}></ListInput>
      </div>
    </div>
  )
}
