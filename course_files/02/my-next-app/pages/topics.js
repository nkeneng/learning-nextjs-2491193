import Link from "next/link"
import topics from "./api/topics"

export default function Topics() {

    return (
        <>
            <h1>Topics</h1>
            <ul>
                {topics.map(topic => (
                    <li key={topic.name}>
                        <Link href={`/learn/${topic.name}`}>
                            <a>{topic.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )


}