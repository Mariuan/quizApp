import React, {useState} from 'react'
import "./css/Main.css";
import QuizList from '../components/QuizList';

const Main = () => {
    const [filter, setFilter] = useState('');

    const createQuiz = () => {
        let quizList = localStorage.getItem('quiz-list') ? JSON.parse(localStorage.getItem('quiz-list')) : [];
        const quizData = {id: Math.floor((1 + Math.random()) * 0x10000), title: `Title ${quizList.length+1}`}
        quizList = [...quizList, quizData];
    }

    return (
        <div className='main'>
            <div className="options-block">
                <div className="filter-block">
                    <input 
                    type="text"
                    onChange={(e)=>setFilter(e.target.value)}
                    placeholder="Search..."
                    className='option-filter-input'/>
                </div>
                <div className="buttons-block">
                    <button
                    type="button"
                    className='option-button'
                    onClick={createQuiz}>Create</button>
                </div>
            </div>
            <QuizList filter={filter} />
        </div>
    )
}

export default Main