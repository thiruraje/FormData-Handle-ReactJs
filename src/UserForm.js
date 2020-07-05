
import React from 'react';
import './App.css';

class UserForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          dob:'',
          institution:'',
          degree:'',
          department:''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
        });
    }
  
    handleSubmit(event) {
        this.props.getUser(this.state);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
           <div>
                <h2>User Form</h2>
                <div className="row" style={{display: 'flex'}}>
                    <div className="column" style={{flex: '50%'}}>
                        <div>
                            <div><label>Name:</label></div>
                            <input type="text" name="name"value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div>
                            <div><label>Institution :</label></div>
                            <input type="text" name="institution" value={this.state.institution} onChange={this.handleChange} />
                        </div> 
                        <div>
                            <label>Select department:</label>
                            <div>
                                <select value={this.state.department} name="department" onChange={this.handleChange}>
                                        <option value=" ">--select</option>
                                        <option value="cse">CSE</option>
                                        <option value="ece">ECE</option>
                                        <option value="mech">MECH</option>
                                        <option value="civil">CIVIL</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="column"style={{flex: '50%'}}>
                        <div>
                            <div><label>Date Of Birth:</label></div>
                            <input type="text" value={this.state.dob} name="dob"onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Select Degree:</label>
                            <div>
                                <select value={this.state.degree} name="degree" onChange={this.handleChange}>
                                        <option value=" ">--select</option>
                                        <option value="be">BE</option>
                                        <option value="btech">B TECH</option>
                                        <option value="me">ME</option>
                                        <option value="mtech">M TECH</option>
                                </select>
                            </div>
                            
                        </div>
                        
                        </div>
                </div>
            </div>
          
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default UserForm;