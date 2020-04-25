import React, { Component } from 'react';
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import '../styles/Palette.css'

class Palette extends Component {
	constructor(props) {
		super(props)
		this.state = {
			level: 500,
			format: "hex"
		}
	}
	
	changeLevel = (level) => {
		this.setState({ level })
	}

	changeFormat = (val) => {
		this.setState({format: val})
	}

	render() {
		const { colors, paletteName, emoji } = this.props.palette;
		const { level, format } = this.state;
		let colorBoxes = colors[level].map(color => (
			<ColorBox background={color[format]} name={color.name} key={color.hex}/>
		))
		return (
			<div className="Palette">
				<Navbar level={level} changeLevel={this.changeLevel} handleFormatChange={this.changeFormat}/>
				<div className="Palette-colors">
					{colorBoxes}
				</div>
				<footer>
					{paletteName}
					<span>{emoji}</span>
				</footer>
			</div>
		)
	}
}

export default Palette