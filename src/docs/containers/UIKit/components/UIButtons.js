import React, { Component } from 'react';

import { parse } from 'react-docgen';
import ButtonComponent from '!raw-loader!components/Button/Button';

import Button from 'components/Button';
import Section from './UISection';
import SubSection from './UISubSection';
import UIComponent from './UIComponent';
import UIProps from './UIProps';

const buttonDocs = parse(ButtonComponent);

export class UIButtons extends Component {

	defaultModal = () => {
		this.props.modalActions.showModal('default-modal');
	}

	render() {

		return (
			<div>
				<Section
					id={this.props.id}
					key={this.props.id}
					title="Button"
					description={
						<div>
							<p>The <code>{'<Button />'}</code> component is awesome. There are lots of different variations to fit different situations.</p>
							<p>Use the <code>label</code> prop, to insert button text and the <code>className</code> prop for classNames</p>
						</div>
					}
				>
					<UIProps {...buttonDocs} />
					<SubSection
						title="Colors"
						id={this.props.id + 'Colors'}
						description={
							<div>
								<p>Buttons come in a bunch of color variations. The Default size, <code>.micro</code>, <code>.tiny</code>, <code>.small</code>, and <code>.large</code>. These Sizes can be set in <code>variables.scss</code></p>
							</div>
						}
					>
					</SubSection>

					<div className="grid-flex left baseline v-spaced matted-ui-components">
						<div className="col-4">
							<UIComponent
								component="Button"
								label="Default"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								component="Button"
								label="Secondary"
								className="secondary"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								component="Button"
								label="Tertiary"
								className="tertiary"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								component="Button"
								label="Light"
								className="light"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								component="Button"
								label="White"
								className="white-btn"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								component="Button"
								label="Success"
								className="success-btn"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								component="Button"
								label="Notify"
								className="notify-btn"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								component="Button"
								label="Alert"
								className="alert-btn"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								component="Button"
								label="Transparent"
								className="transparent"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								component="Button"
								label="Transparent"
								className="transparent main-color"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								component="Button"
								label="Transparent"
								className="transparent notify-color"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								component="Button"
								label="Transparent"
								className="transparent text-color"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								component="Button"
								label="Transparent"
								className="transparent success-color"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								component="Button"
								label="Transparent"
								className="transparent alert-color"
							/>
						</div>
					</div>

					<SubSection
						title="Shapes & Sizes"
						id={this.props.id + 'Shapes'}
						description={
							<div>
								<p>Buttons come in 5 sizes and a couple of configurations. The Default size, <code>.micro</code>, <code>.tiny</code>, <code>.small</code>, and <code>.large</code>. These Sizes can be set in <code>variables.scss</code></p>
							</div>
						}
					/>
					<div className="grid-flex v-spaced baseline">
						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								measured={true}
								component="Button"
								label="Micro"
								className="micro"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								component="Button"
								icon="close"
								className="micro circle"
								tooltipText="Close"
								tooltipPosition="top"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								component="Button"
								icon="close"
								className="micro square"
								tooltipText="Close"
								tooltipPosition="top"
							/>
						</div>

						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								measured={true}
								component="Button"
								label="Tiny"
								className="tiny"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								component="Button"
								icon="remove"
								className="tiny circle light hover-alert"
								tooltipText="Remove"
								tooltipPosition="top"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								component="Button"
								icon="remove"
								className="tiny square light hover-alert"
								tooltipText="Remove"
								tooltipPosition="top"
							/>
						</div>

						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								measured={true}
								component="Button"
								label="Small"
								className="small"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								component="Button"
								icon="person_add"
								className="small circle notify-btn"
								tooltipText="Invite"
								tooltipPosition="top"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								component="Button"
								icon="person_add"
								className="small square notify-btn"
								tooltipText="Invite"
								tooltipPosition="top"
							/>
						</div>


						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								measured={true}
								component="Button"
								label="Default"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								component="Button"
								icon="folder_open"
								className="circle secondary hover-main"
								tooltipText="Save"
								tooltipPosition="top"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								component="Button"
								icon="folder_open"
								className="square secondary hover-main"
								tooltipText="Save"
								tooltipPosition="top"
							/>
						</div>

						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								measured={true}
								component="Button"
								label="Large"
								className="large"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								component="Button"
								icon="done"
								className="large circle success-btn"
								tooltipText="Done"
								tooltipPosition="top"
							/>
						</div>
						<div className="col-4">
							<UIComponent
								classOnly={true}
								listStyle={true}
								component="Button"
								icon="done"
								className="large square success-btn"
								tooltipText="Done"
								tooltipPosition="top"
							/>
						</div>
					</div>

					<SubSection
						title="Button States"
						id={this.props.id + 'States'}
						description={
							<div>
								<p>Buttons come in 5 sizes. The Default size, <code>.micro</code>, <code>.tiny</code>, <code>.small</code>, and <code>.large</code>. These Sizes can be set in <code>variables.scss</code></p>
							</div>
						}
					>
						<div className="grid-flex baseline v-spaced">
							<div className="col">
								<Button
									label="Micro"
									className="micro"
								/>
							</div>
						</div>
					</SubSection>
					<SubSection
						title="Button Icons"
						id={this.props.id + 'Icons'}
						description={
							<p>Using the <code>icon</code> or <code>rightIcon</code> props, you can use any of hundreds of <a href="https://material.io/icons/">Material Icons</a> or pass a custom icon svg.</p>
						}
					>
					</SubSection>
				</Section>

			</div>
		);
	}
}

export default UIButtons;