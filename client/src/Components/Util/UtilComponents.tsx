import  { type ComponentType } from 'react';

// The comma after T tells the .tsx parser this is a generic, not a JSX tag
function withBorder<T extends object>(WrappedComponent: ComponentType<T>) {
  return function NewComponent(props: T) {
    return (
      <div style={{ border: '2px solid blue', padding: '10px' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default {withBorder}
