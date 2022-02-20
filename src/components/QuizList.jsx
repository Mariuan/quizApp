import React from 'react'
import './css/QuizList.css';

const QuizList = ({filter}) => {
    const quizList = localStorage.getItem('quiz-list') ? JSON.parse(localStorage.getItem('quiz-list')) : [];  

    return (
        <ul className='quiz-list'>
            {quizList.map((item, index)=>(
                <li 
                className='quiz-list_item'
                key={index}>
                    <div className="item_title-holder">
                        <h2 className='item_title'>{item.title}</h2>
                    </div>
                    <div className="item_button-holder">
                        <button 
                        type='button' 
                        className='item_button'>Play</button>
                    </div>
                    <div className="item_edit-holder">
                        <button 
                        type="button" 
                        className="item_edit"
                        onClick={(e)=>{
                            if (e.target.nextSibling.classList[1]) e.target.nextSibling.classList.remove('active-option');
                            else e.target.nextSibling.classList.add('active-option');
                        }}>...</button>
                        <div className="item_edit-options">
                            <p>Edit</p>
                            <p onClick={(e)=>{
                                let quizList = localStorage.getItem('quiz-list') ? JSON.parse(localStorage.getItem('quiz-list')) : [];
                                quizList = quizList.filter((it)=>{
                                    if (it.id !== item.id) return item;
                                })
                                localStorage.setItem('quiz-list', JSON.stringify(quizList));
                                e.target.parentNode.parentNode.parentNode.remove();
                            }}>Delete</p>
                            <div className="edit-option_close-cover" 
                            onClick={(e)=>{
                                e.target.parentNode.classList.remove('active-option');
                            }}/>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default QuizList