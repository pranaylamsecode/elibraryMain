import { getFormattedMessage } from "../../shared/sharedMethod";

export default (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = getFormattedMessage("tags.input.name.validate.label");
    }
    return errors;
};
