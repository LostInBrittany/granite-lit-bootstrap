import { html, LitElement } from 'lit';
import {bootstrapStyles} from '../granite-lit-bootstrap.js';

class GraniteSpectreExample extends LitElement {
    static get styles() {
      return [bootstrapStyles];
    }
    render() {
      return html`
        <table class="table  table-hover">
            <tr><th>Surname</th><th>Name</th></tr>
            ${this.people.map( (person) => {
              return html`
              <tr>
                <td>${person.lastname}</td>
                <td>${person.firstname}</td>
              </tr>
              `;
            })}
        </table>
      `;
    }
  
    static get properties() {
      return {
        people: { type: Array },
      };
    }
  
    constructor() {
      super();
      this.people = [
        { firstname: 'Jack', lastname: 'Aubrey' },
        { firstname: 'Anne', lastname: 'Elliot' },
        { firstname: 'Stephen', lastname: 'Maturin' },
        { firstname: 'Emma', lastname: 'Woodhouse' },
      ];
    }
  }
  customElements.define('granite-bootstrap-example', GraniteSpectreExample);