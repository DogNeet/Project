import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function Home() {

  return (

    <div>
      <nav className="navbar-container">
        <div className="navbar-wrap">

          <div className="navbar-logo">
            <a href="/">크누장터</a>
          </div>

          <div className="navbar-login">
            <a href="">로그인</a>
          </div>

        </div>
      </nav>

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

        <footer>

          <div className="footer-container">

            <div className="footer-content">
              <ul>
                <li>개인정보처리방침</li>
                <li>| 고객센터</li>
              </ul>
            </div>

            <div className="footer-content">
              <p>상호명 : 크누장터(주)</p>
              <p>대표: 이시은</p>
              <p>사업자번호: 850-58-00615</p>
              <p>소재지: 대구광역시 북구 대학로 80</p>
            </div>

          </div>



        </footer>

      </main>



    </div>
  )
}
