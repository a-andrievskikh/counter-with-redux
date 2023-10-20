const INC_VALUE = 'INC-VALUE'
const DEC_VALUE = 'DEC-VALUE'
const RES_VALUE = 'RES-VALUE'

const SET_MIN_VALUE = 'SET-MIN-VALUE'
const SET_MAX_VALUE = 'SET-MAX-VALUE'
const SET_START_VALUE = 'SET-START-VALUE'
const SET_COUNTER_VALUE = 'SET-COUNTER-VALUE'

export const initialState: CounterStateT = {
  values: {
    counterValue: 0,
    resetValue: 0,
    minValue: 0,
    maxValue: 0,
    startValue: 0,
  },
  frames: [
    { view: 'settings' },
    { view: 'counter' },
  ],
  inputs: [
    { type: 'min', title: 'min value' },
    { type: 'max', title: 'max value' },
    { type: 'start', title: 'start value' },
  ],
}

export const counterReducer = (state: CounterStateT = initialState, action: FrameActionsT): CounterStateT => {
  switch (action.type) {
    case INC_VALUE: {
      return {
        ...state,
        values: {
          ...state.values,
          counterValue: state.values.counterValue + 1,
        },
      }
    }
    case DEC_VALUE: {
      return {
        ...state,
        values: {
          ...state.values,
          counterValue: state.values.counterValue - 1,
        },
      }
    }
    case RES_VALUE: {
      return {
        ...state,
        values: {
          ...state.values,
          resetValue: state.values.startValue,
        },
      }
    }
    case SET_MIN_VALUE: {
      return {
        ...state,
        values: {
          ...state.values,
          minValue: action.value,
        },
      }
    }
    case SET_MAX_VALUE: {
      return {
        ...state,
        values: {
          ...state.values,
          maxValue: action.value,
        },
      }
    }
    case SET_COUNTER_VALUE: {
      return {
        ...state,
        values: {
          ...state.values,
          counterValue: action.value,
        },
      }
    }
    case SET_START_VALUE: {
      return {
        ...state,
        values: {
          ...state.values,
          startValue: action.value,
        },
      }
    }

    default:
      return state
  }
}

// Actions
export const incValueAC = () => ({ type: INC_VALUE } as const)
export const decValueAC = () => ({ type: DEC_VALUE } as const)
export const resValueAC = () => ({ type: RES_VALUE } as const)

export const setMinValueAC = (value: number) => ({ type: SET_MIN_VALUE, value } as const)
export const setMaxValueAC = (value: number) => ({ type: SET_MAX_VALUE, value } as const)
export const setCounterValueAC = (value: number) => ({ type: SET_COUNTER_VALUE, value } as const)
export const setStartValueAC = (value: number) => ({ type: SET_START_VALUE, value } as const)


// Types
export type CounterStateT = {
  values: ValuesT
  frames: FrameT[]
  inputs: InputT[]
}

export type ValuesT = {
  counterValue: number,
  resetValue: number,
  minValue: number,
  maxValue: number,
  startValue: number,
}
export type ViewsT = 'settings' | 'counter'
export type FrameT = { view: ViewsT }

export type InputTypesValuesT = 'min' | 'max' | 'start'
export type InputTitlesT = 'min value' | 'max value' | 'start value'
export type InputT = {
  type: InputTypesValuesT
  title: InputTitlesT
}

export type FrameActionsT =
  ReturnType<typeof incValueAC> |
  ReturnType<typeof decValueAC> |
  ReturnType<typeof resValueAC> |
  ReturnType<typeof setMinValueAC> |
  ReturnType<typeof setMaxValueAC> |
  ReturnType<typeof setCounterValueAC> |
  ReturnType<typeof setStartValueAC>

