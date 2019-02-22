import React, { Component } from 'react';

class IdeaView extends Component {
    state = {
        ideas: this.props.user.ideas
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user.ideas !== this.state.ideas) {
            this.setState({ideas: nextProps.user.ideas});
        }
    }

    handleChange = (idea, event) => {
        const newIdeas = [...this.state.ideas];
        const ideas = newIdeas.map ((savedIdea) => {
            if (savedIdea._id === idea._id) {
                savedIdea[event.target.name] = event.target.value;
            }
            return savedIdea;
        })
        this.setState({ideas: ideas});
    }

    render() {
        return (
            <div>
                <div style={{ marginLeft: '15%', marginRight: '15%'}}>
                    {this.state.ideas.map((idea) => (
                        <div key={idea._id} style={{ display: 'inline-block', width: '20%', border: '1px solid black',
                        padding: '1em', margin: '2em', backgroundColor: '#fffbde'}}>

                            <div style={{ alignItems: 'top', display: 'flex', justifyContent: 'center'}}>

                                <input onChange={(e) => this.handleChange(idea, e)} value={idea.title}
                                type="text" name="title" placeholder='Idea Title'
                                style={{ textDecoration: 'none', width: '90%', backgroundColor: '#fffbde'}}/>

                                <button onClick={() => this.props.deleteIdea(idea._id)}>X</button>
                            </div>

                            <div>
                                <textarea onChange={(e) => this.handleChange(idea, e)} value={idea.description}
                                placeholder='Idea Description' name='description' style={{ width: '100%', resize: 'none',
                                backgroundColor: '#fffbde', border: 'none', height: '10em'}}>
                                </textarea>
                            </div>
                            <br />
                            <button onClick={(e) => this.props.updateIdea(idea, e)}>Save</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default IdeaView;