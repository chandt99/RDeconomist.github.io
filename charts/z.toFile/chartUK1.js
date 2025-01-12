var chartUK1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Coronavirus cases",

  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newCasesBySpecimenDate&format=csv",
    "format": {"type": "csv"}
  },

  "height": 300,
  "width": "container",
  "mark": {"type": "bar"},

"selection": {
    "Region": {
      "type": "single",
      "fields": ["areaName"],
      "bind": {
        "input": "select",
        "options": [
          null,
          "East Midlands",
          "East of England",
          "London",
          "North East",
          "North West",
          "South East",
          "South West",
          "West Midlands",
          "Yorkshire and The Humber"
        ],
        "name": "Region"
      }
    }
    },
  
  "transform": [
    {
      "window": [
        {"field": "newCasesBySpecimenDate", "op": "mean", "as": "rolling_mean"}
      ],
      "frame": [-7, 7]
    },

    {"filter": {"selection": "Region"}},

    {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "mar", "date": 1},
          {"year": 2020, "month": "dec", "date": 30}
        ]
      }
    }
  ],

  "encoding": {
  
    "x": {"field": "date", "type": "temporal", "title": "Date"},
  
    "y": {
      "field": "newCasesBySpecimenDate",
      "type": "quantitative",
      "title": "New cases"
    },

    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {"field": "rolling_mean", "type": "quantitative", "title": "Cases, 7-day average", "format":",.0f"},
      {"field": "newCasesBySpecimenDate", "type": "quantitative", "title": "Cases", "format":",.0f"}
    ],

    "color": {
      "field": "areaName",
      "type": "nominal",
      "legend": null,
      "scale": {
        "scheme": "viridis"}    
      }
    }
};

vegaEmbed('#visUK1', chartUK1);
