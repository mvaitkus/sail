import { FC } from "react";
import {
  useRecoilState,
  useSetRecoilState,
  atom
} from "recoil";
import { sailsState } from "../common/state";
import { v4 } from "uuid";

import { Formik, Field, Form, FormikHelpers } from "formik";
import { SailsList } from "./SailsList";

import { WindSpeedUnitSelector } from "../windunit";

const pageState = atom({
  key: "mySailsPageState",
  default: "list" // other option is "new"
});

export const MySails: FC = () => {
  const [page, setPage] = useRecoilState(pageState);

  if (page === "list") {
    return (
      <div>
        This is work in progress, proper visual design TBD
        <WindSpeedUnitSelector />
        <SailsList />
        <button onClick={_ => setPage("new")}>Add new sail</button>
      </div>
    );
  } else {
    return <AddSail />;
  }
};

interface NewSail {
  sailName: string;
  size: string;
}

// TODO: extract to separate component (going back should probably come as function instead of depending on page state)
const AddSail: FC = () => {
  const setPage = useSetRecoilState(pageState);
  const [sails, setSails] = useRecoilState(sailsState);

  function validateName(value: string) {
    if (value.trim() === "") {
      return "Sail name must be not empty!";
    }
  }

  function validateSize(value: string) {
    const size = Number(value);
    if (Number.isNaN(size)) {
      return "Please enter a number for sail size!";
    } else if (size < 1.0) {
      return "Size must be more than 1.0";
    } else if (size > 12.0) {
      return "No one sails with sails bigger than 12.0; As a matter of fact, I wouldn't sail with 12.0 either, it's too big!";
    }
  }

  return (
    <div>
      <div>Adding new sail</div>
      <div>
        <Formik
          initialValues={{
            sailName: "",
            size: ""
          }}
          onSubmit={(
            values: NewSail,
            { setSubmitting }: FormikHelpers<NewSail>
          ) => {
            const sail = {
              id: v4(),
              name: values.sailName,
              size: Number(values.size)
            };
            setSails([...sails, sail]);
            setPage("list");
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form>
              <div>
                <label htmlFor="sailName">Name</label>
                <Field
                  id="sailName"
                  name="sailName"
                  placeholder="Goya Banzai"
                  validate={validateName}
                />
                {errors.sailName && touched.sailName && (
                  <div>{errors.sailName}</div>
                )}
              </div>

              <div>
                <label htmlFor="size">Size</label>
                <Field
                  type="number"
                  id="size"
                  name="size"
                  placeholder="4.7"
                  step="0.1"
                  validate={validateSize}
                />
                {errors.size && touched.size && <div>{errors.size}</div>}
              </div>

              <div>
                <button type="submit">Add</button>
                <button type="button" onClick={_ => setPage("list")}>
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
