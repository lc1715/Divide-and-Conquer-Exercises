
function findFloor(arr, target) {
    leftIdx = 0
    rightIdx = arr.length - 1

    while (leftIdx <= rightIdx) {
        middIdx = Math.floor((leftIdx + rightIdx) / 2)
        middVal = arr[middIdx]

        if (middVal < target && arr[middIdx + 1] >= target) {
            return arr[middIdx]
        } else {
            rightIdx = middIdx - 1
        }
    }

    leftIdx = 0
    rightIdx = arr.length - 1

    while (leftIdx <= rightIdx) {
        middIdx = Math.floor((leftIdx + rightIdx) / 2)
        middVal = arr[middIdx]

        if (middVal >= target && arr[middIdx - 1] < target) {
            return arr[middIdx - 1]
        } else {
            leftIdx = middIdx + 1
        }
    }

    if (middVal < target) {
        return middVal
    } else {
        return -1
    }
}

module.exports = findFloor