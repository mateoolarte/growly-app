import { classNamesBtn } from "./classNames";

export function Button(props) {
  const { type = "button", children, onClick } = props;

  return (
    <button type={type} className={classNamesBtn(props)} onClick={onClick}>
      {children}
    </button>
  );
}
