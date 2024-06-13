import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LoginBtn from "./LoginBtn";
import { connectDB } from "@/util/database";

export default async function Home() {

  const db = (await connectDB).db("study")
  let result = await db.collection('post').find().toArray()
  console.log(result[1].title)

  return (

    <div>

      <main>

        <div className="search-container">
          <div className="search-wrap">
            <form>
              <FontAwesomeIcon className="search-icon" icon={faSearch}></FontAwesomeIcon>
              <input className="search-bar" placeholder="키워드를 입력해보세요." type="text" />
            </form>
          </div>
        </div>

        <div className="main-container">
          <div className="main-wrap">
            {
              result.map((a, i) => {
                return (
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
                )
              })
            }
          </div>
        </div>

        <div className="morebtn-container">
          <button className="morebtn">더보기</button>
        </div>

      </main>

    </div>
  )
}
