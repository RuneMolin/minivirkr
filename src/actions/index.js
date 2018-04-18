import { searchVirkr, getVirkrVirksomhed, getVirkrDeltager } from '../API'

export const REQUEST_SEND = 'REQUEST_SEND'
export const REQUEST_COMPLETED = 'REQUEST_COMPLETED'
export const REQUEST_FAILED = 'REQUEST_FAILED'
export const START_SEARCH = 'START_SEARCH'
export const SEARCH_RESPONSE = 'SEARCH_RESPONSE'
export const COMPANY_RETRIEVED = 'COMPANY_RETRIEVED'
export const PERSON_RETRIEVED = 'PERSON_RETRIEVED'
export const RESET = 'RESET'

function requestSend() {
  return { type: REQUEST_SEND }
}

function requestCompleted() {
  return { type: REQUEST_COMPLETED }
}

function requestFailed(err) {
  return { type: REQUEST_FAILED, data: err }
}

function startSearch(term) {
  return { type: START_SEARCH, data: term }
}

function searchResponse(response) {
  return { type: SEARCH_RESPONSE, data: response }
}

function companyRetrieved(response) {
  return { type: COMPANY_RETRIEVED, data: response }
}

function personRetrieved(response) {
  return { type: PERSON_RETRIEVED, data: response }
}

export function reset() {
  return { type: RESET }
}

export function search(term) {
  return async (dispatch) => {
    dispatch(requestSend())
    dispatch(startSearch(term))
    try {
      let response = await searchVirkr(term)

      dispatch(requestCompleted())
      dispatch(searchResponse(response))
    } catch (err) {
      dispatch(requestFailed(err))
    }
  }
}

export function retrieveCompany(cvrnr) {
  return async (dispatch) => {
    dispatch(requestSend())
    try {
      let response = await getVirkrVirksomhed(cvrnr)

      dispatch(requestCompleted())
      dispatch(companyRetrieved(response))
    } catch (err) {
      dispatch(requestFailed(err))
    }
  }
}

export function retrievePerson(personId) {
  return async (dispatch) => {
    dispatch(requestSend())
    try {
      let response = await getVirkrDeltager(personId)

      dispatch(requestCompleted())
      dispatch(personRetrieved(response))
    } catch (err) {
      dispatch(requestFailed(err))
    }
  }
}

