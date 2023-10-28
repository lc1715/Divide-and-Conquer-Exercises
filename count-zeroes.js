function countZeroes(arr) {
    leftIdx = 0
    rightIdx = arr.length - 1
    while (arr[leftIdx] != 0 && rightIdx >= leftIdx) {
        middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        middleVal = arr[middleIdx]
        if (middleVal === 0) {
            rightIdx = middleIdx
        } else if (middleVal > 0) {
            leftIdx = middleIdx + 1
        }
    }
    return arr.length - leftIdx
}

module.exports = countZeroes