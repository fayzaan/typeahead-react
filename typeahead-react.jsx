var React = require( 'react' );

var Typeahead = React.createClass( {
	getInitialState: function () {
		return {
			values: this.props.values ? this.props.values : [],
			list: [],
			label_key: this.props.label_key,
			value_key: this.props.value_key
		}
	},
	componentWillReceiveProps: function ( newProps ) {
		this.setState( {
			values: newProps.values ? newProps.values : {},
			label_key: this.props.label_key,
			value_key: this.props.value_key
		} );
	},
	formUpdate: function ( e ) {
		var search = e.target.value.toLowerCase();
		this.state.selected = {};
		this.filterList( search );
	},
	onKeyUp: function ( e ) {
        if ( e.keyCode === 13 ) {
        	if ( this.state.list.length ) {
        		this.select( this.state.list[ 0 ] );
        	}
        }
    },
	filterList: function ( search ) {
		var list = [];

		if ( search && search.length ) {
			this.state.values.map( function ( val ) {
				var label = this.state.label_key ? val[ this.state.label_key ] : val;
				if ( typeof label === 'string' ) { label = label.toLowerCase(); }
				if ( label.indexOf( search ) !== -1 ) {
					list.push( val );
				}
			}, this );
		}

		this.state.list = list;
		this.forceUpdate();
	},
	select: function ( val ) {
		var input = document.getElementById( this.props.id + '__typeahead_field' );
		input.value = this.state.label_key ? val[ this.state.label_key ] : val;
		this.state.selected = this.state.value_key ? val[ this.state.value_key ] : val;
		this.state.list = [];
		
		if ( this.props.onSelect ) {
			this.props.onSelect( this.state.selected );	
		}
		
		this.forceUpdate();
	},
	render: function () {
		var style = {
			display: this.state.list.length ? 'block' : 'none',
			position: 'relative',
			padding: '5px'
		};
		var context = this;
		return (
			<div id={ this.props.id + "__typeahead_form"} className="form-group" onBlur={this.inputBlur}>
				<input type="text" id={ this.props.id + "__typeahead_field"} className="form-control" onChange={this.formUpdate} onKeyUp={this.onKeyUp} />
				<ul id={ this.props.id + "__typeahead_list" } tabIndex="-1" className="dropdown-menu" style={style}>
					{
						context.state.list.map( function ( val ) {
							return (
								<li key={context.state.value_key ? val[ context.state.value_key ] : val}><a href="#" onClick={context.select.bind(null, val)}>{context.state.label_key ? val[ context.state.label_key ] : val}</a></li>
							)
						} )
					}
				</ul>
			</div>
		)
	}
} );

module.exports = Typeahead;