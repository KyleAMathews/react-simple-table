var SimpleTable = require('../src/index');
var React = require('react');
var ReactDOM = require('react-dom');
var faker = require('faker');

var fruitColors = [{
  lime: 'Green',
  lemon: 'Yellow',
  orange:'Orange'
}];

var fakeBizData = [];
for (var i = 0; i < 9; i++) {
  newObject = {
    company: faker.company.companyName(),
    sales: faker.random.number(100,600),
    revenue: faker.random.number(1000,100000),
    profit: faker.random.number(1000,10000)
  };
  fakeBizData.push(newObject);
}

var fakeContactData = [];
for (var i = 0; i < 9; i++) {
  fakeContactData.push(faker.helpers.createCard());
}
console.log(fakeContactData);

ReactDOM.render(
  React.DOM.div({style:{margin:'0 auto', width: '500px'}},
    [
      React.DOM.h1(null, "React-Simple-Table"),
      React.DOM.a({href:"https://github.com/KyleAMathews/react-simple-table"}, "Browse code on Github"),
      React.DOM.br(),
      React.DOM.br(),
      React.DOM.br(),

      React.DOM.code(null, "<SimpleTable className='test-class' columns={['apple', 'peach', 'cherry']}, data={fruitColors} />"),
      React.DOM.br(),
      React.DOM.br(),
      React.createElement(SimpleTable, {className: "test-class", columns: ['Lime', 'Lemon', 'Orange'], data: fruitColors}),
      React.DOM.br(),
      React.DOM.br(),
      React.DOM.hr(),
      React.DOM.br(),
      React.DOM.br(),

      React.DOM.code(null, "<SimpleTable columns={['Company', 'Sales', 'Revenue', 'Profit']}, data={fakeBizData} />"),
      React.DOM.br(),
      React.DOM.br(),
      React.createElement(SimpleTable, {columns: ['Company', 'Sales', 'Revenue', 'Profit'], data: fakeBizData}),

      React.DOM.br(),
      React.DOM.br(),
      React.DOM.hr(),
      React.DOM.br(),
      React.DOM.br(),
      React.DOM.h2(null, "Access deep data using dot-notation"),
      React.DOM.code(null, "<SimpleTable columns={['Name', 'Email', {displayName: 'Company', path: 'company.name'}]}, data={fakeContactData} />"),
      React.DOM.br(),
      React.DOM.br(),
      React.createElement(SimpleTable, {columns: ['Name', 'Email', {displayName: 'Company', path: 'company.name'}], data: fakeContactData}),

      React.DOM.br(),
      React.DOM.br(),
      React.DOM.hr(),
      React.DOM.br(),
      React.DOM.br(),
      React.DOM.h2(null, "Access or manipulate data using a function"),
      React.DOM.code(null, "<SimpleTable columns={['Name', 'Email', {displayName: 'Company', function: function(data){return data.address.streetA + ', ' + data.address.city}}]}, data={fakeContactData} />"),
      React.DOM.br(),
      React.DOM.br(),
      React.createElement(SimpleTable, {columns: ['Name', 'Email', {displayName: 'Address', function: function(data){return data.address.streetA + ", " + data.address.city}}], data: fakeContactData}),

    ]), document.body);
