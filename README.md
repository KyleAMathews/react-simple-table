react-simple-table
==================

For when you just want a table and not sorting, filtering, pagination,
infinite scroll, ajax loading, etc. etc. etc.

## Install
`npm install react-simple-table`

## Usage
`react-simple-table` takes two props `data` and `columns`.

````javascript
var SimpleTable = require('react-simple-table');
var React = require('react');

var fruitColors = [{
  apple: 'Green',
  peach: 'Yellow',
  cherry: 'Red'
}];

React.renderComponent({
  render: function() {
    return (
      <SimpleTable columns={['apple', 'peach', 'cherry']}, data={fruitColors} />
    )
  }
});

// For deeper data structures, you can specify the "path" to your values
// using dot-notation strings.

var deeperFruitColors = [{
  apple: {
    color: 'Green'
  },
  peach: {
    color: 'Yellow'
  },
  cherry: {
    'Red'
  }
}];

React.renderComponent({
  render: function() {
    return (
      <SimpleTable columns={[
        {displayName: 'apple', path: 'apple.color'},
        {displayName: 'peach' path: 'peach.color'},
        {displayName: 'cherry', path: 'cherry.color'}
      ]}, data={deeperFruitColors} />
    )
  }
});

// You can also pass in a function and do whatever you'd like.
React.renderComponent({
  render: function() {
    return (
      <SimpleTable columns={[
        {displayName: 'apple', path: 'apple.color'},
        {displayName: 'peach', function: function(row) {
           return (
            <span style={{color: "peach"}}>
              {row.peach.color}
            </span>
          )
        }}
        {displayName: 'cherry', function: function(row) {
           return row.cherry.color + " yeah!"
          }
        }
      ]}, data={deeperFruitColors} />
    )
  }
});
````

## Styling
Tables by default have a `react-simple-table` class added. You can pass
in custom class names as a string using the `className` prop.

## Demo
http://kyleamathews.github.io/react-simple-table/
