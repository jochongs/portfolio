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
        <section>
          <div className="section_title">
            <span>About me _</span>
          </div>
          <div className="section_contents">
            <div className="contents_sub_title">
              <span>신입 개발자</span>
            </div>
            <div className="contents_sub_contents">
              신입 백엔드 개발자로 스테이지어스 회사에서 서버 개발 및 배포를
              담당하고 있습니다. 현재는 인하대학교와 협력하여 학생들을 대상으로
              하는 코드 공유 플랫폼을 개발하고 있습니다.
            </div>
          </div>
          <div className="section_contents">
            <div className="contents_sub_title">
              <span>끊임없이 고민하는</span>
            </div>
            <div className="contents_sub_contents">
              문제를 발견하면 끊임없이 고민하며 개선하려 노력합니다. 대표적인
              예로, 회사에서 프론트엔드와 백엔드의 유효성 검증 코드 작성 방식의
              차이가 유지보수에 어려움을 주었습니다. 이 문제를 해결하기 위해,
              사내에서 사용할 수 있는 유효성 검증 라이브러리를 개발하였습니다.
              이 라이브러리는 오픈소스로 공개되어, 사내에서 모두가 편리하게
              사용할 수 있게 되었습니다. 이를 통해 개발 경험을 향상하고
              유지보수를 더욱 용이하게 할 수 있게 되었습니다.
            </div>
          </div>
          <div className="section_contents">
            <div className="contents_sub_title">
              <span>비즈니스 성장에 기여하는</span>
            </div>
            <div className="contents_sub_contents">
              비즈니스 성장에 기여하는 일에 큰 열정을 가지고 있습니다. 회사에서
              수기로 작성되던 API 명세서를 자동화하는 생성기는 Node.js와 Notion
              API를 통해 개발해 본 경험이 있습니다. 이를 통해 문서 관리 없이
              코드 에디터만으로 개발을 진행할 수 있었고 사내 개발자들의 개발
              경험(DX)의 향상에 기여하였습니다.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainPage;
