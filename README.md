[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LostInBrittany/granite-lit-bootstrap)

## granite-lit-bootstrap

*granite-bootstrap* is a wrapping of [Bootstrap CSS](https://getbootstrap.com/) CSS as [LitElement](https://lit-element.polymer-project.org/) [lit-html CSS TemplateResult](https://lit-element.polymer-project.org/guide/styles) to be used in LitElement web components.



## Doc & demo

[https://lostinbrittany.github.io/granite-lit-bootstrap](https://lostinbrittany.github.io/granite-lit-bootstrap)



### Using `granite-lit-bootstrap`

To use *granite-lit-bootstrap* in an element:


#### 1. Install `granite-lit-bootstrap`


Install the component using [npm](https://www.npmjs.com/):

```sh
$ npm i @granite-elements/granite-lit-bootstrap --save
```


#### 2. Import *granite-lit-bootstrap* in the element where you want to use it


Once installed, import it in your application. Usually you will simply want to import `granite-lit-bootstrap.js` (wrap around `bootstrap.css`) or `granite-lit-bootstrap-min.js` (wrap around `bootstrap.min.css`).

Supossing you want to import `granite-lit-bootstrap.js`:
 
```
import bootstrapStyle from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';
``` 

#### 3. Inside your component, use *granite-lit-bootstrap* in the static `styles` property


```js

class GraniteSpectreExample extends LitElement {
  static get styles() {
    return bootstrapStyle;
  }
  render() {
    return html`
      <div class="label label-rounded label-primary">Styled text</div>
    `;
  }
```


#### A complete example

```js
import { html, LitElement } from 'lit-element';
import bootstrapStyle from '../granite-lit-bootstrap.js';

class GraniteSpectreExample extends LitElement {
  static get styles() {
    return bootstrapStyle;
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

```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Install dependencies and run the demo

+   Run npm install from the repo directory:

    ```
     npm install
    ```
+   Run the Polymer development server from the root project directory:

    ```
    polymer serve --npm
    ```


## Note on semver versioning

I'm aligning the versions of this element with Bootstrap version, in order to make easier to choose the right version
 
## License

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)
