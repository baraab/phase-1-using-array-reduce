const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const batteryReducer = (accumulator, currentValue) => accumulator + currentValue;

const totalBatteries = batteryBatches.reduce(batteryReducer, 0);

const module= module.exports = { totalBatteries };