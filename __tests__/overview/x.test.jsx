import React from 'react';
import ProductInfo from '../../client/src/components/overview/productInfo.jsx';
// import Overview from '../../client/src/components/overview/overview.jsx';
// import App from '../../client/src/index.jsx';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('displays product info', () => {
  it('display title', () => {
    const x = new ShallowRenderer();
    x.render(<ProductInfo info={{title: 'Heir Force Ones'}} />);
    const result = x.getRenderOutput()
    expect(result.props.children[0]).toBe('Heir Force Ones')
  })
})