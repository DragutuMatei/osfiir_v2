// import React, { useState } from "react";

// const PR = {
//   1: true,
//   3: false,
//   6: true,
//   11: true,
//   13: false,
//   15: false,
//   16: true,
//   19: false,
//   21: true,
//   22: false,
//   24: false,
//   26: true,
// };
// const HR = {
//   0: true,
//   4: false,
//   5: true,
//   7: false,
//   10: true,
//   11: false,
//   14: false,
//   15: true,
//   18: false,
//   20: true,
//   25: true,
//   29: false,
// };
// const FR = {
//   1: false,
//   2: true,
//   7: true,
//   9: false,
//   12: true,
//   16: false,
//   17: true,
//   20: false,
//   22: true,
//   27: true,
//   28: false,
// };
// const LOGISTICA = {
//   0: false,
//   3: true,
//   6: false,
//   8: true,
//   10: false,
//   12: false,
//   13: true,
//   18: true,
//   21: false,
//   23: true,
//   25: false,
//   27: false,
//   28: true,
// };
// const VOCATIONAL = {
//   2: false,
//   4: true,
//   5: false,
//   8: false,
//   9: true,
//   14: true,
//   17: false,
//   19: true,
//   23: false,
//   24: true,
//   26: false,
//   29: true,
// };

// const PR_REZ = 0;
// const HR_REZ = 0;
// const FR_REZ = 0;
// const LOGISTICA_REZ = 0;
// const VOCATIONAL_REZ = 0;

// const Pagination = ({ questions, questionsPerPage }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedButtons, setSelectedButtons] = useState({}); // Stores answers for all questions

//   const totalPages = Math.ceil(questions.length / questionsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const indexOfLastQuestion = currentPage * questionsPerPage;
//   const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
//   const currentQuestions = questions.slice(
//     indexOfFirstQuestion,
//     indexOfLastQuestion
//   );
//   const see = () => {
//     console.log(selectedButtons);
//     console.log(Object.keys(selectedButtons).length);
//   };
//   const choose = (index, choice) => {
//     const questionIndex = indexOfFirstQuestion + index; // Absolute index in questions array
//     setSelectedButtons((prev) => ({
//       ...prev,
//       [questionIndex]: choice, // Store answer at absolute index
//     }));
//   };

//   return (
//     <div>
//       <div className="questions">
//         {currentQuestions.map((question, index) => {
//           const questionIndex = indexOfFirstQuestion + index; // Absolute index
//           return (
//             <div key={questionIndex} className="question">
//               <p>{question}</p>
//               <div className="buttons">
//                 <button
//                   className={`btn ${
//                     selectedButtons[questionIndex] === true ? "active" : ""
//                   }`}
//                   onClick={() => choose(index, true)}
//                 >
//                   Da
//                 </button>
//                 <button
//                   className={`btn ${
//                     selectedButtons[questionIndex] === false ? "active" : ""
//                   }`}
//                   onClick={() => choose(index, false)}
//                 >
//                   Nu
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               window.scrollTo(0, 0);
//               paginate(index + 1);
//             }}
//             className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//       {currentPage == 6 && Object.keys(selectedButtons).length == 30 && (
//         <button>Află departamentul tău potrivit</button>
//       )}
//       <button onClick={see}>see</button>
//     </div>
//   );
// };

// export default Pagination;
import React, { useRef, useState } from "react";

const Pagination = ({ questions, questionsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedButtons, setSelectedButtons] = useState({}); // Stores answers

  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  // Mapping for answers -> departments
  const questionMapping = {
    0: { true: "HR", false: "Logistică" },
    1: { true: "PR", false: "FR" },
    2: { true: "FR", false: "Vocațional" },
    3: { true: "Logistică", false: "PR" },
    4: { true: "Vocațional", false: "HR" },
    5: { true: "HR", false: "Vocațional" },
    6: { true: "PR", false: "Logistică" },
    7: { true: "FR", false: "HR" },
    8: { true: "Logistică", false: "Vocațional" },
    9: { true: "Vocațional", false: "FR" },
    10: { true: "HR", false: "Logistică" },
    11: { true: "PR", false: "HR" },
    12: { true: "FR", false: "Logistică" },
    13: { true: "Logistică", false: "PR" },
    14: { true: "Vocațional", false: "HR" },
    15: { true: "HR", false: "PR" },
    16: { true: "PR", false: "FR" },
    17: { true: "FR", false: "Vocațional" },
    18: { true: "Logistică", false: "HR" },
    19: { true: "Vocațional", false: "PR" },
    20: { true: "HR", false: "FR" },
    21: { true: "PR", false: "Logistică" },
    22: { true: "FR", false: "PR" },
    23: { true: "Logistică", false: "Vocațional" },
    24: { true: "Vocațional", false: "PR" },
    25: { true: "HR", false: "Logistică" },
    26: { true: "PR", false: "Vocațional" },
    27: { true: "FR", false: "Logistică" },
    28: { true: "Logistică", false: "FR" },
    29: { true: "Vocațional", false: "HR" },
  };

  const choose = (index, choice) => {
    const questionIndex = indexOfFirstQuestion + index; // Absolute index
    setSelectedButtons((prev) => ({
      ...prev,
      [questionIndex]: choice, // Store selection
    }));
  };
  const rez = useRef();

  const [shown, setShown] = useState(false);
  const [dep, setDep] = useState([]);
  const show = () => {
    const departmentCount = {};

    // Count occurrences of each department
    Object.entries(selectedButtons).forEach(([questionIndex, choice]) => {
      const department = questionMapping[questionIndex][choice];
      departmentCount[department] = (departmentCount[department] || 0) + 1;
    });

    // Sort departments by the number of occurrences
    const sortedDepartments = Object.keys(departmentCount).sort(
      (a, b) => departmentCount[b] - departmentCount[a]
    );

    setDep(sortedDepartments);
    setShown(true);
    rez.current.scrollIntoView();

    console.log(sortedDepartments);
  };

  return (
    <div>
      <div className="questions">
        {currentQuestions.map((question, index) => {
          const questionIndex = indexOfFirstQuestion + index; // Absolute index
          return (
            <div key={questionIndex} className="question">
              <p>{question}</p>
              <div className="buttons">
                <button
                  className={`btn ${
                    selectedButtons[questionIndex] === true ? "active" : ""
                  }`}
                  onClick={() => choose(index, true)}
                >
                  Da
                </button>
                <button
                  className={`btn ${
                    selectedButtons[questionIndex] === false ? "active" : ""
                  }`}
                  onClick={() => choose(index, false)}
                >
                  Nu
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => {
              window.scrollTo(0, 0);
              paginate(index + 1);
            }}
            className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {currentPage == 6 && Object.keys(selectedButtons).length == 30 && (
        <div className="rasp" id="rezultate" ref={rez}>
          <button className="btn" onClick={() => show()}>
            Află departamentul tău potrivit
          </button>
          {shown && (
            <>
              <br />
              <h4>Noi iți recomandăm departamentele: </h4>

              <br />
               
               <div className="miau">
                <h1>
                  Main: <b> {dep[0]}</b>
                </h1>
                <h1>
                  Second: <b> {dep[1]}</b>
                </h1>
               </div>
             

              <br />
              <h4>Dar tu poți să te alături oricărui vrei! </h4>
             
              <h5>
                         Distribuie rezultatul tău pe insta cu tagul @osfiir și
                #hai_la_osfiir{" "}
              </h5>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;
