import React, { Component } from 'react';
import StudentServices from '../servies/StudentServices';

class UpdateStudentComponent extends Component {
    
    constructor(props){
        super(props)
        this.state={
                id:this.props.match.params.id,
                firstName:'',
                lName:'',
                adress:'',
                parentName :'',
                dob :'',
                enrollmentDate:''



        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
         this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeParentNameHandler = this.changeParentNameHandler.bind(this);
        this.changeDateOfBirthHandler =this.changeDateOfBirthHandler.bind(this);
        this.changeEnrollmentDateHandler = this.changeEnrollmentDateHandler.bind(this);
        
        this.updateStudent = this.updateStudent.bind(this);
        this.cancel =this.cancel.bind(this);
    
    }

    componentDidMount(){
        StudentServices.getStudentById(this.state.id).then((res)=>{
            let student= res.data;
            this.setState(
                {
                    firstName:student.firstName,
                    lName:student.lName,
                    adress:student.adress,
                    parentName:student.parentName,
                    dob:student.dob,
                    enrollmentDate:student.enrollmentDate
                
                
                });
        });
    }

    updateStudent= (e) =>{
        e.preventDefault();
        let student= {firstName:this.state.firstName, lName: this.state.lName, adress:this.state.adress, parentName:this.state.parentName, dob:this.state.dob, enrollmentDate:this.state.enrollmentDate};
        console.log('student =>'+ JSON.stringify(student));
        StudentServices.updateStudent(student, this.state.id).then(res=>{
            this.props.history.push('/students');
        });

        StudentServices.updateStudent(student).then(res =>{
            this.props.history.push('/students');
        });

    }

    changeFirstNameHandler = (event)=>{
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event)=>{
        this.setState({lName: event.target.value});
    }
    changeAddressHandler= (event)=>{
        this.setState({adress: event.target.value});
    }
    changeParentNameHandler= (event)=>{
        this.setState({parentName: event.target.value});
    }
    changeDateOfBirthHandler= (event)=>{
        this.setState({dob: event.target.value});
    }
    changeEnrollmentDateHandler= (event)=>{
        this.setState({enrollmentDate: event.target.value});
    }

    cancel(){
        this.props.history.push('/students');
    } 




    render() {
        return (
            <div className = "container">
               <div className="row"></div>
                <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
                    <h3 className="text-center" style={{fontSize:"22pt",color:"#000080"}}>Update Student  Information</h3>
                        <div className="card-body mt-4">

                        <form> 
                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>First Name</label>
                                <input  style={{fontSize:"14pt"}} placeholder="First Name" name="firstName" className="form-control"
                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>

                            </div>

                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>Last Name</label>
                                <input style={{fontSize:"14pt"}} placeholder="Last Name" name="lName" className="form-control"
                                value={this.state.lName} onChange={this.changeLastNameHandler}/>

                            </div>

                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>Address</label>
                                <input style={{fontSize:"14pt"}}  placeholder="Address" name="adress" className="form-control"
                                value={this.state.adress} onChange={this.changeAddressHandler}/>

                            </div>

                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>Parent Name</label>
                                <input style={{fontSize:"14pt"}} placeholder="Parent Name" name="parentName" className="form-control"
                                value={this.state.parentName} onChange={this.changeParentNameHandler}/>

                            </div>

                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>Date of Birth</label>
                                <input style={{fontSize:"14pt"}} placeholder="DOB" name="dob" className="form-control"
                                value={this.state.dob} onChange={this.changeDateOfBirthHandler}/>

                            </div>

                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>Enrollment Date</label>
                                <input style={{fontSize:"14pt"}} placeholder="Enrollmet Date" name="enrollmentDate" className="form-control"
                                value={this.state.enrollmentDate} onChange={this.changeEnrollmentDateHandler}/>

                            </div>

                            <button className="btn btn-success" onClick={this.updateStudent} style={{backgroundColor:"#00FF00",color:"#006400",fontWeight:"bold", fontSize:"15pt"}}>Update</button>
                            <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"10px",fontSize:"15pt",backgroundColor:"#FF0000",fontSize:"15pt",fontWeight:"bold"}}>Cancel</button>

                            

                        </form>

                        </div>

                </div>
            </div>
        );
    }
}
export default UpdateStudentComponent;