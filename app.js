

function reorder(originalList, order) {
let sortingorder = '';
if (typeof order === "string") {
    sortingorder = order.split(',')
}

for (let index = 0; index < sortingorder.length; index++) {
    currentIndex =  originalList.findIndex(x => x.name.toLowerCase() === sortingorder[index].toLowerCase());
    if (index >= originalList.length) {
        var k = index - originalList.length + 1;
        while (k--) {
            originalList.push(undefined);
        }
    }
    originalList.splice(index, 0, originalList.splice(currentIndex, 1)[0]);
}

return originalList;
}

module.exports = reorder;
