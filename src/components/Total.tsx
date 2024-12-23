interface totalExercises {
  total: number;
}

const Total = (props: totalExercises) => {
  return <p>Number of exercises {props.total}</p>;
};

export default Total;
