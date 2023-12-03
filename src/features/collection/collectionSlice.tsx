import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { v4 as uuidv4 } from "uuid"

export interface Card {
  cardId: string
  cardTitle: string
  cardDescription: string
}

export interface ListState {
  listId: string
  listTitle: string
  cards: Card[]
}

export interface CollectionState extends Array<ListState> {}

const initialState: CollectionState = []

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addList: (state, action) => {
      return [
        ...state,
        {
          listId: uuidv4(),
          listTitle: action.payload,
          cards: [],
        },
      ]
    },
    deleteList: (state, action) => {
      return state.filter((list) => list.listId !== action.payload)
    },
    addCard: (state, action) => {
      return state.map((list) => {
        if (list.listId === action.payload.listId) {
          return {
            ...list,
            cards: [
              ...list.cards,
              {
                cardId: uuidv4(),
                cardTitle: action.payload.cardTitle,
                cardDescription: action.payload.cardDescription,
              },
            ],
          }
        } else return list
      })
    },
    deleteCard: (
      state,
      action: PayloadAction<{ listId: any; cardId: any }>,
    ) => {
      return state.map((list) => {
        if (list.listId === action.payload.listId) {
          return {
            ...list,
            cards: list.cards.filter(
              (card) => card.cardId !== action.payload.cardId,
            ),
          }
        }
        return list
      })
    },
  },
})

export const { addList, addCard, deleteList, deleteCard } =
  collectionSlice.actions

// Selector to get the list ids
export const selectListIds = (state: RootState) =>
  state.collection.map((list) => list.listId)

//selector to get list from id
export const selectListById = (state, listId) => {
  return state.collection.find((list) => list.listId === listId)
}

export default collectionSlice.reducer
