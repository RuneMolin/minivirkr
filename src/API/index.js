export async function searchVirkr(term) {
  let response = await fetch(`http://virkr.dk/cvr/searchVirkr/${term}`)
  if (response.ok) {
    return await response.json()
  } else {
    throw Error(response.statusText)
  }
}

export async function getVirkrVirksomhed(cvrnr) {
  let response = await fetch(`http://virkr.dk/cvr/${cvrnr}`)
  if (response.ok) {
    return await response.json()
  } else {
    throw Error(response.statusText)
  }
}

export async function getVirkrDeltager(deltagerNr) {
  let response = await fetch(`http://virkr.dk/cvr/deltager/${deltagerNr}`)
  if (response.ok) {
    return await response.json()
  } else {
    throw Error(response.statusText)
  }
}
