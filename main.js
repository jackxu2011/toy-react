
import {ToyReact, Component} from './ToyReact.js'

class MyComponent extends Component {

    render() {
        return <div>cool
            <div>{this.children}</div>
        </div>
    }

}

let a = <MyComponent name="a">123</MyComponent>

// let a = <div name="a" id="ida">
// <span>Hello</span>
// <span>world</span>
// <span>!</span>
// </div>

ToyReact.render(a, document.body)

//document.body.appendChild(a);