import React from 'react';
import ReactTooltip from 'react-tooltip'
import './tooltips.css'

const ToolTips = () => {
	return (<div className="ToolTipContainer">
		<ReactTooltip id = "CoronaInfoTooltip" type="dark" effect="solid" >
			<p>
				Disfrutar de una Corona es algo más que eso. Es disfrutar de su ritual y de todo lo que te rodea en ese instante para convertir un momento cualquiera en algo extraordinario.
			</p>
		</ReactTooltip>

		<ReactTooltip id="PatagoniaInfoTooltip" type="dark" effect="solid">
			<p>
				Cerveza elaborada con lúpulo patagónico y maltas seleccionadas. Un mundo en cervezas ideal para descubrir y disfrutar.
			</p>
		</ReactTooltip>
	</div>)
}

export default ToolTips