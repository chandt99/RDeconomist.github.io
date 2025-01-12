var chartG3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Covid-19 data, from ECDC",

  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/db_covidLocalRisk.csv"
  },
  
  "selection": {
    "paintbrush": {"type": "multi", "on": "mouseover", "nearest": true},
    "grid": {"type": "interval", "bind": "scales"}
  },

  "encoding": {
    "x": {
      "field": "risk_share",
      "type": "quantitative",
      "axis": {
        "title": "At risk / Population",
        "grid": false,
        "tickCount": 14,
        "format": ".1%",
        "labelOverlap": "greedy"
      }
    },
    "y": {
      "field": "cases_pop",
      "type": "quantitative",
      "axis": {"title": "Cases / Population", "grid": false, "format": ".2%"}
    },
    
    "size": {
      "condition": {"selection": "paintbrush", "value": 300, "init":{"value":70}},
      "value": 70
    },
    "tooltip": [
      {"field": "areaname", "type": "ordinal", "title": "Location"},
      
      {
        "field": "cases_pop",
        "type": "nominal",
        "title": "Cases % population",
        "format": ".2%"
      },
      {
        "field": "risk_share",
        "type": "nominal",
        "title": "75+, % population",
        "format": ".2%"
      }
    ]
  },
  "xxtitle": {
    "text": "COVID-19 - CASES AND DEATHS PER CAPITA",
    "anchor": "start",
    "color": "black"
  },
  "config": {"background": "#FcFdFd"},
  "height": 300,
  "width": 340,
  "mark": {"type": "circle", "opacity": 0.4, "color":"blue"}
}
;

vegaEmbed('#chartG3', chartG3, {"actions":false});
