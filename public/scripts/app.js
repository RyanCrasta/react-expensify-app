'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
const obj = {
    name: 'Ryan',
    getName(){
        return this.name;
    }
}
// v loose access to this in simple fn
// so to fix it use .bind() and pass obj
// as argument

const getName = obj.getName.bind(obj);
console.log(getName());
*/

// react component is a JS class
// react component require one method to be defined i.e. render
// render returns JSX

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);

        _this.state = {
            options: []
        };
        return _this;
    }
    // first life cycle method this one fires when the component first gets mouned on the DOM
    // lifecycle methods can be used only in class based components
    // there is no way to manage lifecycle for stateless functional components

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // console.log('fetching data');
            // whenever u refresh the previous data will not go away

            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                // if options array is empty then options will be equal to null
                if (options) {
                    this.setState(function () {
                        return {
                            options: options
                        };
                    });
                }
            } catch (e) {
                // do nothing at all if json data is invalid
            }
        }

        // componentDidUpdate is going to wire after the component updates
        // i.e. after state or prop value changes
        // inside lifecycle methods v have access to this.state and this.props for new state and prop values
        // but v also have couple of arguments to access previous props and state 
        // i.e. componentDidUpdate(prevProps,prevState)

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);

                // console.log('saving data');
            }
        }

        // lifecycle method fires just before ur component goes away

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('component Will Unmount');
        }

        // handle del options

    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option !== optionToRemove;
                    })
                };
            });
        }

        // handlePick

    }, {
        key: 'handlePick',
        value: function handlePick() {

            var index = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[index]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {

            if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in the hands of a computer!!';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    item: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

/*
IndecisionApp.defaultProps ={
    options: []
}
*/

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

// default props value
Header.defaultProps = {
    title: 'Indecision App'

    /*
    class Header extends React.Component{
        render(){
            // this is reference to current instance of the component
            return(
                <div>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
                );
        }
    }
    */

};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handlePick, disabled: !props.hasOptions },
            'What should I Do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.item.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started'
        ),
        props.item.map(function (task) {
            return React.createElement(Option, {
                key: task,
                optionTxt: task,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionTxt,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionTxt);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value;
            if (option.trim() !== '') {
                var error = this.props.handleAddOption(option);

                this.setState(function () {
                    return {
                        error: error
                    };
                });

                if (!error) {
                    e.target.elements.option.value = '';
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { name: 'option', type: 'text', placeholder: 'Enter any task' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// stateless functional component
// props are allowed in stateless functional component
// now stateless functional component do not have access to this
// props get passed to the fn as first argument as an object

/*
const User = (props) => {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}
*/

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
