import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(route, params) {
  navigationRef.current?.navigate(route, params);
}
