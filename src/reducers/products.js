import types from '../actions/types'

import Corona from '../components/products/corona'
import Patagonia from '../components/products/patagonia'

const initialState = {
	products: []
}

const presetMasterList = {
	'cervezas_bbb': [
	'Patagonia1',
	'Corona',
	'Patagonia4'
	],
	'cervezas_suaves': [
	'Patagonia2',
	'Patagonia3'
	]
}

const allProducts = [Corona, Patagonia]

function selectedForPreset(presetName) {
	const productList = presetMasterList [ presetName ]
	const productsSelected = []
	allProducts.forEach((productType) => {
		Object.keys(productType).forEach((productKey) =>{
			const product = productType[ productKey ]
			if(productList.index(product.name) !== -1) {

			}
		})
		})
	return productsSelected
}

function productsReducer(state, action){
	if(typeof state === 'undefined') {
		return Object.assing({}, initialState)
	}
	switch(action.type) {
		case types.PRODUCT_SELECTED:
		return Object.assing({}, state, {
			products: [...state.products, action.product]
		})
		case types.PRODUCT_DESELECTED:
		const products = [...state.products]
		const index = products.findIndex((product)=>{
			return product.name === action.product.name
		})
		products.splice(index, 1)
		return Object.assing({}, state, {
			products
		})

		case types.PRODUCT_PRESET:
		const selected = selectForPreset(action.name)
		return Object.assing({},state, {
			products: selected
		})
		case types.PRODUCT_REMOVE_ALL:
		return Object.assing({}, state, { products: []})
		default:
		return state
		}
	}

export default productsReducer;