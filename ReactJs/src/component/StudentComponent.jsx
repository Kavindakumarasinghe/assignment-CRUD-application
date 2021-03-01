import React, { Component } from 'react';
import StudentServices from '../servies/StudentServices';

class StudentComponent extends Component {
   constructor(props){
       super(props)
       this.state={
          students: []
       }
       this.addStudent= this.addStudent.bind(this);
       this.editStudent= this.editStudent.bind(this);
       this.deleteStudent= this.deleteStudent.bind(this);
   }

   deleteStudent(id){
      StudentServices.deleteStudent(id).then(res =>{
        this.setState({students:this.state.students.filter(student =>student.id!== id)});
      });
   }

   editStudent(id){
       this.props.history.push(`/update-student/${id}`);

   }
   componentDidMount(){
       StudentServices.getStudents().then((res)=>{
         this.setState({students: res.data});  
       })

   }
    addStudent(){
        this.props.history.push('/add-student');
    }


    render() {
        return (
            <div>
                 <h2 className="text-center mt-4" ><div style={{color:"#FF4500" ,fontWeight:"bold" ,fontSize:"24pt"}}>Students Details</div></h2> 
                
                    <div className="row">
                        <table className="table table-stripad table-bordered mt-6 " style={{fontSize:"15pt"}} >
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Address</th>
                                    <th>Parent Name</th>
                                    <th>Date of Birth</th>
                                    <th>Enrollment Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>  
                            <tbody style={{fontSize:"14pt"}}>
                                {this.state.students.map(
                                    student =>
                                    <tr key={student.id} >
                                        <td>{student.firstName}</td>
                                        <td>{student.lName}</td>
                                        <td>{student.adress}</td>
                                        <td>{student.parentName}</td>
                                        <td>{student.dob}</td>
                                        <td>{student.enrollmentDate}</td>
                                        <td>
                                            <button onClick={() => this.editStudent(student.id)} style={{fontSize:"12pt",backgroundColor:"#00FF00",color:"#006400",fontWeight:"bold"}} className="btn btn-info">Update</button>
                                            <button  style= {{marginLeft:"10px",backgroundColor:"#FF0000",fontSize:"12pt",fontWeight:"bold" } }onClick={() => this.deleteStudent(student.id)} className="btn btn-danger">Delete</button>
                                        </td>

                                    </tr>
                                )
    }
                            </tbody>
                        </table>   
                        
                    
                    </div> 
                    <div className="row">
                     <button style={{backgroundColor:"#00FF7F", fontSize:"15pt", color:"#000000", fontWeight:"bold"}}className="btn btn-primary mt-6 " onClick={this.addStudent}>Add Student</button>

                 </div>



            </div>
        );
    }
}

export default StudentComponent;