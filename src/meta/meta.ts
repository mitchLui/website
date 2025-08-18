type setElemAttributeProps = {
    element: string,
    attribute: string,
    value: string
}

const setElemAttribute = ({ element, attribute, value }: setElemAttributeProps) => {
  const elem = document.querySelector(element);
  if (elem) {
    elem.setAttribute(attribute, value);
  }
};

const setTitle = (title: string) => {
  document.title = title;
};

const setDescription = (desc: string) => {
  setElemAttribute({
    element: 'meta[name="description"]',
    attribute: 'content',
    value: desc
  });
};

type OgProps = {
    [key: string]: string
}

export const setPageProperties = (props: OgProps) => {
  Object.keys(props).forEach(key => {
    if (props.title) {
      setTitle(props.title);
    }

    if (props.description) {
      setDescription(props.description);
    }

    setElemAttribute({
      element: `meta[property="og:${key}"]`,
      attribute: 'content',
      value: props[key]
    });
  });
};
