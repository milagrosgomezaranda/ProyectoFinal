import React from 'react';
import Corona from '../products/corona'
import Patagonia from '../products/patagonia'

import FontIcon from 'material-ui/FontIcon';
import productRenderer from '../lib/product-renderer'
import ToolTips from '../tooltips'

import './index.css'

const ProductGrid = (props) => {

	const iconStyle = {color : '#999', fontSize: '0.7em'}

	return (
		<div className ='ProductGrid'>
			<div className='ProductGridColumn'>
			   <h2>Corona
			   		<FontIcon data-tip data-for ="CoronaToolTip" className="material-icons" style={iconStyle}>help</FontIcon>
			   	</h2>
			   	{productRenderer(Corona, props)}
			</div>

			<div className='ProductGridColumn'>
			   	<h2>Patagonia
			   	<FontIcon data-tip data-for="PatagoniaToolTip" className="material-icons" style={iconStyle}>help</FontIcon>
			   	</h2>
			   	{ productRenderer(Motors, props) }
			</div>
		)
}

export default ProductGrid;
