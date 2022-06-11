const setElemAttribute = ({ element, attribute, value }) => {
    const elem = document.querySelector(element);
    elem.setAttribute(attribute, value);
}

export const setTitle = title => {
    document.title = title;
};

export const setDescription = desc => {
    setElemAttribute({
        element: 'meta[name="description"]',
        attribute: 'content',
        value: desc,
    });
}

export const setOgProperties = props => {
    Object.keys(props).forEach(key => {
        setElemAttribute({
            element: `meta[property="og:${key}"]`,
            attribute: 'content',
            value: props[key],
        });
    });
}

