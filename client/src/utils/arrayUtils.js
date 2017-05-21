const arrayUtils = {
    swap(array, firstIndex, secondIndex) {
        let temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;

        return array;
    },

    sortExceptFirst(array, sortQuery) {
        let sortedRestOfArray = array.slice(1).sort(sortQuery);

        array.length = 1;
        array.push(...sortedRestOfArray);

        return array;
    }
};

export default arrayUtils;