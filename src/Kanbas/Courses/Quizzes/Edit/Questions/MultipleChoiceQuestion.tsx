import { FormControl, InputGroup } from "react-bootstrap";
import { FaX } from "react-icons/fa6";

function MultipleChoiceQuestion({
  choices,
  setChoices,
  setCorrectAnswer,
}: {
  choices: string[];
  setChoices: (options: string[]) => void;
  setCorrectAnswer: (correctOption: string) => void;
}): JSX.Element {
  return (
    <>
      {choices?.map((choice, index) => (
        <InputGroup className="mt-1" style={{ maxWidth: "400px" }} key={index}>
          <InputGroup.Radio
            name="answersRadio"
            onChange={() => setCorrectAnswer(choice)}
          />
          <FormControl
            as="textarea"
            rows={1}
            placeholder="Choice"
            value={choice}
            onChange={(e) => {
              const newOptions = [...choices];
              newOptions[index] = e.target.value;
              setChoices(newOptions);
            }}
          />
          <FaX
            className="ms-2 text-danger"
            style={{ fontSize: "0.75em", cursor: "pointer" }}
            onClick={(e) => {
              const newOptions = choices.filter((_, i) => i !== index);
              setChoices(newOptions);
            }}
          />
        </InputGroup>
      ))}
      <div className="text-center mt-3">
        <button
          className="btn"
          style={{ backgroundColor: "#f5f5f5" }}
          onClick={() => setChoices([...choices, ""])}
        >
          + Add Another Answer
        </button>
      </div>
    </>
  );
}
export default MultipleChoiceQuestion;
