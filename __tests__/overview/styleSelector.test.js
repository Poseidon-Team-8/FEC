import React from 'react';
import StyleSelector from '../../client/src/components/overview/styleSelector.jsx';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockData from '../../mockData.js';

const {styles, styleIndex} = mockData;

// describe('display somethin', () => {
//   it('display thing', () => {
//     const render = new ShallowRenderer();
//     render.render(<StyleSelector
//       styles={styles}
//       styleIndex={styleIndex} />);
//     const result = render.getRenderOutput()
//     expect(result.props.children[0].props.children).toBe('Heir Force Ones')
//   })
// })