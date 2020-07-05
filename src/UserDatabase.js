import React from 'react';
import UserForm from './UserForm';
import './App.css';

class UserDatabase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userList: [{ name: 'Arul', dob: '1995-08-25', institution: 'SKCET', degree: 'B.Tech', department: 'IT' }]
         }

         console.log({UserForm});
    }
    getUser = (data) => {
        console.log(data);
        let userList=this.state.userList
        userList.push(data) 
        this.setState({
            userList
        })
    }

    render() { 
        const listItems = this.state.userList.map((myList,index) =>  
            <tr key={index}>
                 <td>{myList.name}</td>
                 <td>{myList.dob}</td>
                 <td>{myList.institution}</td>
                 <td>{myList.degree}</td>
                 <td>{myList.department}</td>

             </tr>
        ); 
        return ( 
            <div>
                <h2>User Database</h2>
                <div>
                    <table align="center" style={{width: '80%'}}>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Date Of Birth</th>
                                <th>Institution</th>
                                <th>Degree</th>
                                <th>Department</th>

                            </tr>
                            {listItems}
                        </tbody>
                    </table>
                </div>
                    < UserForm getUser={this.getUser}/>


            </div>
         );
    }
}
 
export default UserDatabase;