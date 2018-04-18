import { combineReducers } from 'redux'

import {
  REQUEST_SEND,
  REQUEST_FAILED,
  REQUEST_COMPLETED,
  SEARCH_RESPONSE,
  COMPANY_RETRIEVED,
  PERSON_RETRIEVED,
  RESET,
  START_SEARCH
} from '../actions'


const initialState = {
  request: {
    error: {},
    loading: false
  },
  search: {
    term: '',
    result: {}
  },
  company: {},
  person: {}
}

const request = (state = initialState.request, action) => {
  switch (action.type) {
    case REQUEST_SEND:
      return { error: {}, loading: true }
    case REQUEST_COMPLETED:
      return { error: {}, loading: false }
    case REQUEST_FAILED:
      return { error: action.data, loading: false }
    default:
      return state
  }
}

const search = (state = initialState.search, action) => {
  switch (action.type) {
    case START_SEARCH:
      return {...state, term: action.data}
    case SEARCH_RESPONSE:
      return { ...state, result: { ...action.data } }
    case COMPANY_RETRIEVED:
    case PERSON_RETRIEVED:
      return { ...state, result: {} }
    case RESET:
      return initialState.search
    default:
      return state
  }
}

const company = (state = initialState.company, action) => {
  switch (action.type) {
    case COMPANY_RETRIEVED:
      return { ...action.data }
    case SEARCH_RESPONSE:
    case RESET:
      return initialState.company
    default:
      return state
  }
}

const person = (state = initialState.person, action) => {
  switch (action.type) {
    case PERSON_RETRIEVED:
      return { ...action.data }
    case SEARCH_RESPONSE:
    case RESET:
      return initialState.person
    default:
      return state
  }
}

const rootReducer = combineReducers({ request, search, company, person });

export default rootReducer
