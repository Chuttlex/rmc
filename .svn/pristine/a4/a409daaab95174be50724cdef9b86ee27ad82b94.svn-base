export class RadarConfig {
    public static get configPart1(): string {
        return `var myConfig = {
            type : 'radar',
            title : {
              text : "Radar utilisant Zing"
            },
            subtitle : {
              text : "petit test"
            },
            legend :{
                "highlight-plot":true,
                "draggable":true, //automatically adds header
                // "drag-handler":"icon", //"header" (default) or "icon"
                header : {
                  text : "Equipes:"
                },
                "toggle-action" : "remove", // "hide" (default),"remove","disabled" | peut aussi être utilisé sur des items et markers
              layout : "3x1", // lignes x colonnes
              x : "70%",
              y : "10%"
            },
            plot : {
              aspect : 'area',
              animation: {
                  "on-legend-toggle" : true, // recrée le dessin quand un élément est retiré
                effect:3,
                sequence:1,
                speed:700
              }
            },
            scaleV : {
              visible : false
            },
            scaleK : {`;
    }

    public static get configPart2(): string {
        return `item : {
            fontColor : '#607D8B',
            backgroundColor : "white",
            borderColor : "#aeaeae",
            borderWidth : 1,
            padding : '5 10',
            borderRadius : 10
          },
          refLine : {
            lineColor : '#c10000'
          },
          tick : {
            lineColor : '#59869c',
            lineWidth : 2,
            lineStyle : 'dotted',
            size : 20
          },
          guide : {
            lineColor : "#607D8B",
            lineStyle : 'solid',
            alpha : 0.3,
            backgroundColor : "#c5c5c5 #718eb4"
          }
        },`;
    }
}
