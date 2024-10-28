import style from "../style_modules/footer.module.css";
function Footer() {
  return (
    <>
      <footer className={style.footerContainer}>
        <div className={style.footerWrapper}>
          @ 2024 Martin Cabrera. All rights reserved.{" "}
        </div>
      </footer>
    </>
  );
}
export default Footer;
