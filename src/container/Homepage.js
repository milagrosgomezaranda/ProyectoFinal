import React, { Component } from 'react';
import { connect } from ' react-redux'
import productActions from '../actions/products'

import './Homepage.css';
import ProductGrid from '../components/ProductGrid'
import ShoppingList from '../components/ShoppingList'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	margin: 12,
}

class Homepage extends Component {
	render() {
		return (
			<div>
				<div className="HomeContainer">
					<div className="ProductsContainer">
						<div>
							<Paper zDepth={1} style={{padding: '0em', marginRigth: '1em'}}>
							<span>Presents: </span>
							<RaisedButton
								label='Cervezas BBB "$100" build' primary={true} style={style}
								onClick={() = this.props.selectPreset('cervezas_bbb')} />
							<RaisedButton
							label="Cervezas Suaves" primary={true} style={style}
							onClick={() => this.selectPreset('cervezas_suaves')}/>
							</Paper>
						</div>
						<ProductGrid
							products={this.props.products}
							onProductSelect={this.props.onProductSelect}
							onProductSelect={this.props.onProductDeselect}
						/>
					</div>
				<div className="ShoppingListContainer">
					<ShoppingList
						products={this.props.products}
						onProductDeselect={this.props.onProductDeselect}
						removeAllItems={this.props.removeAllItems}
						/>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		products: state.products.products
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onProductSelect: (product) => {
			dispatch(productActions.productSelected(product))
		},
		onProductDeselect: (product) => {
			dispatch(productActions.productDeSelected(product))
		},
		selectPreset: (name) => {
			dispatch(productActions.selectPreset(name))
		},
		removeAllItems: () => {
			dispatch(productActions.removeAllItems())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);