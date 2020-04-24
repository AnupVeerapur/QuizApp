import { Component } from "react";

const checkboxes = [
    {
        name: 'check-box-1',
        key: 'checkBox1',
        label: 'Check Box 1',
    },
    {
        name: 'check-box-2',
        key: 'checkBox2',
        label: 'Check Box 2',
    },
    {
        name: 'check-box-3',
        key: 'checkBox3',
        label: 'Check Box 3',
    },
    {
        name: 'check-box-4',
        key: 'checkBox4',
        label: 'Check Box 4',
    },
];
export default class A extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            value: "coconut"
        }
        console.log("<<<<< LIFECYCLE METHODS CONSTRUCTOR >>>>> ")
    }
    componentWillMount() {
        console.log("<<<<< LIFECYCLE METHODS WILL MOUNT >>>>> ")
    }

    componentDidMount() {
        console.log("<<<<< LIFECYCLE METHODS DID MOUNT >>>>> ")
    }

    componentWillReceiveProps() {
        console.log("<<<<< LIFECYCLE METHODS WILL RECEIVE PROPS >>>>> ")
    }

    shouldComponentUpdate() {
        console.log("<<<<< LIFECYCLE METHODS SHOULD COMP UPDATE >>>>> ");
        return true;
    }

    componentDidUpdate() {
        console.log("<<<<< LIFECYCLE METHODS DID UPDATE >>>>> ")
    }

    getSnapshotBeforeUpdate() {
        console.log("<<<<< LIFECYCLE METHODS GET SNAPSHOT >>>>> ")
    }

    updateInputVal = (e) => {
        console.log("input value ----> ", e.target.value);
        this.setState({
            myinputVal: e.target.value
        })
    }

    handleCheck = (item) => {
        console.log("item --------------> ", item)
        if (this.state[item.name]) {
            this.setState({ [item.name]: !this.state[item.name] });
        } else {
            this.setState({ [item.name]: true });
        }
    }

    handleOptionChange = (e, item) => {
        console.log("radioni target", e.target.value)
        console.log("radio target item", item)
    }

    handleCheckByValue = (e, item) => {
        console.log("checkbox target", e.target.value)
        console.log("checkbox target item", item)
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        alert('Your favorite flavor is: ' + this.state.value);
        alert('Your cehck box are: ' + this.state);
        event.preventDefault();
    }
    render() {
        console.log("<<<<< LIFECYCLE METHODS RENDER >>>>> ");
        return (
            <>
                <div>
                    Input type
                    <input type="text" onChange={this.updateInputVal} />
                    Value of input : {this.state.myinputVal}
                </div>
                <br />
                <div>
                    Radio button :
                    {
                        checkboxes.map(item => (
                            <label>
                                <input type="radio" value={item.key}
                                    name="OneRadio"
                                    checked={this.state["radio" + item.key]}
                                    // onChange={this.handleOptionChange} />
                                    onChange={(e) => this.handleOptionChange(e, item)} />
                                {item.name}
                            </label>
                        ))
                    }
                </div>
                <br />

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Pick your favorite flavor:
                                <select value={this.state.value} onChange={this.handleChange}>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </label>

                        <div>
                            Checkbox type
                            <div>
                                {
                                    checkboxes.map(item => (
                                        <label key={item.key}>
                                            {item.name}
                                            <input type="checkbox"
                                                value={item.key}
                                                name={item.name}
                                                checked={this.state[item.name]}
                                                onChange={(e) => this.handleCheckByValue(e, item)} />
                                            {/* onChange={() => this.handleCheck(item)} /> */}
                                        </label>
                                    ))
                                }
                            </div>
                        </div>


                        <input type="submit" value="Submit" />

                    </form>
                </div>
                <br />
            </>
        )
    }
}