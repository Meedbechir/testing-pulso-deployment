import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "../components/features/AuthSlice";

const Sondages = () => {
  const [sondage, setSondages] = useState([]);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      axios
        .get("https://pulso-backend.onrender.com/api/sondages/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const userSondages = response.data.filter((survey) => {
            return survey.owner === parseInt(localStorage.getItem("user"));
          });
          setSondages(userSondages);
        })
        .catch((error) => {
          console.error("Error fetching surveys:", error);
        });
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans">
      <div className="mt-24 flex flex-wrap justify-center gap-8">
        {sondage.length === 1 ? (
          <div
            key={sondage[0].id}
            className="w-full rounded-lg overflow-hidden shadow-lg bg-gray-200 bg-opacity-75 m-2"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {sondage[0].question}
              </div>
              <ul className="list-disc text-gray-700 text-base">
                {sondage[0].options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          sondage.map((survey) => (
            <div
              key={survey.id}
              className="rounded-lg overflow-hidden shadow-lg bg-white m-2 w-72 text-center"
            >
              <div className="py-4">
                <div className="font-bold text-xl mb-2 py-3 bg-slate-500 text-white ">
                  {survey.question}
                </div>
                <ul className=" text-gray-400 font-bold hover:text-gray-600 text-start px-5">
                  {survey.options.map((option, index) => (
                    <li key={index}>{`${index + 1}. ${option}`}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sondages;