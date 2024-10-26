import { useState } from "react"

export default function Quiz() {
    const [ activeQuestionIndex, setAvtiveQustionIndex ] = useState();
    const [ userAnswer, setUserAnswer ] = useState();
    return <p>Currently active Question</p>
}