export const dependenciesCheck = (dependencies, form) => {
    if (!dependencies) {
        return true;
    }
    const dependenciesKeys = Object.keys(dependencies);
    let showItem = false;
    dependenciesKeys.forEach(key => {
        const item = form.find((item) => item.id === key);
        if (item.value) {
            if (typeof dependencies[key] === 'function') {
                showItem = dependencies[key](item.value);
            } else {
                showItem = !!item.value;
            }
        } else {
            showItem = false
        }
    })
    return showItem;
}
