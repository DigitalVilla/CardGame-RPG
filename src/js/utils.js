//Easy PROTOTYPES
class Utils {
    // Fisher--Yates Algorithm
    shuffle(array) {
        let m = array.length,
            t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

    capFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    isNumber(value) {
        if (typeof value != "string") return false
        return !isNaN(value) && !isNaN(parseFloat(value))
    }

    sortBy (array, key, asc = true) {
        return array.sort((x,y)=>{
            let a = (asc) ? x[key] : y[key],
                b =  (asc) ? y[key] : x[key];
            return this.isNumber(a) ? a - b :
                a < b ? -1 : a > b ? 1 : 0;
        })
    }

}

export default new Utils();