import React, { Component } from 'react';
import GradeServices from '../servies/GradeServices';

class UpdateGradeComponent extends Component {
    
    constructor(props){
        super(props)
        this.state={
                id:this.props.match.params.id,
                teacherName:'',
                teacherPhone:'',
                teacheradress:'',
                noofStudents :''
                



        }
        this.changeteacherNameHandler = this.changeteacherNameHandler.bind(this);
        this.changeteacherPhoneHandler = this.changeteacherPhoneHandler.bind(this);
        this.changeteacheradressHandler = this.changeteacheradressHandler.bind(this);
        this.changenoofStudentsHandler = this.changenoofStudentsHandler.bind(this);
        
        this.updateGrade = this.updateGrade.bind(this);
        this.cancel =this.cancel.bind(this);
    
    }

    componentDidMount(){
        GradeServices.getGradeById(this.state.id).then((res)=>{
            let grade= res.data;
            this.setState(
                {
                    teacherName:grade.teacherName,
                    teacherPhone:grade.teacherPhone,
                    teacheradress:grade.teacheradress,
                    noofStudents:grade.noofStudents,
                    
                
                
                });
        });
    }

    updateGrade = (e) =>{
        e.preventDefault();
        let grade= {teacherName:this.state.teacherName, teacherPhone: this.state.teacherPhone, teacheradress:this.state.teacheradress, noofStudents:this.state.noofStudents};
        console.log('grade =>'+ JSON.stringify(grade));
        GradeServices.updateGrade(grade, this.state.id).then(res=>{
            this.props.history.push('/grades');
        });

        GradeServices.updateGrade(grade).then(res =>{
            this.props.history.push('/grades');
        });

    }

    changeteacherNameHandler = (event)=>{
        this.setState({teacherName: event.target.value});
    }

   changeteacherPhoneHandler = (event)=>{
        this.setState({teacherPhone: event.target.value});
    }
    changeteacheradressHandler= (event)=>{
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
                    <h3 className="text-center" style={{fontSize:"22pt",color:"#000080"}}>Update Grade  Information</h3>
                        <div className="card-body mt-4">

                        <form> 
                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>Teacher Name</label>
                                <input style={{fontSize:"14pt"}} placeholder="Teacher Name" name="teacherName" className="form-control"
                                value={this.state.teacherName} onChange={this.changeteacherNameHandler}/>

                            </div>

                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>Phone Number</label>
                                <input style={{fontSize:"14pt"}} placeholder="Phone Number" name="teacherPhone" className="form-control"
                                value={this.state.teacherPhone} onChange={this.changeteacherPhoneHandler}/>

                            </div>

                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>Address</label>
                                <input style={{fontSize:"14pt"}} placeholder="Address" name="teacheradress" className="form-control"
                                value={this.state.teacheradress} onChange={this.changeteacheradressHandler}/>

                            </div>

                            <div className="form-group">
                                <label style={{fontSize:"18pt"}}>No of Students</label>
                                <input style={{fontSize:"14pt"}} placeholder="No of Students" name=" noofStudents" className="form-control"
                                value={this.state.noofStudents} onChange={this.changenoofStudentsHandler}/>

                            </div>

                            

                            <button className="btn btn-success" onClick={this.updateGrade} style={{backgroundColor:"#00FF00",color:"#006400",fontWeight:"bold", fontSize:"15pt"}}>Update</button>
                            <button className="btn btn-danger" onClick={this.cancel} style={{backgroundColor:"#FF0000",marginLeft:"10px",fontSize:"15pt",fontWeight:"bold"}}>Cancel</button>

                            

                        </form>

                        </div>

                </div>
            </div>
        );
    }
}
export default UpdateGradeComponent;