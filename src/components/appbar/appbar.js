import useMediaQuery from "../../utils/useMediaQuery";
import { Menu, School, Search } from "@material-ui/icons";
import { useState } from "react";
import "./appbar.css";
import { useRouteMatch } from "react-router-dom";

function AppBar() {
  const [searchValue,setSearchValue]=useState("");
  var isSmallScreen = useMediaQuery(1025);
  const match=useRouteMatch(
      {
        path:"/login",
        strict:true,
        sensitive:true,
      }
  );
  if(match){
      return <div/>
  }
  if (isSmallScreen) {
    return (
      <div>
        <div className="appbar">
          <div className="drawer-icon-holder">
            <Menu style={{ height: "100%", color: "#00BFA6" }} />
          </div>
          <div className="tutorial-icon-holder">
            <School style={{ height: "100%", color: "#00BFA6" }} />
          </div>
        </div>
        <div className="search-bar-holder">
          <div
            style={{
              height: "auto",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "29px",
                width: "27px",
                backgroundColor: "#00BFA6",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Search style={{ color: "black", height: "18px" }} />
            </div>
            <input
              style={{
                width: "80%",
                outline: "none",
                boxShadow: "none",
                border: "none",
                height: "27px",
              }}
              className="search"
              placeholder="Search your favorite books and games"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="appbar">
        <div className="drawer-icon-holder">
          <Menu style={{ color: "#00BFA6" }} />
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", height: "auto" }}>
            <div className="search-icon">
              <Search style={{ height: "16px", color: "black" }} />
            </div>
            <input
              className="search"
              placeholder="Search for your favorite books and games"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>
        </div>
        <div className="tutorial-icon-holder">
          <School style={{ color: "#00BFA6" }} />
        </div>
      </div>
    );
  }
}
export default AppBar;
