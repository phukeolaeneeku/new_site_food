import "./board.css";
import { IoDocumentText } from "react-icons/io5";
import { Link } from "react-router-dom";

const Board = () => {
  return (
    <>
      <section>
        <div className="boxspentainer"></div>
        <div className="board">
          <div className="manage-target">
            <div className="manage">
              <div className="containerBox_db">
                <h3>Orders</h3>
                <div className="contentBox_db">
                  <div className="menu-box four">
                    <div>
                      <IoDocumentText className="iconGad gone4" />
                      <p>Pending</p>
                    </div>
                    <h2>10</h2>
                    <Link to="/order/pending" className="txtcol">
                      <p>View More</p>
                    </Link>
                  </div>
                  <div className="menu-box three">
                    <div>
                      <IoDocumentText className="iconGad gone3" />
                      <p>Process</p>
                    </div>
                    <h2>12</h2>
                    <Link to="/order/processing" className="txtcol">
                      <p>View More</p>
                    </Link>
                  </div>
                  <div className="menu-box one">
                    <div>
                      <IoDocumentText className="iconGad gone1" />
                      <p>Shipped</p>
                    </div>
                    <h2>15</h2>
                    <Link to="/order/shipped" className="txtcol">
                      View More
                    </Link>
                  </div>
                  <div className="menu-box two">
                    <div>
                      <IoDocumentText className="iconGad gone2" />
                      <p> Delivered</p>
                    </div>
                    <h2>20</h2>
                    <Link to="/order/delivered" className="txtcol">
                      <p>View More</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Board;
