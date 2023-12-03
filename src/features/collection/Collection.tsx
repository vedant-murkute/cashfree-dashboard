import { selectListIds } from "./collectionSlice"
import { List } from "../list/List"
import { useAppSelector } from "../../app/hooks"
import styles from "./collection.module.css"
import { CollectionInput } from "./CollectionInput"
import { shallowEqual } from "react-redux"

export const Collection = () => {
  const listIds = useAppSelector(selectListIds, shallowEqual)

  return (
    <div className={styles.container}>
      {listIds.map((listId) => (
        <List key={listId} listId={listId}></List>
      ))}
      <CollectionInput />
    </div>
  )
}
