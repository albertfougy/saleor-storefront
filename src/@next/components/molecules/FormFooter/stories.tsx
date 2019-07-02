import { storiesOf } from "@storybook/react";
import React from "react";

import { action } from "@storybook/addon-actions";
import { FormFooter } from ".";

const cancelBtn = {
  action: action("on cancel"),
  text: "Cancel",
};

const DEFAULT_PROPS = {
  submitBtn: {
    action: action("on submit"),
    text: "Save",
  },
};

storiesOf("@components/molecules/FormFooter", module)
  .add("with submit button", () => <FormFooter {...DEFAULT_PROPS} />)
  .add("with submit and cancel button", () => {
    const PROPS = {
      ...DEFAULT_PROPS,
      cancelBtn,
    };
    return <FormFooter {...PROPS} />;
  });
