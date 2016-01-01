# Typeahead For ReactJS .13+

This component allows users to enter text in an input field to search a list of values defined by an array of objects.

You can look at the example folder to get an understanding of implementing this.

## Install

```
$ npm install typeahead-react
```

## Include

```
var Typeahead = require( 'typeahead-react' );
```

## Usage

```javascript
var React = require( 'react' );
var Typeahead = require( 'typeahead-react' );

var Example = React.createClass( {
  getInitialState: function () {
    return {
      selected: {}
    }
  },
  onSelect: function ( obj ) {
    console.log( 'Example.onSelect.call', obj );
    this.state.selected = obj;
    this.forceUpdate();
  },
  render: function () {

    var values = [
      {
        label: 'Sofa',
        value: 'sofa'
      },
      {
        label: 'Table',
        value: 'table'
      }
    ];

    return (
      <div>
        <Typeahead values={values} onSelect={this.onSelect} selected={this.state.selected} label_key="label" />
      </div>
    )
  }
} );

module.exports = Example;
```

## Options

* Values must be array of strings or array of objects  ```e.g. [ 'a', 'b' ... ] or [ { a: 'a' }, { b: 'b' } ... ] ```
* You can specify value_key for array of objects
* Array of Objects requires label_key to be defined
* Array of strings cannot have label_key or value_key