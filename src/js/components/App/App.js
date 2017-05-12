import React from 'react';
import Header from '../header/common-header';
import Footer from '../footer/footer';
import store from '../../redux/store'
import { Provider, connect } from 'react-redux'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };
    //=== Mounting lifecycle
    componentWillMount() {
        //console.log("componentWillMount")
    };
    componentDidMount() {
        //console.log("componentDidMount");
    };

    //=== Update lifecycle 
    componentWillReceiveProps(nextProps) {
        // console.log("componentWillReceiveProps: nextProps ",nextProps)
    };
    shouldComponentUpdate() {
        //console.log("shouldComponentUpdate");
    };
    componentWillUpdate() {
        //console.log("componentWillUpdate");
    };
    //=== Unmount lifecycle
    componentWillUnmount() {
        //console.log("componentWillUnmount");
    };
    componentDidUpdate() {
        //console.log("componentDidUpdate");
    };
    //=== Render
    render() {
        return (<div className="app">
            <h3>Main App</h3>
            <Header />
            <Footer />
        </div>);
    }
}

// const mapStateToProps = (state) => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }



// Default state and props
App.defaultProps = {};

export default App;