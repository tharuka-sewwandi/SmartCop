import React, { Component } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "./recommendation.css";

class BarOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {},
    };
  }

  componentDidMount() {
    axios.get("get_accident_prediction").then((response) => {
      console.log(response.data[0]);
      const data_arr = [];
      data_arr.push(response.data[0].careless_driving[0]);
      data_arr.push(response.data[0].drunk[0]);
      data_arr.push(response.data[0].overtake[0]);
      data_arr.push(response.data[0].rule_violation[0]);
      data_arr.push(response.data[0].speed[0]);
      data_arr.push(response.data[0].turning[0]);
      data_arr.push(response.data[0].other[0]);

      console.log(data_arr);
      this.setState({
        Data: {
          labels: [
            "careless_driving",
            "drunk",
            "overtake",
            "rule_violation",
            "speed",
            "turning",
            "other",
          ],
          datasets: [
            {
              label:
                "Accidet Percentage For Time Zone [ 12.00 a.m. to 6.00 a.m. ]",
              data: data_arr,
              backgroundColor: "#008080",
            },
          ],
        },
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <Bar
            data={this.state.Data}
            options={{ maintainAspectRatio: false }}
          ></Bar>
        </div>
        <div className="row">
          <br />
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-3">
            <button type="button" id="btn11">
              Other <span class="badge">88%</span>
            </button>
          </div>
          <div className="col-lg-3">
            <button type="button" id="btn11">
              turning <span class="badge">86%</span>
            </button>
          </div>
          <div className="col-lg-3">
            <button type="button" id="btn11">
              drunk <span class="badge">84%</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default BarOne;
