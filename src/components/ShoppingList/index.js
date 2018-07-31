import React from 'react';
import {Card, CardActions, CardHeader,CardText} from 'material-ui/Card';
import {
	Table,
	TableBody,
	TableFooter,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import ReactTooltip from 'react-tooltip'
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './index.css'

const ShoppingList = (props)=>{
	return (
		/*<div>
			<Paper zDepth={1} style={{padding: '1em'}}>
				<p>
					Cerveceria Zapato Roto te acerca a las mejores cervezas que podas encontrar en el Mercado
				</p>
			</Paper>
		</div>*/

		<Card>
			<CardHeader className="ShoppingListHeader" style={{paddingBotton: '0px'}}>
				<h3>ShoppingList</h3>
			</CardHeader>

			<CardText>
			{
				props.products.legth > 0 ?
				<Table multiSelectable={true} selectable={true}
				style={{tableLayout: 'auto'}}
				className="TableComponent"
				onCellClick={(row, col) =>{
					if(col === -1) {
						props.onProductDeselect(props.products [ row ])
					}
				}}>
					<TableHeader displayRowCheckbox={true} displaySelectAll={false} enableSelectAll={false}>
						<TableRow>
							<TableHeaderColumn style={{padding: '5px'}}>Product</TableHeaderColumn>
							<TableHeaderColumn style={{padding: '5px', textAling: 'right'}}>Price</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={true} deselectOnClickaway={false}>
					{
						props.products.map((product, i) => {
							return(
								<TableRow selected={true} key={i}>
									<TableRowColumn style={{padding: '5px', whiteSpace: 'wrap'}}>{ product.name }</TableRowColumn>
									<TableRowColumn style={{padding: '5px', textAling: 'right'}}>{ '$' + product.price.toFixed(2)}</TableRowColumn>
								</TableRow>
							)
						})
					}
					</TableBody>

					<TableFooter className="ProductTableFooter">
						<TableRow style={{fontWeight: 900, fontSize: '1.4rem'}}>
						  <TableRowColumn style={{padding: '5px', fontSize: '1.4rem'}}>
						  	<FontIcon data-tip data-for="EstimateTotalTooltip" className="material-icons" style={{color: '#999', fontSize: '0.7em'}}>help</FontIcon>
						  	Est. Total:
						  	<ReactTooltip id="EstimateTotalTooltip" type="dark" effect="solid">
						  	<p>
						  		These prices are not guaranteed to be up to date, but they should be pretty close
						  	</p>
						  	</ReactTooltip>
						  	</TableRowColumn>
						  	<TableRowColumn style={{padding: '5px', textAling: 'right', fontSize: '1.4rem'}}>
						  	{
						  		' $ ' + props.products.map((product, i) => {
						  			return product.price
						  		}).reduce((a, b) => {
						  			return a + b
						  		}).toFixed(2)
						  	}
						  	</TableRowColumn>
						  </TableRow>
						</T<bleFooter>
					</Table>
					: <div> No products Selected </div>
				}
				</CardText>
				<CardActions>
				{
					props.products.lenght > 0 ?
					<RaisedButton
						label="Remove All Items" style= {{
							margin: 12,
						}}
						onClick={() => props.removeAllItems()}/>
						:null
				}
				</CardActions>
			</Card>

		</div>
	)
} 

export default ShoppingList;