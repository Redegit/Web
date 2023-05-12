function createTree(tree) {

    // tree.replaceChildren();

    let trunk = document.createElement('div');
    trunk.classList.add("trunk")

    tree.insertAdjacentElement("beforeend", trunk);


    // let branchNumber = branchNumberSelector.value

    
    let trunkHeight = parseInt(getComputedStyle(trunk).height);

    let branchNumber = trunkHeight / 30;

    let branchGap = parseInt(trunkHeight * 3 / 5 / branchNumber / 2);
    // console.log(`Branch gap = ${branchGap}`)


    for (let i = 0; i < branchNumber; i++) {
        let branch = document.createElement('div');

        branch.className = "branch";

        let spread = (99 + Math.random() * 2) / 100
        // // console.log(`Spread = ${spread}`)

        let branchTop = 10 + i * 1.5 * branchGap * spread - 10
        branch.style.top = branchTop + "px"

        let branchHeight = (-0.0021 * branchTop ** 2 + 0.914 * branchTop + 25.804)
        branch.style.height = branchHeight + "px"

        trunk.insertAdjacentElement("beforeend", branch);

        let leafNumber = Math.round(0.09 * branchHeight)
        for (let j = 0; j < leafNumber; j++) {
            let leaf = document.createElement('div');

            leaf.className = "leaf";

            let leafSpread = (70 + Math.random() * 60) / 100
            let absoluteSpread = Math.random() * 10 - 5

            // // console.log(`LeafSpread = ${leafSpread}`)
            let leafTop = (5 + j * 8) * leafSpread - 10 + absoluteSpread;
            leaf.style.top = leafTop + "px";

            let rotationSpread = Math.random() * 40 - 10
            let leafRotation = rotationSpread;
            let left = 100
            if (Math.random() > 0.5) {
                leafRotation -= 90;
                left = 0
            }
            leaf.style.setProperty("--degree", leafRotation + "deg");
            leaf.style.left = left + "%";


            let delay = 0.5 + (leafNumber - j) * 0.5;
            leaf.style.setProperty("animation-delay", delay + "s")

            let background = leafGradients[Math.floor(Math.random() * leafGradients.length)];
            leaf.style.background = background;

            branch.insertAdjacentElement("beforeend", leaf);

            // adding flowers
            setTimeout(() => {
                let currentBranch = branch;
                let flower = document.createElement("div");
                let top = leafTop * 1.1;
                var flowerNumber = leafNumber;
                let delay = (flowerNumber - j) * 0.4;

                flower.className = "flower";

                flower.style.top = top + "px";

                let degree = Math.random() * 45 - 22.5;
                flower.style.setProperty("--degree", degree + "deg");
                flower.style.transform = "rotate(" + degree + "deg)"

                flower.style.animationDelay = delay + "s";

                for (let k = 0; k < 4; k++) {
                    let petal = document.createElement("div");
                    petal.className = "petal"

                    flower.insertAdjacentElement("beforeend", petal);

                }
                currentBranch.insertAdjacentElement("beforeend", flower);
                // console.log("Flower added")
            }, 6000)
        }
    }
    // console.log(`${branchNumber} branches added`);
}

branchNumberSelector = document.getElementById("branchNumberSelector")

outBranchNumber = document.getElementById("outBranchNumber")
outBranchNumber.innerHTML = "Веток: " + branchNumberSelector.value;
branchNumberSelector.oninput = function () {
    outBranchNumber.innerHTML = "Веток: " + this.value;
}

leafGradients = ["linear-gradient(142deg, rgba(255,185,21,1) 0%, rgba(194,255,44,1) 100%)",
    "linear-gradient(142deg, rgba(249,192,60,1) 0%, rgba(162,244,69,1) 83%)",
    "linear-gradient(142deg, rgba(254,63,0,1) 4%, rgba(229,242,60,1) 92%)",
    "linear-gradient(142deg, rgb(254, 63, 0) 0%, rgb(245 255 34) 61%)"]


const trees = document.getElementsByClassName("tree")
for (let tree of trees) {
    createTree(tree);
} 