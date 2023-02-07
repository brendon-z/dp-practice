function tallestStack(boxes) {
    boxes.sort((a, b) => a.width - b.width)
    let heightMap = new Map();
    boxes.forEach(box => heightMap.set(box, box.height))

    for (let i = 1; i < boxes.length; i++) {
        // Find boxes that can be stacked on top of boxes[i]
        let stackable = boxes.filter(box => canBeStacked(box, boxes[i]) && box !== boxes[i])
        heightMap.set(boxes[i], boxes[i].height + Math.max(...getStackableHeights(stackable, heightMap), 0))
    }
    return Math.max(...heightMap.values(), 0)
}

function canBeStacked(top, bottom) {
    return top.width < bottom.width && top.len < bottom.len
}

function getStackableHeights(stackable, heightMap) {
    return [...heightMap].filter(([k, v]) => stackable.includes(k)).map(([k,v]) => v);
}

let boxes = [{width: 1, len: 5, height: 4}, {width: 1, len: 2, height: 2}, {width: 2, len: 3, height: 2}, {width: 2, len: 4, height: 1}, {width: 3, len: 6, height: 2}, {width: 4, len: 5, height: 3}]

console.log(tallestStack(boxes))