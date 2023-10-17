import { combineReducers, legacy_createStore as createStore } from 'redux'
import { frameReducer, FramesActionsT } from '../features/Frame/frame-reducer'

const rootReducer = combineReducers({
  frame: frameReducer,
})

export const store = createStore(rootReducer)

// Types
export type AppRootStateT = ReturnType<typeof rootReducer>
export type AppRootActionsT = FramesActionsT


// @ts-ignore
window.store = store