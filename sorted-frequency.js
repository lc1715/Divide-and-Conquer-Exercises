

function sortedFrequency(arr, target) {
    let leftIdx = findLeftIndex(arr, target)
    let rightIdx = findRightIndex(arr, target)
    if (rightIdx - (leftIdx - 1) === 0) {
        return -1
    } else {
        return rightIdx - (leftIdx - 1)
    }
}

function findLeftIndex(arr, target) {
    leftIdx = 0
    rightIdx = arr.length - 1

    while (leftIdx <= rightIdx) {
        middIdx = Math.floor((leftIdx + rightIdx) / 2)
        middVal = arr[middIdx]

        if (middVal >= target) {
            rightIdx = middIdx - 1
        } else if (middVal < target) {
            leftIdx = middIdx + 1
        }
    }
    console.log(leftIdx)
    return leftIdx
}

function findRightIndex(arr, target) {
    leftIdx = 0
    rightIdx = arr.length - 1

    while (leftIdx <= rightIdx) {
        middIdx = Math.floor((leftIdx + rightIdx) / 2)
        middVal = arr[middIdx]

        if (middVal <= target) {
            leftIdx = middIdx + 1
        } else if (middVal > target) {
            rightIdx = middIdx - 1
        }
    }
    console.log(rightIdx)
    return rightIdx
}

module.exports = sortedFrequency