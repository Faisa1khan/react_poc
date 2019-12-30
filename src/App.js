import React, { Component } from 'react';

import {IntlProvider, FormattedMessage} from 'react-intl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Eric',
      unreadCount: 1000,
    };
  }

  render() {
    const {name, unreadCount} = this.state;

    return (
      <IntlProvider locale="en">
      <p>
        <FormattedMessage
          id="welcome"
          defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
          values={{name: <b>{name}</b>, unreadCount}}
        />
      </p>
      </IntlProvider>
    );
  }
}

export default App;
