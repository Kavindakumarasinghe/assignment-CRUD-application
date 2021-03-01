import axios from 'axios';
const GRADE_API_BASE_URL ="http://localhost:8080/api/v1/grades";
class GradeServies{
    getGrades(){
        return axios.get(GRADE_API_BASE_URL);
    }
    createGrade(grade){
        return axios.post(GRADE_API_BASE_URL, grade);

    }
    getGradeById(gradeId){
        return axios.get(GRADE_API_BASE_URL + '/'+ gradeId);
    }
   updateGrade(grade, gradeId){
        return axios.put(GRADE_API_BASE_URL +'/'+ gradeId,grade);
    }
   deleteGrade(gradeId){
        return axios.delete(GRADE_API_BASE_URL +'/'+ gradeId);
    }


}
export default new GradeServies()