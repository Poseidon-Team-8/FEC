import React from 'react';
import Cart from '../../client/src/components/overview/cart.jsx';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockData from '../../mockData.js';

const {styles, styleIndex, sku} = mockData;

describe('display cart', () => {
  it('display size', () => {
    const render = new ShallowRenderer();
    render.render(<Cart
    styles={styles}
    styleIndex={styleIndex}
    sku={sku}/>);
    const result = render.getRenderOutput()
    debugger;
    // expect().toBe()
  })
})