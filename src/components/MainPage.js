import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import ApexChart from "./PieChart";
import BarChart from "./BarChart";
import BarChartSales from "./BarChartSales";
import Line from "./Line";
import "./MainPage.css";

function MainPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <br />
            <h4>
              <b>DashBoard </b>
              <span>
                <small
                  style={{ fontSize: 13, color: "#b0accf", cursor: "pointer" }}
                >
                  Dashboards
                </small>
              </span>
              <span>
                <small
                  style={{ fontSize: 13, color: "#b0accf", cursor: "pointer" }}
                >
                  Navy Aside
                </small>
              </span>
            </h4>
          </div>

          <br />
          <div className="col-md">
            <br />
            <div className="right">
              <button className="btn btn-primary">Today: August 16</button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">
                  <b>Author Sales</b>
                </h6>
                <div id="chart">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">
                  <b>Technologies</b>
                </h6>

                <div id="chart">
                  <ApexChart />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">
                  <b>Total Orders</b>
                </h6>
                <div id="chart">
                  <Line />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="card">
              <div className="card-header">
                <b style={{ color: "#b0accf" }}>ANNOUNCEMENTS</b>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <b>Incredibly Positive Reviews</b>
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#b0accf", fontWeight: "bold" }}
                >
                  To think of a blog, first sit down and brainstorm. Then start
                  to write down the details.
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button className="btn bColor">17, Nov 2018</button>
                  <button className="btn btn-outline-dark bCol">View</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <div className="card-header">
                <b style={{ color: "#b0accf" }}>PROJECTS</b>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <b>First Milestone Achievement</b>
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#b0accf", fontWeight: "bold" }}
                >
                  To think of a blog, first sit down and brainstorm. Then start
                  to write down the details.
                </p>
                <div>
                  <Progress
                    percent={60}
                    theme={{
                      active: {
                        color: "#5d77ff",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <div className="card-header">
                <b style={{ color: "#b0accf" }}>TODAYS SCHEDULE </b>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <b>UI/UX Design Updates</b>
                </h5>
                <h3 className="card-text" style={{ color: "#3659fd" }}>
                  <b>11:15AM - 12:30AM </b>
                </h3>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      color: "#b0accf",
                      fontWeight: "bold",
                    }}
                  >
                    <MdIcons.MdLocationOn style={{ fontSize: 16 }} />
                    248, R St. Manhattan NY...
                  </div>
                  <button className="btn btn-outline-dark bCol">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <b>Top Products</b>
              </div>
              <br />
              <div className="card-title">
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <button
                    className="btn"
                    style={{
                      display: "block",
                      backgroundColor: "#5d77ff",
                      color: "white",
                    }}
                  >
                    <AiIcons.AiOutlineBank style={{ fontSize: 30 + "px" }} />
                    <br />
                    <p>Settings</p>
                  </button>
                  <button
                    className="btn btn-light"
                    style={{
                      display: "block",
                      color: "#b0accf",
                    }}
                  >
                    <FaIcons.FaMapMarked style={{ fontSize: 30 + "px" }} />
                    <br />
                    <p>Code</p>
                  </button>
                  <button
                    className="btn btn-light"
                    style={{
                      display: "block",

                      color: "#b0accf",
                    }}
                  >
                    <RiIcons.RiStackLine style={{ fontSize: 30 + "px" }} />
                    <br />
                    <p>Design</p>
                  </button>
                </div>
                <br />
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-7">
                      <p style={{ fontSize: 12 }}>
                        <b>HTML 5 Template</b>
                      </p>
                      <p style={{ fontSize: 12, color: "#b0accf" }}>
                        FrontEnd panel
                      </p>
                    </div>
                    <div className="col-md-5">
                      <Progress
                        style={{ fontSize: 10 }}
                        percent={70}
                        theme={{
                          active: {
                            symbol: "+70%",
                            color: "red",
                          },
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-7">
                      <p style={{ fontSize: 12 }}>
                        <b>Word Press Themes</b>
                      </p>
                      <p style={{ fontSize: 12, color: "#b0accf" }}>
                        eCommerece Website Plugins
                      </p>
                    </div>
                    <div className="col-md-5">
                      <Progress
                        style={{ fontSize: 10 }}
                        percent={45}
                        theme={{
                          active: {
                            symbol: "+21%",
                            color: "blue",
                          },
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-7">
                      <p style={{ fontSize: 12 }}>
                        <b>eCommerece Websites</b>
                      </p>
                      <p style={{ fontSize: 12, color: "#b0accf" }}>
                        Shops, Fashions
                      </p>
                    </div>
                    <div className="col-md-5">
                      <Progress
                        style={{ fontSize: 10 }}
                        percent={24}
                        theme={{
                          active: {
                            symbol: "-16%",
                            color: "cyan",
                          },
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-7">
                      <p style={{ fontSize: 12 }}>
                        <b>UX/UI Design</b>
                      </p>
                      <p style={{ fontSize: 12, color: "#b0accf" }}>
                        Everything you ever imagine
                      </p>
                    </div>
                    <div className="col-md-5">
                      <Progress
                        style={{ fontSize: 10 }}
                        percent={58}
                        theme={{
                          active: {
                            symbol: "+4%",
                            color: "#656c9a",
                          },
                        }}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div class="card">
              <div class="card-header">
                <b>Sales Statistics</b>
              </div>
              <div class="card-body">
                <BarChartSales />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="flu">
        <div class="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" class="money plus">
              +$0.00
            </p>
          </div>
          <div>
            <BarChart />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default MainPage;
