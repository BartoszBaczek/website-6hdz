const dangerousHtml = {
    convert (stringifiedHtml) {
        return {
            __html: stringifiedHtml
        };
    }
};

export default dangerousHtml;