
function findRotationCount(arr) {
    leftIdx = 0
    rightIdx = arr.length - 1

    while (leftIdx <= rightIdx) {
        middIdx = Math.floor((leftIdx + rightIdx) / 2)
        middVal = arr[middIdx]

        if (middVal < arr[middIdx - 1]) {
            return middIdx
        } else {
            leftIdx = middIdx + 1
        }
    }

    leftIdx = 0
    rightIdx = arr.length - 1

    while (leftIdx <= rightIdx) {
        middIdx = Math.floor((leftIdx + rightIdx) / 2)
        middVal = arr[middIdx]

        if (middIdx === 0 || middVal < arr[middIdx - 1]) {
            console.log(middIdx)
            return middIdx
        } else {
            rightIdx = middIdx - 1
        }
    }
}


module.exports = findRotationCount
