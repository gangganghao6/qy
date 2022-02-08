import { Carousel, Space } from "antd";
// import './PPT.css'
const contentStyle = {
  height: "200px",
  color: "#fff",
  lineHeight: "200px",
  textAlign: "center",
  background: "#364d79",
  marginLeft: "20px",
  marginRight: "20px",
};

export default function () {
  return (
    <div className={"ppt"}>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}
