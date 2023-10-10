// save data to local storage
export const saveState = <T>(key: string, state: T) =>
  localStorage.setItem(key, JSON.stringify(state))


// get local storage data
export const restoreState = <T>(key: string, defaultState: T) => {
  let state = defaultState
  const stateAsString = localStorage.getItem(key)
  if (stateAsString !== null) state = JSON.parse(stateAsString) as T
  return state
}

// ---------------------------------------------------------------------------------------------------------------
// пример использования:
/*
type StateType = {
    x: string
    y: number
}

// сохраняем объект типа StateType в ячейке 'test'
saveState<StateType>('test', { x: 'A', y: 1 })

// получаем в переменную state объект из ячейки 'test' или дэфолтный объект если ячейка пуста
const state: StateType = restoreState<StateType>('test', { x: '', y: 0 })
 */
