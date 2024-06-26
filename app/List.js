import { connectDB } from "@/util/database"
import Link from "next/link"

export default async function List() {

    const db = (await connectDB).db("study")
    let result = await db.collection('post').find().toArray()

    return (

        <div className="main-container">
            <div className="main-wrap">
                {
                    result.map((a, i) => {

                        return (

                            <Link href={'/detail/' + result[i]._id}>
                                <div className="main-content">

                                    <div className="main-img">
                                        <img src={result[i].imagepath} alt="" />
                                    </div>

                                    <h3>{result[i].title}</h3>
                                    <h2>{result[i].price}</h2>

                                    <div className="sub-content">
                                        <p>{result[i].username}</p>
                                        <p>{result[i].date}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}