react-simple-table
==================

For when you just want a table and not sorting, filtering, pagination,
infinite scroll, ajax loading, etc. etc. etc.

## Install
`npm install react-simple-table`

## Usage
Instead of infering the column names from the data's keys, the component
requires you to specify both the columns and body data
because body data can sometimes be heterogenous and both include keys
that we don't want to show up in the table or be missing desired keys. So better
to be explicit.

````javascript
var SimpleTable = require('react-simple-table');
var React = require('react');

var fruitColors = [{
  lime: 'Green',
  lemon: 'Yellow',
  orange:'Orange'
}];

React.renderComponent({
  render: function() {
    return (
      <SimpleTable columns={['apple', 'peach', 'cherry']}, data={fruitColors} />
    )
  }
});

// For deeper data structures, you can specify the "path" to your values
using dot-notation strings.

var fruitColors = [{
  lime: {
    color: 'Green'
  },
  lemon: {
    color: 'Yellow'
  },
  orange: {
    'Orange'
  }
}];

React.renderComponent({
  render: function() {
    return (
      <SimpleTable columns={[
        {displayName: 'apple', path: 'apple.color'},
        {displayName: 'peach' path: 'peach.color'},
        {displayName: 'cherry', path: 'cherry.color'}
      ]}, data={fruitColors} />
    )
  }
});
````
