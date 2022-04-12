import { StudentService } from './student.service';
import { StudentDTO } from './dto/student.dto';
import { Student } from './interface/student.interface';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getAllStudent(): Promise<Student[]>;
    getOneStudent(id: string): Promise<Student>;
    updateOneStudent(id: string, data: StudentDTO): Promise<Student>;
    deleteOneStudent(id: string): Promise<Student>;
    createStudent(data: StudentDTO): Promise<Student>;
}
