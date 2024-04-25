function FillInTheBlanksQuestion({
  name,
  question,
  blankAnswers,
  setBlanksAnswers,
}: {
  name: string;
  question: string;
  blankAnswers: string[];
  setBlanksAnswers: (blankAnswers: any[]) => void;
}) {
  const numberOfBlanks = (question?.match(/_____/g) || []).length;
  return (
    <>
      {Array.from({ length: numberOfBlanks }).map((_, index) => (
        <div key={index} className="mt-3">
          <input
            type="text"
            className="form-control"
            placeholder={"Blank Answer " + (index + 1)}
            value={blankAnswers[index]}
            style={{ maxWidth: "400px" }}
            onChange={(e) => {
              const newAnswers = [...blankAnswers];
              newAnswers[index] = e.target.value;
              setBlanksAnswers(newAnswers);
            }}
          />
        </div>
      ))}
    </>
  );
}
export default FillInTheBlanksQuestion;
