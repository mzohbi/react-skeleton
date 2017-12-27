var React = require('react'),
    CreateReactClass = require('create-react-class'),
    ListItem = require('./ListItem.jsx'),

    colours = [{'id': 1, 'text': 'blue', 'style': {color: 'blue'}}, {'id': 2, 'text': 'yellow', 'style': {color: 'yellow'}}, {'id': 3, 'text': 'red', 'style': {color: 'red'}}],

    List = CreateReactClass({
      render: function() {
        var listItems = colours.map(function(item) {
          return <ListItem key={item.id} colour={item.text} style={item.style} />;
        });

        return (<ul>{listItems}</ul>);
      }
    });

module.exports = List;
