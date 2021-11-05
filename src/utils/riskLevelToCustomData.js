const riskLevelToCustomData = [
  {
    riskLevel: "LOW",
    riskColor: "rgb(0, 212, 116)",
  },
  {
    riskLevel: "MEDIUM",
    riskColor: "rgb(255, 201, 0)",
  },
  {
    riskLevel: "HIGH",
    riskColor: "rgb(255, 150, 0)",
  },
  {
    riskLevel: "SEVERE",
    riskColor: "rgb(217, 0, 44)",
  },
  {
    riskLevel: "DON'T GO!",
    riskColor: "rgb(121, 0, 25)",
  },
];

// class RiskLevel {
//   constructor(level) {
//     this.level = level;
//     this.customData = [
//       {
//         riskLevel: "LOW",
//         riskColor: "rgb(0, 212, 116)",
//       },
//       {
//         riskLevel: "MEDIUM",
//         riskColor: "rgb(255, 201, 0)",
//       },
//       {
//         riskLevel: "HIGH",
//         riskColor: "rgb(255, 150, 0)",
//       },
//       {
//         riskLevel: "SEVERE",
//         riskColor: "rgb(217, 0, 44)",
//       },
//       {
//         riskLevel: "DON'T GO!",
//         riskColor: "rgb(121, 0, 25)",
//       },
//     ];

//     // getter
//     this.getDataObj = () => {
//       return this.customData[this.level - 1];
//     };

//     this.getColor = () => {
//       return this[this.getDataObj()].riskColor;
//     };

//     this.getLevel = () => {
//       return this[this.getDataObj()].riskLevel;
//     };
//   }
// }

// const riskColor = riskLevelToCustomData[overallRiskLevel - 1].riskColor;

export default riskLevelToCustomData;
