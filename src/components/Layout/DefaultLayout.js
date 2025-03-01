import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

function DefaultLayout({ children }) {
  return (
    <div>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
}

export default DefaultLayout;
