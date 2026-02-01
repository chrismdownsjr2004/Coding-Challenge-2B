console.log("Inventory Assistant Loaded");
let firstName= "USB-C"
let lastName= "Cable"
let unitCost= 3.50
let currentStock= 75
let reorderlevel= 50
let targetStockLevel= 200
let weeklyDemand= 75
let supplierLeadTimeWeeks= 2.00
let weeksOfCover= weeklyDemand > 0 ? currentStock / weeklyDemand   : Infinity;
let stockDeficit = Math.max(0, targetStockLevel - currentStock)
let reorderQuantity = (currentStock <= reorderlevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
let estimatedReorderCost =reorderQuantity * unitCost
let reorderNow = currentStock <= reorderlevel || weeksOfCover < supplierLeadTimeWeeks
console.log(weeksOfCover.toFixed(2))
console.log(reorderNow)
console.log(reorderQuantity)
console.log(estimatedReorderCost.toFixed(2))
