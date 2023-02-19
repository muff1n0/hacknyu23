function setSustainibilityScore() {
    var volume = 2;
    var energy_efficiency = 2/volume; // 6.1 x sq ft
    var emissions = 2/volume; // 35/6
    console.log(emissions);
    var waste = 2/volume; //35/12
    console.log(waste);
    var water = 2; // 7/60
    console.log(water);
    var turnover = 2; // 7/20 
    console.log(turnover);
    var accessibility = 2; // 21/50  when this gets higher its good
    console.log(accessibility);
    
    var test = volume + energy_efficiency + emissions + waste + water + turnover + accessibility;
    console.log(test);
    console.log((100 / 6)*((35 / (6 * energy_efficiency))+((35 / (6 * emissions)))+(35 / (12 * waste))+(7 / (water*60))+(7 / (20 * turnover))+(21 * accessibility / 50)));
    // document.getElementById("score").innerHTML = (100 / 7)*((35 / (6 * energy_efficiency))+((35 / (6 * emissions)))+(127 * 7 / (150 * waste))+(14 / water)+(7 / (20 * turnover))+(6 * accessibility / 7));
  }
setSustainibilityScore()