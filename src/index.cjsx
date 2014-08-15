React = require 'react'

module.exports = React.createClass
  displayName: "SimpleTable"

  propTypes:
    columns: React.PropTypes.array
    data: React.PropTypes.array

  render: ->
    columns = @props.columns.map (column) -> <th key={column}>{column}</th>
    body = @props.data.map (rowData, i) =>
      row = []
      for column in @props.columns
        row.push <td key={i + "-" + column}>{rowData[column.toLowerCase()]}</td>
      return <tr key={i}>{row}</tr>

    return (
      <table>
        <thead>
          <tr>{columns}</tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
    )
