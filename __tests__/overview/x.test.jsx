import React from 'react';
import ProductInfo from '../../client/src/components/overview/productInfo.jsx';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockData from './mockData.js'

const {product, styles, styleIndex} = mockData;

describe('displays product info', () => {
  it('display title', () => {
    const x = new ShallowRenderer();
    x.render(<ProductInfo
      product={product}
      styles={styles}
      styleIndex={styleIndex} />);
    const result = x.getRenderOutput()
    const y = result.props.children[0]
    debugger;
    expect(result.props.children[0].props.children).toBe('Heir Force Ones')
  })
})