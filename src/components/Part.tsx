import { CoursePart } from "../types";

interface PartProps {
  props: CoursePart;
}

const Part = ({ props }: PartProps) => {
  switch (props.kind) {
    case "basic":
      return (
        <p>
          name: {props.name} exercises: {props.exerciseCount}{" "}
          {props.description}{" "}
        </p>
      );
    case "group":
      return (
        <p>
          name: {props.name} exercises: {props.exerciseCount}{" "}
          {props.groupProjectCount}{" "}
        </p>
      );

    case "background":
      return (
        <p>
          name: {props.name} exercises: {props.exerciseCount}{" "}
          {props.description} {props.backgroundMaterial}{" "}
        </p>
      );
    case "special":
      return (
        <p>
          name: {props.name} exercises: {props.exerciseCount}{" "}
          {props.description} requirements: {props.requirements.toString()}{" "}
        </p>
      );
    default:
      break;
  }
};

export default Part;
