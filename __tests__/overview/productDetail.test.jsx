import React from 'react';
import ProductInfo from '../../client/src/components/overview/productInfo.jsx';
// import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockData from '../../mockData.js';

const {product, styles, styleIndex} = mockData;

// describe('has children', () => {
//   it('what i say', () => {
//     const render = TestRenderer.create(<ProductInfo product={product} styles={styles} styleIndex={styleIndex} />)
//     var x = render.root
//   })
// })

describe('displays product info', () => {
  it('display title', () => {
    const render = new ShallowRenderer();
    render.render(<ProductInfo
      product={product}
      styles={styles}
      styleIndex={styleIndex} />);
    const result = render.getRenderOutput()
    expect(result.props.children[0].props.children).toBe('Heir Force Ones')
  })

  it('display category', () => {
    const render = new ShallowRenderer();
    render.render(<ProductInfo
      product={product}
      styles={styles}
      styleIndex={styleIndex} />);
    const result = render.getRenderOutput()
    expect(result.props.children[1].props.children[1]).toBe('Kicks')
  })

  it('display description', () => {
    const render = new ShallowRenderer();
    render.render(<ProductInfo
      product={product}
      styles={styles}
      styleIndex={styleIndex} />);
    const result = render.getRenderOutput()
    expect(result.props.children[4].props.children).toBe("Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl")
  })
})