var React = require('react'),
    CreateReactClass = require('create-react-class'),
    ListItem = CreateReactClass({
      render: function() {
        return (
          <li>
            <h4 style={this.props.style}>{this.props.colour}</h4>
          </li>
        );
      }
    });

module.exports = ListItem;
