var React = require('react'),
    CreateReactClass = require('create-react-class'),
    ListItem = CreateReactClass({
      render: function() {
        return (
          <li>
            <h4>{this.props.ingredient}</h4>
          </li>
        );
      }
    });

module.exports = ListItem;
