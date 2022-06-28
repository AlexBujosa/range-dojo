class Range {

    constructor(range){
        this.range = range
        this.trimmedString = range.trim()
        this.start = parseInt(this.trimmedString.slice(1, this.range.indexOf(',')))
        this.end = parseInt(this.trimmedString.slice(this.range.indexOf(',') + 1, -1))
    }

    parse(){
        if(this.range[0] == '('){
            start += 1
        }

        if(this.range.slice(-1) == ')'){
            start -= 1
        }
    }

    isCorrect(){
        if (start > end) {
            throw new Error('The end is greater than the beginning')
        }

        if (!Number.isInteger(start) || !Number.isInteger(end)){
            throw new Error('A non-integer value was given')
        }

        return true
    }

    contains(arr){
        let numbers = []
        let commas = arr.match(/,/g).length
        for (let i = 0; i <= commas; i++){
            arr.indexOf(',') === -1 ? numbers.push(parseInt(arr.slice(0, arr.indexOf(',')))) : numbers.push(parseInt(arr.slice(0, arr.length)))
            arr = arr.slice(arr.indexOf(',') + 1, arr.length)
        }

    }

    containsRange(s, e){
        if(start <= s && end >= e){
            return true
        }
        
        return false
    }

    getAllPoints (){
        return this.range
    }

    getEndPoints(){
        let endPoints = [];
        endPoints.push(this.range[0])
        endPoints.push(this.range.slice(-1).pop())
        return endPoints
    }

    Equals(arr){
        return JSON.stringify(arr) === JSON.stringify(this.range)
    }
}


module.exports = {
    Range
}