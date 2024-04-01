import '../scss/SideBar.scss';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="profile_img_div">
        <img src="./img/profile_img.png" alt="" />
      </div>
      <div className="side_bar_content"></div>
    </div>
  );
}

export default SideBar;
