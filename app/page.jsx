import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LoginBtn from "./LoginBtn";
import { connectDB } from "@/util/database";
import List from "./List";

export default async function Home() {

  const db = (await connectDB).db("study")
  let result = await db.collection('post').find().toArray()
  console.log(result[1]._id)

  return (

    <div>

      <main>

        {/* 검색바 */}
        <div className="search-container">
          <div className="search-wrap">
            <form>
              <FontAwesomeIcon className="search-icon" icon={faSearch}></FontAwesomeIcon>
              <input className="search-bar" placeholder="키워드를 입력해보세요." type="text" />
            </form>
          </div>
        </div>

        {/* 상품 목록 */}
        <List></List>


        {/* 더보기 버튼 */}
        <div className="morebtn-container">
          <button className="morebtn">더보기</button>
        </div>

      </main>

    </div>
  )
}
