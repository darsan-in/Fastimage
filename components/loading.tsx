import style from "../styles/loader.module.scss";

export default () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 gap-12 text-gray-600 md:px-8 flex justify-center items-center">
        <div className={style.container + " text-primary"}>
          <div className={style.slice}></div>
          <div className={style.slice}></div>
          <div className={style.slice}></div>
          <div className={style.slice}></div>
          <div className={style.slice}></div>
          <div className={style.slice}></div>
        </div>
      </div>
    </>
  );
};
