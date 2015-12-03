React = require 'react'
deep = require 'deep-get-set'

module.exports = React.createClass
  displayName: "SimpleTable"

  propTypes:
    columns: React.PropTypes.array.isRequired
    data: React.PropTypes.array.isRequired
    className: React.PropTypes.string

  getDefaultProps: ->
    className: 'react-simple-table'

  render: ->
    columns = @props.columns.map (column) ->
      if typeof column is "string"
        <th key={column}>{column}</th>
      else
        <th key={column.columnHeader}>{column.columnHeader}</th>

    body = @props.data.map (rowData, i) =>
      row = []
      for column, colIndex in @props.columns
        # Columns can either be a simple string or be an object that defines
        # both a columnHeader and path for accessing the data.

        # TODO check if more performant to try to tie key to its data
        # e.g. use row.id instead of "i". Theory being that React could move
        # more elements around instead of destroying and recreating.
        # Test this with a 10000 row table when working on sorting.
        if typeof column is "string"
          datum = deep(rowData, column)
          key = i + "-" + column
        else if column.path?
          datum = deep(rowData, column.path)
          key = i + "-" + column.path
        else if column.format?
          datum = column.format(rowData)
          key = i + "-" + colIndex
        row.push <td key={key}>{datum}</td>
      return <tr key={i}>{row}</tr>

    return (
      <table {...@props} className={@props.className}>
        <thead key="thead">
          <tr>{columns}</tr>
        </thead>
        <tbody key="tbody">{body}</tbody>
      </table>
    )
