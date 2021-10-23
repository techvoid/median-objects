function getMedian(data, dataKeyValue){

    if(data && dataKeyValue){
        data.sort(function(a, b){
            return a[dataKeyValue] - b[dataKeyValue]
        })
      
        if(data.length > 0){
            if(data[0][dataKeyValue] != undefined){
                if(typeof data[Math.floor(data.length / 2)][dataKeyValue] != 'string'
                    && typeof data[Math.floor(data.length / 2) - 1][dataKeyValue] != 'string'){
                    if (data.length % 2 === 0) {
                        const medianValue = ((data[(data.length / 2) - 1][dataKeyValue] + data[(data.length / 2)][dataKeyValue]) / 2)
                        return ({error: false, value: medianValue})
                    }
                    else
                        return ({error: false, value: data[Math.floor(data.length / 2)][dataKeyValue]})
                }
                else
                    return {error: true, message: "Object value contains non numeric entry"}
            }
            else
                return {error: true, message: "Object key not found in input array"}
        }
        else
            return {error: true, message: "Empty Array"}
        
    } else
        return {error: true, message: "Invalid function parameters"}
   
}

module.exports = getMedian