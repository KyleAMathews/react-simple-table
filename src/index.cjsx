React = require 'react'
deep = require 'deep-get-set'

module.exports = React.createClass
  displayName: "SimpleTable"

  propTypes:
    columns: React.PropTypes.array.isRequired
    data: React.PropTypes.array.isRequired

  render: ->
    columns = @props.columns.map (column) ->
      if typeof column is "string"
        <th key={column}>{column}</th>
      else
        <th key={column.displayName}>{column.displayName}</th>

    body = @props.data.map (rowData, i) =>
      row = []
      for column, colIndex in @props.columns
        # Columns can either be a simple string or be an object that defines
        # both a displayName and path for accessing the data.
        if typeof column is "string"
          datum = deep(rowData, column.toLowerCase())
          key = i + "-" + column
        else if column.path?
          datum = deep(rowData, column.path)
          key = i + "-" + column.path
        else if column.function?
          datum = column.function(rowData)
          key = i + "-" + colIndex
        row.push <td key={key}>{datum}</td>
      return <tr key={i}>{row}</tr>

    return (
      <table>
        <thead key="thead">
          <tr>{columns}</tr>
        </thead>
        <tbody key="tbody">{body}</tbody>
      </table>
    )
