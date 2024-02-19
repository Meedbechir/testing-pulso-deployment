/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";
import { selectToken } from "../components/features/AuthSlice";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const Forms = () => {
  const [token, setToken] = useState(useSelector(selectToken));
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState([
    { type: "text", value: "", key: 0 },
  ]);
  const [formTitle, setFormTitle] = useState("");
  const inputRef = useRef(null);

  const [formData, setFormData] = useState({
    question: "",
    options: [],
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.warning(
        "Veuillez vous identifier avant de pouvoir créer un sondage"
      );
      setTimeout(() => {
        navigate('/connexion')
      }, 2000);

      return;
    }

    await submitForm({
      question: formTitle,
      options: formFields.map((field) => field.value),
    });
  };

  const submitForm = async (formData) => {
    try {
      const owner = localStorage.getItem("user");

      if (!owner) {
        console.error("User not logged in. Unable to create the survey.");
        return;
      }

      formData.owner = owner;

      const res = await axios.post(
        "https://pulso-backend.onrender.com/api/sondages/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", res.data);
      console.log(
        "Owner in API Response:",
        res.data ? res.data.owner : "No owner property"
      );

      if (res.status === 200 || res.status === 201) {
        console.log("Survey created successfully!");
        setFormTitle("");
        setFormFields([{ type: "text", value: "", key: 0 }]);

        const sondageId = res.data.id;
        const lienSondage = `http://localhost:5173/sondages/${sondageId}`;
        console.log("Lien sondage:", lienSondage);
      } else {
        console.error("Unexpected status code:", res.status);
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen font-sans">
      <Toaster position="top-left" />
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
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
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