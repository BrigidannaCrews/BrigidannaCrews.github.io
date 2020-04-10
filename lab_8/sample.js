/*function callbackFnDemo(arg1, cb){
    if(arg === 2){
        cb = arg1 * 2;
    }
}

callbackFnDemo(2, (x) =>{

    callbackFnDemo(x, function(x){
        callbackFnDemo(3, () => {
            x
        })
    })

})*/

data.reduce((result, currentItem) => {

    if(!result[currentItem.category]){
        result[currentItem.cateogry] = [];
    }

    result[currentItem.category].push(currentItem);

    return result;

}, {});


arr.map(m => {
    return m.x;
})

.find
.filter

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();

}