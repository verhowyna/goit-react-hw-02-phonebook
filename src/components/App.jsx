import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = ({ target }) => {
    this.setState({
      [target.name]: target.value,
      contacts: [{ name: this.state.name, id: nanoid() }],
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Phonebook</h1>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            placeholder="Rosie Simpson"
            required
            onChange={this.addContact}
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            placeholder="123-45-67"
            required
            onChange={this.addContact}
          />
        </label>
        <button type="submit">Add contact</button>
        <h2>Contacts</h2>
        <ul>
          <li>
            <span>{this.state.name} </span>
            <span>{this.state.number}</span>
          </li>
        </ul>
      </form>
    );
  }
}
