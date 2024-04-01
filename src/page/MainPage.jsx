import SideBar from '../component/SideBar';
import '../scss/page.scss';
import '../scss/MainPage.scss';

function MainPage() {
  return (
    <div className="page_container">
      <SideBar></SideBar>
      <div className="contents_div"></div>
    </div>
  );
}

export default MainPage;
