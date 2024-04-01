import SideBar from '../component/SideBar';
import '../scss/page.scss';
import '../scss/MainPage.scss';

function MainPage() {
  return (
    <div className="page_container">
      <SideBar></SideBar>
      <div className="contents_div">
        <header>
          <div className="kor_name_div">
            <span>민경찬 _</span>
          </div>
          <div className="eng_name_div">
            <span>JoChong _</span>
          </div>
          <div className="job_name_div">
            <span>Backend Developer</span>
          </div>
        </header>
      </div>
    </div>
  );
}

export default MainPage;
