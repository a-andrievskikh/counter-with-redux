import { combineReducers, legacy_createStore as createStore } from 'redux'
import { counterReducer } from 'features/Frame/counter-reducer'
import { restoreState, saveState } from 'utils/local-storage'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = createStore(
  rootReducer,
  restoreState(
    'values',
    createStore(rootReducer).getState(),
  ),
)

// Types
export type AppRootState = ReturnType<typeof rootReducer>
// export type AppRootActionsT = FrameActionsT

store.subscribe(() => {
  saveState('values', store.getState())
})


// @ts-ignore
window.store = store