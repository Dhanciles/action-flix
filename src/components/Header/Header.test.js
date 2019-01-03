import React from 'react'
import { shallow, mount } from 'enzyme'
import { Header } from './Header'
import { mapDispatchToProps } from './Header';
import { logOut } from '../../actions/index.js'

describe('Header', () => {
  let wrapper
  let mockLogOut
  beforeEach(() => {
    mockLogOut = jest.fn()
    const mockUser = 1
    wrapper = shallow(<Header logUserOut={ mockLogOut } user={mockUser} />)
  })

  it('should match the snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle a click event', () => {
    wrapper.setState({listOpen: true})
    wrapper.find('.logout-btn').simulate('click')
    expect(mockLogOut).toHaveBeenCalled
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch on logUserOut with the correct params', () => {
      const mockDispatch = jest.fn() 
      const expected = {
        type: 'LOG_OUT'
      }

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.logUserOut()

      expect(mockDispatch).toHaveBeenCalledWith(expected)

    })
  });
})