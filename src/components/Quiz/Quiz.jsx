import { useRef, useState } from 'react'
import './quiz.css'

function Quiz() {

    const [ready, setReady] = useState(false)
    const [index, setIndex] = useState(0)
    const [alert, setAlert] = useState('')

    const optionClick = (clickedOp) => {
        clickedOp.classList.add('selected')

        if(clickedOp.textContent.trim().toLowerCase() === questions[index].answer.trim().toLocaleLowerCase() && index < questions.length) {
            setReady(true)
            setAlert('Correct')
        }
        else {
            if(index < questions.length-1) {
                setReady(true)
                setAlert('Wrong')
            }
        }
    }
    const nextQuestion = () => {
        if(ready && index < questions.length-1) {
            setIndex(index+1)
            setReady(false)
        }
    }
    const restart = () => {
        window.location.reload()
    }

    const questions = [
        { question: 'What does HTML stands for?', options: [
            'Hyper Text Mail Language', 'Hyper Tree Mail Language', 'Hyper Text Markup Language'
        ], answer: 'Hyper Text Markup Language'},
        { question: 'What is Vue?', options: [
            'JavaScript Library', 'JavaScript Framework', 'PHP Framework'
        ], answer: 'JavaScript Framework'},
        { question: 'Is Reactjs a framework?', options: ['No', 'Yes'], answer: 'No'},
        { question: 'Difference between span and div?', options: [
            'Span is an inline element and div not', 'Span and div are inline elements', 'Div is a block element and Span not'
        ], answer: 'Div is a block element and Span not'},
        { question: 'Who is the creator of Apple?', options: ['Bill Gates', 'Steve Jobs', 'Jeff Bezos'], answer: 'Steve Jobs' },
        { question: 'Which one is not a FAANG company?', options: ['Facebook', 'Apple', 'Google', 'IBM', 'Amazon'], answer: 'IBM' },
    ]

  return (
    <section>
        <div className="logic">
                <div className="question">
                    {questions[index].question}
                </div>
                <div className={`options ${ready? 'submitted': ''}`}>
                    {
                        questions[index].options.map((option)=> (
                            <div className="option" key={option} onClick={(e) => optionClick(e.target)}>{option}</div>
                        ))
                    }
                </div>
                {(ready && index < questions.length-1) && <div className="next" onClick={nextQuestion}>Next</div>}
                <div className='reload' onClick={restart}>Restart</div>
                <div className='alert '>
                    {ready && <p className={alert === 'Correct' ? 'correct' : alert === 'Wrong' ? 'wrong': ''}>{alert}</p>}
                </div>
        </div>
    </section>
  )
}

export default Quiz