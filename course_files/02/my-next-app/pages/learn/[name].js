import { useRouter } from 'next/router'
import topics from "../api/topics"

export default function LearnNext() {

    const router = useRouter()
    const { name } = router.query
    const topic = topics.find(topic => topic.name === name)

    return (<h1>Learn {topic ? topic.name : ""}</h1>) 

}