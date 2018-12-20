import * as actions from './index'

describe('actions', () => {
  it('should return a type of IS_LOADING, with isLoading', () => {
    const isLoading = true
    const expected = {
      type: 'IS_LOADING',
      isLoading
    }

    const result = actions.isLoading(isLoading)

    expect(result).toEqual(expected)
  })

  it('should return a type of HAS_ERRORED, with an id', () => {
    const hasErrored = false
    const expected = {
      type: 'HAS_ERRORED',
      hasErrored
    }

    const result = actions.hasErrored(hasErrored)

    expect(result).toEqual(expected)
  })

  it('should return a type of FETCH_DATA_SUCCESS, with a filter', () => {
    const movies = []
    const expected = {
      type: 'FETCH_DATA_SUCCESS',
      movies
    }

    const result = actions.fetchDataSuccess(movies)

    expect(result).toEqual(expected)
  })
})