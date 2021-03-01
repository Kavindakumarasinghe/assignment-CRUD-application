import React, { Component } from 'react';
import GradeServices from '../servies/GradeServices';

class GradeComponent extends Component {
   constructor(props){
       super(props)
       this.state={
          grades: []
       }
       this.addGrade= this.addGrade.bind(this);
       this.editGrade= this.editGrade.bind(this);
       this.deleteGrade= this.deleteGrade.bind(this);
   }

   componentDidMount(){
    GradeServices.getGrades().then((res)=>{
      this.setState({grades: res.data});  
    })

}

   deleteGrade(id){
      GradeServices.deleteGrade(id).then(res =>{
        this.setState({grades :this.state.grades.filter(grade =>grade.id!== id)});
      });
   }
   editGrade(id){
       this.props.history.push(`/update-grade/${id}`);

   }

    addGrade(){
        this.props.history.push('/add-grade');
    }


    render() {
        return (
            <div>
                 <h2 className="text-center mt-3"><div style={{color:"#FF4500" ,fontWeight:"bold" ,fontSize:"24pt"}}>Class Details</div></h2> 
                 
                    <div className="row">
                        <table className="table table-stripad table-bordered mt-6 " style={{fontSize:"15pt"}} >
                            <thead>
                                <tr>
                                    <th>Teacher Name</th>
                                    <th>Teacher Phone Number </th>
                                    <th>Address</th>
                                    <th>No of Students</th>
                                    <th>Actions</th>
                                    
                                    

                                </tr>
                            </thead>  
                            <tbody style={{fontSize:"15pt"}}>
                                {this.state.grades.map(
                                    grade =>
                                    <tr key={grade.id} >
                                        <td>{grade.teacherName}</td>
                                        <td>{grade.teacherPhone}</td>
                                        <td>{grade.teacheradress}</td>
                                        <td>{grade.noofStudents}</td>
                                      
                                        <td>
                                        <button onClick={() => this.editGrade(grade.id)} className="btn btn-info" style={{fontSize:"15pt",backgroundColor:"#00FF00",color:"#006400"}} className="btn btn-info">Update</button>
                                        <button  style= {{marginLeft:"10px" , backgroundColor:"#FF0000",fontSize:"15pt"} } onClick={() => this.deleteGrade(grade.id)} className="btn btn-danger">Delete</button>
                                        </td>

                                    </tr>
                                )
    }
                            </tbody>
                        </table>   
                        
                    
                    </div> 

                    <div className="row">
                     <button className="btn btn-primary mt-6 mr-auto" style={{backgroundColor:"#00FF7F", fontSize:"15pt", color:"#000000", fontWeight:"bold"}}onClick={this.addGrade} >Add Class</button>

                 </div>

            </div>
        );
    }
}

export default GradeComponent;