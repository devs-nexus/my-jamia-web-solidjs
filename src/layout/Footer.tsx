import { Component } from 'solid-js';

interface IProps {}

const Footer: Component<IProps> = () => {
  return (
    <div class="p-5 text-center">
      <p class="">{new Date().getFullYear()} &copy; MY JAMIA</p>
    </div>
  );
};

export default Footer;
