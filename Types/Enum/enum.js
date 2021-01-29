var Week;
(function (Week) {
    Week[Week["sun"] = 0] = "sun";
    Week[Week["mon"] = 22] = "mon";
    Week[Week["tue"] = 23] = "tue";
    Week[Week["wed"] = 24] = "wed";
    Week[Week["thu"] = 25] = "thu";
    Week[Week["fri"] = 26] = "fri";
})(Week || (Week = {}));
console.log(Week.mon);
console.log(Week.tue);
