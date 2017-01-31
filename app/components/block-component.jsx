const react = require('react');

class ComponentBlock extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			items: {},
		}
		
	}
	componentWillMount() {
		const src = 'http://localhost:4000/getData'
		fetch(src)
			.then(response => response.json())
			.then(responseSrc => {
				this.setState.items = responseSrc.data;
				console.log(responseSrc);
			})
	}

	render(){
		return (
			<div>
				<h1> Block component </h1>
			</div>
		)
	}
	
}

module.exports = ComponentBlock;