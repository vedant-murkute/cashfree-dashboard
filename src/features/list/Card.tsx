import { useAppDispatch } from "../../app/hooks"
import { deleteCard } from "../collection/collectionSlice"
import styles from "./card.module.css"
import { IoCloseSharp } from "react-icons/io5"

export const Card = ({ card, listId }) => {
  const dispatch = useAppDispatch()

  const handleDeleteCard = () => {
    dispatch(deleteCard({ listId: listId, cardId: card.cardId }))
  }

  return (
    <div className={styles.container}>
      <div>
        <span>{card.cardTitle}</span>
        <button onClick={handleDeleteCard} className="iconButtonContainer">
          <IoCloseSharp size={20}></IoCloseSharp>
        </button>
      </div>
      <p>{card.cardDescription}</p>
    </div>
  )
}
