import React from 'react';
import Card from './components/Card';
import Jumbo from './components/Jumbo'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            timeline: ['Nissan', 'Honda', 'Toyota'],

        }
        // you can not touch state directly!!!!!
    }
    handleTextChange(e) {
        this.setState({ text: e.target.value })
    }
    addPost(e) {
        e.preventDefault()
        const clone = this.state.timeline.slice(0);
        clone.push(this.state.text)
        this.setState({
            timeline: clone,
            text: ''
        })
    }
    render() {

        return (
            <main className='container'>

                <Jumbo />

                <form className="form-group p-3 shadow border border-dark shadow-lg ">
                    <input
                        type="text"
                        className="form-control p-1 my-1 shadow-sm"
                        value={this.state.text}
                        onChange={(e) => this.handleTextChange(e)}
                    />
                    <button className="btn btn-primary shadow mt-3" onClick={(e) => this.addPost(e)}>ADD CHIRPER</button>
                </form>
                {this.state.timeline.map((post, i) => {
                    return (
                        <Card post={post} key={i} />

                    );
                })}



            </main>
        );
    }
}

export default App;