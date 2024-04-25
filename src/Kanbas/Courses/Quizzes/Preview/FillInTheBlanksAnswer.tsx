import { FormControl, InputGroup } from "react-bootstrap";

function FillInTheBlanksAnswer({
  name,
  numberOfBlanks,
  selectedAnswer,
  handleAnswerSelection,
}: {
  name: string;
  numberOfBlanks: number;
  selectedAnswer: any[];
  handleAnswerSelection: (answer: any[]) => void;
}) {
  return (
    <>
      {Array.from({ length: numberOfBlanks }).map((_, index) => (
        <InputGroup key={name + index} className="mt-3">
          <InputGroup.Text>{index + 1}</InputGroup.Text>
          <FormControl
            type="text"
            className="form-control"
            placeholder={"Blank Answer " + (index + 1)}
            value={selectedAnswer?.[index]?.value || ""}
            style={{ maxWidth: "400px" }}
            onChange={(e) => {
              const answer = {
                index: index,
                value: e.target.value,
              };
              if (!selectedAnswer) {
                selectedAnswer = [];
              }
              selectedAnswer[index] = answer;
              handleAnswerSelection(selectedAnswer);
            }}
          />
        </InputGroup>
      ))}
    </>
  );
}
export default FillInTheBlanksAnswer;
