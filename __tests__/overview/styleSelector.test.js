import React from 'react';
import StyleSelector from '../../client/src/components/overview/styleSelector.jsx';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockData from '../../mockData.js';

const {styles, styleIndex} = mockData;

describe('display style selector', () => {
  it('display style name', () => {
    const render = new ShallowRenderer();
    render.render(<StyleSelector
      styles={styles}
      styleIndex={styleIndex} />);
    const result = render.getRenderOutput()
    expect(result.props.children[0].props.children[1].props.children).toBe('White & White')
  })

  it('display correct thumbnail image', () => {
    const render = new ShallowRenderer();
    render.render(<StyleSelector
      styles={styles}
      styleIndex={styleIndex} />);
    const result = render.getRenderOutput()
    expect(result.props.children[1].props.children[0].props.src).toBe('https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')
  })
})