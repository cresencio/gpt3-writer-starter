import Script from "next/script";
import './styles.css';

function App({ Component, pageProps }) {

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.bundle.min.js" integrity="sha512-sH8JPhKJUeA9PWk3eOcOl8U+lfZTgtBXD41q6cO/slwxGHCxKcW45K4oPCUhHG7NMB4mbKEddVmPuTXtpbCbFA==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
      <Script async src="https://platform.twitter.com/widgets.js" charset="utf-8"/>
      <Component {...pageProps} />
    </>
  );
}
export default App;
