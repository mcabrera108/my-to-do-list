import Layout from "./components/Layout";
import Main from "./components/Main";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function App({ content }) {
  const location = useLocation();
  useEffect(() => {
    // Detect if Project URL is valid. If not, redirect user to Error Page
    //let tempArr = JSON.parse(localStorage.getItem("projects") || "[]");
    if (
      location.pathname !== "/" &&
      location.pathname !== `/today` &&
      location.pathname !== "/today" &&
      location.pathname !== "/week"
    ) {
      let validURL = false;
      let tempArr = JSON.parse(localStorage.getItem("projects") || "[]");
      for (let i = 0; i < tempArr.length; i++) {
        console.log(location.pathname);
        if (tempArr[i].url === location.pathname) {
          validURL = true;
          break;
        }
      }
      if (!validURL) {
        const errorUrl = window.location.origin + "/error";
        window.location.href = errorUrl;
      }
    }
  }, [location]);
  return (
    <Layout>
      <Main content={content} />
    </Layout>
  );
}
export default App;
