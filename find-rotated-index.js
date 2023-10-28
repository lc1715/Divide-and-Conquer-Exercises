
function findPivotIndex(arr) {
    let pivotIndex = null
    leftIdx = 0
    rightIdx = arr.length - 1

    while (leftIdx <= rightIdx) {
        middIdx = Math.floor((leftIdx + rightIdx) / 2)
        middVal = arr[middIdx]

        if (middVal > arr[middIdx + 1]) {
            console.log(pivotIndex, 'ppppppp')
            return pivotIndex = middIdx + 1
        }
        if (middVal < arr[middIdx - 1]) {
            console.log(pivotIndex, 'ppppppp')
            return pivotIndex = middIdx
        }
        if (middVal < arr[middIdx + 1]) {
            leftIdx = middIdx + 1
        }
        if (middVal > arr[middIdx - 1]) {
            rightIdx = middIdx - 1
        }
    }
}


function findRotatedIndex(arr, target) {
    let pivotIndex = findPivotIndex(arr)
    console.log(pivotIndex, 'fffffffffff')
    leftIdx = 0
    rightIdx = pivotIndex - 1

    while (leftIdx <= rightIdx) {
        middIdx = Math.floor((rightIdx + leftIdx) / 2)
        middVal = arr[middIdx]

        if (middVal > target) {
            rightIdx = middIdx - 1
        } else if (middVal < target) {
            leftIdx = middIdx + 1
        } else {
            return middIdx
        }
    }


    leftIdx = pivotIndex
    rightIdx = arr.length - 1

    while (leftIdx <= rightIdx) {

        middIdx = Math.floor((rightIdx + leftIdx) / 2)
        middVal = arr[middIdx]

        if (middVal < target) {
            leftIdx = middIdx + 1
        }
        else if (middVal > target) {
            rightIdx = middIdx - 1
        } else
            return middIdx
    }
    return -1
}


module.exports = findRotatedIndex