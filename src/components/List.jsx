var React = require('react'),
    CreateReactClass = require('create-react-class'),
    ListItem = require('./ListItem.jsx'),

    ingredients = [{'id': 1, 'text': 'ham'}, {'id': 2, 'text': 'cheese'}, {'id': 3, 'text': 'potatoes'}],

    List = CreateReactClass({
      render: function() {
        var listItems = ingredients.map(function(item) {
          return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
      }
    });

module.exports = List;
