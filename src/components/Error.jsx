import Layout from "./Layout";
import style from "../style_modules/main.module.css";
function Error() {
  return (
    <Layout>
      <div className={style.mainContainer}>
        Invalid URL. Please input a valid URL
      </div>
    </Layout>
  );
}
export default Error;
