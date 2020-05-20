import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(route, params) {
  if (navigationRef.current) {
    navigationRef.current.navigate(route, params);
  }
}
