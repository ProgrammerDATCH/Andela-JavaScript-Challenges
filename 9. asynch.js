const setFamilyApi = async (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < arr.length; i++) {
                arr[i].totalNumberOfFamilyMembers = arr[i].childrenNumber + 2;
                if (arr[i].fatherName.toLowerCase() === "yves") reject("Yves is not an allowed dad in 2022.")
            }
            resolve(arr);
        }, 1000);
    });
}

let families = [
    {
        fatherName: "David",
        MotherName: "Noella",
        childrenNumber: 4,
    },
    {
        fatherName: "Emmy",
        MotherName: "Ange",
        childrenNumber: 6,
    },
    {
        fatherName: "Yves",
        MotherName: "Rachel",
        childrenNumber: 2,
    }
];

(async () => {
    console.log("Waiting Family DATA...")
    try {
        const family = await setFamilyApi(families);
        console.log(family);
    } catch (error) {
        console.error(error);
    }
})();