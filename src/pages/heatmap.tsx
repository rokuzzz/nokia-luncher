import {
  Typography,
  Container,
  List,
  ListItem,
  Divider,
  ListItemText,
  Box,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { MenuComponentBox } from "../styles/menu";
import { Course, MenuItem } from "../types/menuApiData";

import h337 from "heatmap.js";
import { useEffect } from "react";

export default function Heatmap() {
  useEffect(() => {
    var heatmapInstance = h337.create({
      // only container is required, the rest will be defaults
      container: document.querySelector(".heatmapContainer")!!,
    });
    // now generate some random data
    var points = [];
    var max = 100;
    var width = 900;
    var height = 600;
    var len = 1000;

    while (len--) {
      var val = Math.floor(Math.random() * 100);
      // now also with custom radius
      var radius = Math.floor(Math.random() * 70);

      max = Math.max(max, val);
      var point = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        value: val,
        // radius configuration on point basis
        radius: radius,
      };
      points.push(point);
    }
    // heatmap data format
    var data = {
      max: max,
      min: 0,
      data: points,
    };
    // if you have a set of datapoints always use setData instead of addData
    // for data initialization
    heatmapInstance.setData(data);

    function pointsAtZone(
      zone: number,
      maxZone: number,
      map: h337.Heatmap<"value", "x", "y">
    ) {
      let result = 0;
      return result;
    }

    let zone1Val = 0;
    for (let i = 0; i <= width/6; i++) {
        zone1Val += heatmapInstance.getValueAt({ x: i, y: i })
        console.log(zone1Val)
    }
    const value = document.getElementById("zone1");
    value!!.textContent = heatmapInstance
      .getValueAt({ x: 10, y: 10 })
      .toString();
    console.log(heatmapInstance.getValueAt({ x: 10, y: 10 }));
  });

  return (
    <div>
      <div className="heatmapContainer">
        <Box
          sx={{
            width: 900,
            height: 600,
          }}
        />
      </div>
      <p id="zone1"></p>
    </div>
  );
}
