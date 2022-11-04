import { Component } from 'solid-js';

interface IProps {
  children: any;
}

const PageWrapper: Component<IProps> = (props) => {
  return (
    <div class="min-h-[100vh] p-10">
      <div class="">{props.children}</div>
    </div>
  );
};

export default PageWrapper;
