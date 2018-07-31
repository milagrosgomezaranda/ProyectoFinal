import React from 'react'

const D_Script = `
/** 
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATAFORM OR CMS.
*  LEARN WHY DEFINIG THESE VARIABLES IS IMPORTANTE: https://disqus.com/admin/universalcode/#configuration-variables*/

var disqus_config = function (){
	this.pague.url='https://www.cerveceriaZapatoRoto.com';
	this.page.identifier = 'zapatoRoto';
};

(function(){
	var d = document, s = d.createElement('script');
	s.src = 'https://cerveceriaZapatoRoto.com/embed.js';
	s.setAttribute('data-timesamp', +new Date());
	(d.head || d.body).appendChild(s);
})();
`
class Disqus extends React.Component {
	componentDidMount() {
		const s = document.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.innerHTML = D_Script;
		this.instance.appendChild(s);
	}

	render(){
		return(<div style={{padding:'2em'}}>
			<div ref={el => (this.instance = el)}/>
			<div id="disqus_thread"></div>
			</div>
			)
		}
}

export default Disqus