import * as React from "react";
import { Fragment } from 'react';
import { SaveButton, Toolbar } from 'react-admin';




export const DefaultToolbarWithoutDeleteButton = props => (
    <Toolbar {...props} >
        <SaveButton disabled={props.pristine} />
    </Toolbar>
);

export const BulkActionButtons = props => (
    <Fragment>
    </Fragment>
);