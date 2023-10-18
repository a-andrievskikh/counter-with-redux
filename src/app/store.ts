import { combineReducers, legacy_createStore as createStore } from 'redux'
import { frameReducer, FrameActionsT } from '../features/Frame/frame-reducer'
import { restoreState, saveState } from '../utils/local-storage'

const rootReducer = combineReducers({
  frame: frameReducer,
})

export const store = createStore(
  rootReducer,
  restoreState(
    'values',
    createStore(rootReducer).getState(),
  ),
)

// Types
export type AppRootStateT = ReturnType<typeof rootReducer>
export type AppRootActionsT = FrameActionsT

store.subscribe(() => {
  saveState('values', store.getState())
})


// @ts-ignore
window.store = store