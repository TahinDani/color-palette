import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
	render() {
		const {palettes} = this.props
		const paletteList = palettes.map(p => (
			<Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
		))
		return (
			<div>
				{paletteList}
			</div>
		);
	}
}

export default PaletteList;