const _inArray = (element:any, array: any[]) => {
    for (const arrayItem of array) {
        if (element === arrayItem) {
            return true;
        }
    }
    return false;
};

export const Utils = {
    inArray:    _inArray,
}