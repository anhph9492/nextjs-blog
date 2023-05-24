/**
 * control page initialization
 * persist layout between page changes
 * keeping state when navigating pages
 * inject additional data into pages
 * add gobal styles
 */
import '/styles/app.scss'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
