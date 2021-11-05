// const riskLevelToCustomData = [
//   {
//     riskLevel: "LOW",
//     riskColor: "rgb(0, 212, 116)",
//   },
//   {
//     riskLevel: "MEDIUM",
//     riskColor: "rgb(255, 201, 0)",
//   },
//   {
//     riskLevel: "HIGH",
//     riskColor: "rgb(255, 150, 0)",
//   },
//   {
//     riskLevel: "SEVERE",
//     riskColor: "rgb(217, 0, 44)",
//   },
//   {
//     riskLevel: "DON'T GO!",
//     riskColor: "rgb(121, 0, 25)",
//   },
// ];

class RiskLevelData {
  constructor(level) {
    this.level = level || 0;
    this.customData = [
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

    this.getLevel = () => {
      return this.level;
    };

    this.getCustomData = () => {
      return this.customData;
    };

    this.getRiskObj = () => {
      return this.customData[this.level - 1];
    };

    this.getRiskColor = () => {
      return this.getDataObj().riskColor;
    };

    this.getRiskLevel = () => {
      return this[this.getDataObj()].riskLevel;
    };
  }
}

export default RiskLevelData;
// export default riskLevelToCustomData
