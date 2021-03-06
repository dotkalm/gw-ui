import React, { Component } from 'react';

import CodeBlock from 'components/CodeBlock';

import Button from 'components/Button';
import Input from 'components/Input';
import Select from 'components/Select';
import TextArea from 'components/TextArea';
import Checkbox from 'components/Checkbox';
import Radio from 'components/Radio';
import Toggle from 'components/Toggle';


import Loader, {TextLoader, DotLoader, LinearLoader}  from 'components/Loader';

export class UIComponent extends Component {

	state = {}

	renderComponent () {
		switch (this.props.component) {
			case 'Button': {
				return (
					<Button {...this.props} />
				);
			}
			case 'Input': {
				return (
					<Input {...this.props} />
				);
			}
			case 'Select': {
				return (
					<Select {...this.props} />
				);
			}
			case 'Toggle': {
				return (
					<Toggle {...this.props} />
				);
			}
			case 'Checkbox': {
				return (
					<Checkbox {...this.props} />
				);
			}
			case 'Radio': {
				return (
					<Radio {...this.props} />
				);
			}
			case 'Textarea': {
				return (
					<TextArea {...this.props} />
				);
			}
			case 'Loader': {
				return (
					<Loader {...this.props} />
				);
			}
			case 'TextLoader': {
				return (
					<TextLoader {...this.props} />
				);
			}
			case 'DotLoader': {
				return (
					<DotLoader {...this.props} />
				);
			}
			case 'LinearLoader': {
				return (
					<LinearLoader {...this.props} />
				);
			}
			default:
				return false;
		}
	}

	renderClasses () {
		var classes = this.props.className;
		classes = classes.replace(/\s+/g, '.').toLowerCase();
		return '.' + classes;
	}

	componentDidMount () {
		this.getComponentHeight();
	}

	getComponentHeight () {
		if (this.props.measured) {
			var componentHeight = this.refs.measuredComponent.clientHeight;
			var componentWidth = this.refs.measuredComponent.clientWidth;
			this.setState({ componentHeight : componentHeight });
			this.setState({ componentWidth : componentHeight });
		}
	}

	renderProps () {
		const keys = Object.keys(this.props);

		return keys.map( (key) => {
			return `${key} : ${this.props[key]}\n`;
		})
	}

	render() {

		return (
			<div className={this.props.listStyle ? ("ui-component list-style") : "ui-component"}>
				<div className="ui-component-wrap">
					<div className={this.props.measured ? 'measured' : ''}>
						{this.renderComponent()}
						{this.props.measured ? (
							<div className="measurements" ref="measuredComponent">
								<div className="height">{this.state.componentHeight}px</div>
							</div>
						) : false}
					</div>
				</div>
				<div>
					{this.props.classOnly ? (
						<CodeBlock language="css" className="sm minimal" style="atom-one-dark">
							{this.props.className ? (this.renderClasses()) : 'default'}
						</CodeBlock>
					) : (
						<CodeBlock language="json" className="sm minimal" style="atom-one-dark">
							{this.renderProps()}
						</CodeBlock>
					)}
				</div>
			</div>
		);
	}
}

export default UIComponent;