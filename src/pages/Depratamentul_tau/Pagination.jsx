import React, { useState } from 'react';

const Pagination = ({ questions, questionsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(questions.length / questionsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    return (
        <div>
            <div className="questions">
                {currentQuestions.map((question, index) => (
                    <div key={index} className="question">
                        <p>{question}</p>
                        <div className="buttons">
                            <button className="btn">Da</button>
                            <button className="btn">Nu</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Pagination;
