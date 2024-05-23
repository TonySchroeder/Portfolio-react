import MarqueeList from "react-fast-marquee";

const Marquee = () => {
  return (
    <div className="tf__brand mt_120 xs_mt_80">
      <div className="row">
        <div className="col-12">
          <div className="marquee_animi">
            <MarqueeList>
              <ul>
                <li>* PHP</li>
                <li>* Pyrhon</li>
                <li>* design</li>
                <li>* world</li>
                <li>* Development</li>
              </ul>
            </MarqueeList>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Marquee;
