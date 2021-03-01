import React, { Component } from 'react';
import GradeServices from '../servies/GradeServices';

class CreateGradeComponent extends Component {
    
    constructor(props){
        super(props)
        this.state={
                teacherName:'',
                teacherPhone:'',
                teacheradress:'',
                noofStudents :''                



        }
        this.changeteacherNameHandler = this.changeteacherNameHandler.bind(this);
        this.changeteacherPhoneHandler = this.changeteacherPhoneHandler.bind(this);
        this.changeteacheradressHandller = this.changeteacheradressHandller.bind(this);
        this.changenoofStudentsHandler = this.changenoofStudentsHandler.bind(this);
        
        this.saveGrade = this.saveGrade.bind(this);
        this.cancel =this.cancel.bind(this);
    
    }

    saveGrade= (e) =>{
        e.preventDefault();
        let grade= {teacherName:this.state.teacherName, teacherPhone: this.state.teacherPhone, teacheradress:this.state.teacheradress,noofStudents:this.state.noofStudents };
        console.log('grade =>'+ JSON.stringify(grade));

        GradeServices.createGrade(grade).then(res =>{
            this.props.history.push('/grades');
        });

    }

    changeteacherNameHandler = (event)=>{
        this.setState({teacherName: event.target.value});
    }

    changeteacherPhoneHandler = (event)=>{
        this.setState({teacherPhone: event.target.value});
    }
    changeteacheradressHandller= (event)=>{
        this.setState({teacheradress: event.target.value});
    }
    changenoofStudentsHandler= (event)=>{
        this.setState({noofStudents: event.target.value});
    }
   

    cancel(){
        this.props.history.push('/grades');
    } 




    render() {
        return (
            <div className = "container">
               <div className="row"></div>
                <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
                    <h3 className="text-center" style={{fontSize:"22pt",color:"#000080"}}>Add Class</h3>
                        <div className="card-body mt-4">

                        <form> 
                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>Teacher Name</label>
                                <input  style={{fontSize:"14pt"}} placeholder="Teacher Name" name=" teacherName" className="form-control"
                                value={this.state.teacherName} onChange={this.changeteacherNameHandler}/>

                            </div>

                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>Phone Number</label>
                                <input style={{fontSize:"14pt"}} placeholder="Phone Number" name=" teacherPhone" className="form-control"
                                value={this.state.teacherPhone} onChange={this.changeteacherPhoneHandler}/>

                            </div>

                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>Address</label>
                                <input style={{fontSize:"14pt"}} placeholder="Address" name=" teacheradress" className="form-control"
                                value={this.state.teacheradress} onChange={this.changeteacheradressHandller}/>

                            </div>

                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>No of Students</label>
                                <input style={{fontSize:"14pt"}} placeholder="No of students" name="noofstudents" className="form-control"
                                value={this.state.noofStudents} onChange={this.changenoofStudentsHandler}/>

                            </div>

                            

                            

                            <button className="btn btn-success" style={{fontSize:"15pt", backgroundColor:"#00FF00",color:"#006400",fontWeight:"bold"}}onClick={this.saveGrade}>Save</button>
                            <button className="btn btn-danger" onClick={this.cancel}  style={{marginLeft:"10px",fontSize:"15pt",backgroundColor:"#FF0000",fontSize:"15pt",fontWeight:"bold"}}>Cancel</button>

                            

                        </form>

                        </div>

                </div>
            </div>
        );
    }
}

export default CreateGradeComponent;