type setElemAttributeProps = {
    element: string,
    attribute: string,
    value: string
}

const setElemAttribute = ({ element, attribute, value }: setElemAttributeProps) => {
    const elem = document.querySelector(element);
    if (elem){
        elem.setAttribute(attribute, value);
    }
}

export const setTitle = (title: string) => {
    document.title = title;
};

export const setDescription = (desc: string) => {
    setElemAttribute({
        element: 'meta[name="description"]',
        attribute: 'content',
        value: desc,
    });
}

type OgProps = {
    [id: string]: any
}

export const setOgProperties = ({props}: OgProps) => {
    Object.keys(props).forEach(key => {
        setElemAttribute({
            element: `meta[property="og:${key}"]`,
            attribute: 'content',
            value: props[key],
        });
    });
}

