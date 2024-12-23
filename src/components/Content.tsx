import { CoursePart } from "../types";
import Part from "./Part";

interface ContentProps {
  courses: CoursePart[];
}

const Content = ({ courses }: ContentProps) => {
  return (
    <div>
      {courses.map((course) => (
        <Part key={course.name} props={course} />
      ))}
    </div>
  );
};

export default Content;
