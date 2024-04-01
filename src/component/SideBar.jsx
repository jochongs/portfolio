import '../scss/SideBar.scss';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="profile_img_div">
        <img src="./img/profile_img.png" alt="" />
      </div>
      <div className="side_bar_content">
        <div className="title_div">Contact_</div>
        <div className="sub_contents_div">
          <div className="sub_title_div">Email</div>
          <div className="contents">joch2712@naver.com</div>
        </div>
        <div className="sub_contents_div">
          <div className="sub_title_div">Github</div>
          <div className="contents">
            <a href="https://github.com/jochongs">
              https://github.com/jochongs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
