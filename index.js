var SimpleTable = require('../src/index');
var React = require('react');
var faker = require('faker');

var fruitColors = [{
  lime: 'Green',
  lemon: 'Yellow',
  orange:'Orange'
}];

var fakeBizData = [];
for (var i = 0; i < 9; i++) {
  newObject = {
    company: faker.Company.companyName(),
    sales: faker.random.number(100,600),
    revenue: faker.random.number(1000,100000),
    profit: faker.random.number(1000,10000)
  };
  fakeBizData.push(newObject);
}

React.renderComponent(
  React.DOM.div({style:{margin:'0 auto', width: '400px'}},
    [
      React.DOM.h1(null, "React-Simple-Table"),
      React.DOM.a({href:"https://github.com/KyleAMathews/react-simple-table"}, "Browse code on Github"),
      React.DOM.br(),
      React.DOM.br(),
      React.DOM.br(),

      React.DOM.code(null, "<SimpleTable columns={['apple', 'peach', 'cherry']}, data={fruitColors} />"),
      React.DOM.br(),
      React.DOM.br(),
      SimpleTable({columns: ['Lime', 'Lemon', 'Orange'], data: fruitColors}),
      React.DOM.br(),
      React.DOM.br(),
      React.DOM.hr(),
      React.DOM.br(),
      React.DOM.br(),

      React.DOM.code(null, "<SimpleTable columns={['Company', 'Sales', 'Revenue', 'Profit']}, data={fakeBizData} />"),
      React.DOM.br(),
      React.DOM.br(),
      SimpleTable({columns: ['Company', 'Sales', 'Revenue', 'Profit'], data: fakeBizData}),

    ]), document.body);
