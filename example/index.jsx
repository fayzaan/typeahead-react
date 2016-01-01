var React = require( 'react' );
var Typeahead = require( './typeahead-react.js' );

var Example = React.createClass( {
	getInitialState: function () {
		return {
			selected: '',
			selectedObj: {},
			selectedObjValue: ''
		}
	},
	onSelect: function ( obj ) {
		this.state.selected = obj;
		this.forceUpdate();
	},
	onSelectObj: function ( obj ) {
		this.state.selectedObj = obj;
		this.forceUpdate();
	},
	onSelectObjValue: function ( val ) {
		this.state.selectedObjValue = val;
		this.forceUpdate();	
	},
	render: function () {

		var values = [ 'sofa', 'table', 'chair', 'cabinet', 'drawer', 'coffee table', 'dining table' ];

		var values_object = [
			{
				label: 'Sofa',
				value: 'sofa'
			},
			{
				label: 'Table',
				value: 'table'
			},
			{
				label: 'Chair',
				value: 'chair'
			},
			{
				label: 'Cabinet',
				value: 'cabinet'
			},
			{
				label: 'Drawer',
				value: 'drawer'
			},
			{
				label: 'Coffee Table',
				value: 'coffee_table'
			},
			{
				label: 'Dining Table',
				value: 'dining_table'
			}
		];

		return (
			<div>
				<h2>Array of strings</h2>

				<Typeahead id="_arrayofstrings" values={values} onSelect={this.onSelect} selected={this.state.selected} />
				<textarea className="form-control" value={JSON.stringify(this.state.selected)} />

				<h2>Array of objects</h2>

				<Typeahead id="_arrayofobjects" values={values_object} onSelect={this.onSelectObj} selected={this.state.selectedObj} label_key="label" />
				<textarea className="form-control" value={JSON.stringify(this.state.selectedObj)} />

				<h2>Array of objects with value_key defined</h2>
				
				<Typeahead id="_arrayofobjectswvalue" values={values_object} onSelect={this.onSelectObjValue} selected={this.state.selectedObjValue} value_key="value" label_key="label" />
				<textarea className="form-control" value={JSON.stringify(this.state.selectedObjValue)} />
			</div>
		)
	}
} )

React.render( <Example />, document.getElementById( 'main' ) );