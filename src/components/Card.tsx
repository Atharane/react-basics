const Card = () => {
  return (
    <div className="card">
      <div className="team-wrapper">
        <div className="home club">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u532PE5IxMIBi1uJ3l6St5exYydxuewws3yyv4cc4EsbcaoqAbjFSiN5OdYLaI__J-g&usqp=CAU"
            alt="chelsea"
          />
          <p>Chelsea</p>
        </div>
        <div className="away club">
          <img
            src="https://img.bundesliga.com/tachyon/sites/2/2022/06/Dortmund-BVB.png"
            alt="chelsea"
          />
          <p>Dortmund</p>
        </div>
      </div>

      <div className="time-wrapper">
        <div className="day">Wed, 8 March</div>
        <div className="time">1:30 am IST</div>
      </div>
    </div>
  );
};

export default Card;
