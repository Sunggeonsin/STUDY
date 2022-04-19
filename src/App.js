
import Proptypes from 'prop-types';

const gameList = [
  {
    id: 1,
    name: 'Longvinter',
    image: 'https://i.ytimg.com/vi/VJanLNh_Q5o/maxresdefault.jpg',
    rating: 69,
    about : '당신은 섬을 특별하게 만드는 모든 것을 조사하기 위해 Longvinter Island로 여행하도록 지정되었습니다. 섬 주변의 많은 연구 캠프 중 한 곳에서 탐험을 시작합니다. 도구를 구입하고 수집한 리소스를 판매하고 새롭고 고급 장비에 투자하여 동료 연구원과 경쟁하십시오.',
    makeby : 'Uuvana Studios'
  },
  {
    id: 2,
    name: 'ELDEN RING',
    image: 'https://cdn.wccftech.com/wp-content/uploads/2021/06/ER_KEY-ART-scaled-e1623411764381-1920x987.jpg',
    rating: 89,
    about : '본 게임은 본격적인 다크 판타지 세계를 무대로 한 액션 RPG입니다. 드넓은 필드와 던전 탐험을 통해 미지의 것들을 발견해 보세요. 앞길을 막아서는 난관과 그것을 극복했을 때의 달성감, 그리고 등장인물들의 의도가 교착하는 군상극도 즐기실 수 있습니다.',
    makeby : 'FromSoftware Inc.'
  },
  {
    id: 3,
    name: 'The Planet Crafter',
    image: 'https://gamerpaws.com/wp-content/uploads/2021/06/The-Planet-Crafter-PC-Game-Free-Download.jpg?is-pending-load=1',
    rating: 96,
    about : '우주 생존 오픈 월드 테라포밍 크래프팅 게임. 적대적인 행성의 생태계를 인간이 살 수 있도록 변화 시키십시오. 생존하고, 수집하고, 기지를 짓고, 산소, 열, 압력을 만들어 새로운 생물권을 만드세요.',
    makeby : 'Miju Games'
  },
  {
    id: 4,
    name: 'LEGO® Star Wars™: 스카이워커 사가',
    image: 'https://lc-imageresizer-live-s.legocdn.com/resize?mode=landscape&size=medium&imageUrl=https://www.lego.com/cdn/cs/catalog/assets/blt7155df873330e716/1/Star_Wars_VideoGame_1HY20_SkywalkerSaga.png&ratio=2',
    rating: 94,
    about : '9편의 스카이워커 사가 영화를 다른 영화들과 다른 게임에서 플레이하세요. 300명 이상의 플레이 가능한 캐릭터, 100대 이상의 탈 것, 그리고 탐험할 수 있는 23개의 행성이 있는 머나먼 은하계가 여태껏 본 적 없는 큰 재미를 줄 것입니다! *플레이 가능한 클래식 오비완 케노비 캐릭터 포함',
    makeby : 'TT Games'
  },
  {
    id: 5,
    name: 'Days Gone',
    image: 'https://blog.us.playstation.com/tachyon/2019/03/Days-Gone.jpg?fit=1024,1024',
    rating: 89,
    about : '전염병이 지나간 치명적인 상황의 미국을 탐험하며 싸우세요. 이 오픈월드 액션 어드벤처 게임에서 부서진 길 위를 달리며 생존을 위해 싸우고 삶의 목적을 찾아가는 드리프터이자 현상금 사냥꾼, 디컨 세인트 존을 플레이하세요.',
    makeby : 'Bend Studio'
  },
  {
    id: 6,
    name: 'Dying Light 2 Stay Human',
    image: 'https://images6.alphacoders.com/114/1148838.jpg',
    rating: 70,
    about : '바이러스가 세상을 점령하고 문명은 다시 암흑기로 돌아갔습니다. 인류의 마지막 정착지 중 하나인 이 도시 역시 붕괴 직전의 순간에 놓여 있습니다. 민첩성과 전투 스킬을 사용해 살아남으며 세계를 다시 구축하세요. 당신의 선택이 모든 것을 결정합니다.',
    makeby : 'Techland'
  },
  {
    id: 7,
    name: 'Have a Nice Death',
    image: 'https://www.nag.co.za/wp-content/uploads/2022/03/nag-Review-Have-A-Nice-Death-01.jpg',
    rating: 83,
    about : 'Have a Nice Death는 과로에 고생하는 데스가 되어 플레이하는 2D 액션 로그라이크로, 통제 불능인 직원들 때문에 영혼의 균형과 데스의 휴가 계획이 틀어지고 말았습니다. 질서를 회복하려면 대낫을 들고 직원들과 서열 정리를 해야 합니다.',
    makeby : 'Magic Design Studios'
  },
  {
    id: 8,
    name: 'Football Manager 2022',
    image: 'https://static.kinguin.net/cdn-cgi/image/w=1140,q=80,fit=scale-down,f=auto/media/images/products/_football-manager-2022-scr.jpg',
    rating: 90,
    about : '실제 감독처럼 클럽을 관리할 수 있는 특별한 경험. FM22가 승리의 열쇠를 찾아내고, 축구 철학을 팀에 심어주고, 그라운드 위에서 기쁨을 안겨줄 새롭고 과감한 방법들을 소개합니다.',
    makeby : 'Sports Interactive'
  },
  {
    id: 9,
    name: 'Age of Empires IV',
    image: 'https://ksassets.timeincuk.net/wp/uploads/sites/54/2017/08/Screen-Shot-2017-08-22-at-12.50.19.png',
    rating: 83,
    about : '많은 사랑을 받은 실시간 전략 게임이 다시 돌아옵니다. Age of Empires IV는 여러분을 지금의 세계를 만든 역사적인 대전투들의 중심으로 데려갈 것입니다.',
    makeby : 'Relic Entertainment'
  }
];

function App() {
  return (
    <div>
      {gameList.map(game => (
      <Game key={game.id} name={game.name} picture={game.image} rating={game.rating} about={game.about} makeby={game.makeby}/>
      ))}
    </div>
  );
}

function Game({name, picture, rating, about, makeby}) {
  return(
  <div>
    <h2>{name} </h2>
    <h4>이 게임에 대한 사용자 평가중 {rating}%가 긍정적입니다.</h4>
    <img src={picture} alt={name} />
    <p>{about}</p>
    <p>개발자 : {makeby}</p>
  </div>
  );
} 

Game.propTypes = {
  name : Proptypes.string.isRequired,
  picture : Proptypes.string.isRequired,
  about : Proptypes.string.isRequired,
  rating : Proptypes.number,
  makeby : Proptypes.string
};

export default App;
