exports.removeByKey = (object, deleteKey) => {
    return Object.keys(object)
        .filter(key => key != deleteKey)
        .reduce((result, current) => {
        result[current] = object[current];
        return result;
        }, {});
};