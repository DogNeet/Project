import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LoginBtn from "./LoginBtn";


export default function Home() {

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

            <div className="main-content">
              <div className="main-img">
                <img src="https://sieunie.shop/img/b1560463-57b3-4295-8a38-bf9474365943.jpeg" alt="" />
              </div>
              <h3>쓰다 남은 물티슈 팝니다.</h3>
              <h2>5,000원</h2>
              <div className="sub-content">
                <p>뜨거운 감자</p>
                <p>3일 전</p>
              </div>
            </div>



            <div className="main-content">
              <div className="main-img">
                <img src="https://sieunie.shop/img/b1560463-57b3-4295-8a38-bf9474365943.jpeg" alt="" />
              </div>
              <h3>쓰다 남은 물티슈 팝니다.</h3>
              <h2>5,000원</h2>
              <div className="sub-content">
                <p>뜨거운 감자</p>
                <p>3일 전</p>
              </div>
            </div>


            <div className="main-content">
              <div className="main-img">
                <img src="https://sieunie.shop/img/b1560463-57b3-4295-8a38-bf9474365943.jpeg" alt="" />
              </div>
              <h3>쓰다 남은 물티슈 팝니다.</h3>
              <h2>5,000원</h2>
              <div className="sub-content">
                <p>뜨거운 감자</p>
                <p>3일 전</p>
              </div>
            </div>


            <div className="main-content">
              <div className="main-img">
                <img src="https://sieunie.shop/img/b1560463-57b3-4295-8a38-bf9474365943.jpeg" alt="" />
              </div>
              <h3>쓰다 남은 물티슈 팝니다.</h3>
              <h2>5,000원</h2>
              <div className="sub-content">
                <p>뜨거운 감자</p>
                <p>3일 전</p>
              </div>
            </div>


            <div className="main-content">
              <div className="main-img">
                <img src="https://sieunie.shop/img/b1560463-57b3-4295-8a38-bf9474365943.jpeg" alt="" />
              </div>
              <h3>쓰다 남은 물티슈 팝니다.</h3>
              <h2>5,000원</h2>
              <div className="sub-content">
                <p>뜨거운 감자</p>
                <p>3일 전</p>
              </div>
            </div>


            <div className="main-content">
              <div className="main-img">
                <img src="https://sieunie.shop/img/b1560463-57b3-4295-8a38-bf9474365943.jpeg" alt="" />
              </div>
              <h3>쓰다 남은 물티슈 팝니다.</h3>
              <h2>5,000원</h2>
              <div className="sub-content">
                <p>뜨거운 감자</p>
                <p>3일 전</p>
              </div>
            </div>


            <div className="main-content">
              <div className="main-img">
                <img src="https://sieunie.shop/img/b1560463-57b3-4295-8a38-bf9474365943.jpeg" alt="" />
              </div>
              <h3>쓰다 남은 물티슈 팝니다.</h3>
              <h2>5,000원</h2>
              <div className="sub-content">
                <p>뜨거운 감자</p>
                <p>3일 전</p>
              </div>
            </div>


            <div className="main-content">
              <div className="main-img">
                <img src="https://sieunie.shop/img/b1560463-57b3-4295-8a38-bf9474365943.jpeg" alt="" />
              </div>
              <h3>쓰다 남은 물티슈 팝니다.</h3>
              <h2>5,000원</h2>
              <div className="sub-content">
                <p>뜨거운 감자</p>
                <p>3일 전</p>
              </div>
            </div>


          </div>

        </div>

        <div className="morebtn-container">
          <button className="morebtn">더보기</button>
        </div>



      </main>



    </div>
  )
}
