import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"


export default async function Detail(props) {
    const db = (await connectDB).db("study")
    let result = await db.collection('post').findOne({ _id: new ObjectId('666a452966de94bed607e195') })
    console.log(result)

    // let today = new Date()

    return (

        <div className="main-container">
            <div className="main-wrap">
                <div className="detail-img">
                    <img src={result.imagepath} alt="" />
                </div>

            </div>


            <div style={{ display: 'inline-block', marginLeft: '20px', marginTop: '0px' }}>
                <h3>댓글 1개</h3>
            </div>

            <div className="comment-container">

                <div className="comment-wrap">

                    <div className="comment">

                        <div className="comment-img">
                            <img src="https://sieunie.shop/img/a1f0bbe4-008c-4884-ba4b-4e9ace8ddd7c.jpeg" alt="" />
                        </div>

                        <div className="comment-info">

                            <div id="user-info">
                                <div>
                                    <p>예아</p>
                                </div>

                                <div id="date">
                                    <p>방금 전</p>
                                </div>
                            </div>

                            <div className="comment-content">
                                <p>반갑노</p>
                            </div>

                        </div>
                    </div>
                </div>


            </div>



            {/* <p>2024-05-05</p>
            <h4>{result.title}</h4>
            <h4>{result.price}</h4>
            <p>{result.content}</p> */}
        </div>

    )
}