/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Forms = () => {
  const [formFields, setFormFields] = useState([
    { type: "text", value: "", key: 0 },
  ]);
  const [formTitle, setFormTitle] = useState("");
  const inputRef = useRef(null);

  const handleTextareaSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      inputRef.current.focus();
    }
  };

  const handleFieldChange = (index, e) => {
    const newFields = [...formFields];
    newFields[index].value = e.target.value;
    setFormFields(newFields);
  };

  const addField = () => {
    const newFields = [
      ...formFields,
      { type: "text", value: "", key: formFields.length },
    ];
    setFormFields(newFields);
  };

  const removeField = (index) => {
    const newFields = formFields.filter((field) => field.key !== index);
    setFormFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { title: formTitle, fields: formFields });
  };

  return (
    <div className="flex items-center justify-center h-screen font-sans">
      <div className="absolute right-5 top-28">
        <button className="rounded-md text-white bg-blue-500  hover:bg-blue-600 text-lg h-10 px-4 focus:outline-none focus:bg-blue-600">
          Publier
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            placeholder="Titre du formulaire"
            className="w-full p-2 border-none outline-none text-4xl font-bold rounded"
            onKeyDown={handleTextareaSubmit}
            required
          ></textarea>
        </div>

        {formFields.map((field, index) => (
          <div key={field.key} className="flex items-center mb-4">
            <div className="ml-2 flex">
              <button
                type="button"
                onClick={() => removeField(field.key)}
                className={`px-2 py-1 mr-1 rounded ${
                  index === 0 ? "disabled" : ""
                }`}
                disabled={index === 0}
              >
                <DeleteIcon />
              </button>
              <button
                type="button"
                onClick={addField}
                className="px-2 py-1 rounded"
              >
                <AddRoundedIcon />
              </button>
            </div>
            <input
              ref={inputRef}
              type={field.type}
              placeholder="Contenu du formulaire"
              value={field.value}
              onChange={(e) => handleFieldChange(index, e)}
              className="w-full px-2 border-b border-gray-300 font-bold focus:outline-none focus:border-gray-400 rounded"
              required
            />
          </div>
        ))}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-black  hover:bg-gray-800 text-white rounded"
          >
            Soumettre <ArrowForwardIcon className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
