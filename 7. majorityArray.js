function hasMajorityElement(arr) {
    const counts = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > arr.length / 2) {
            return true;
        }
    }
    return false;
}

console.log("[3, 1, 3, 4, 3] has majority element? => ", hasMajorityElement([3, 1, 3, 4, 3])); 
console.log("[3, 1, 3, 4, 4] has majority element? => ", hasMajorityElement([3, 1, 3, 4, 4]));
