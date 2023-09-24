import {PropsWithChildren, memo} from "react";

interface MyButtonProps {
  onClick: () => void;
  className: string;
  isDisabled: boolean;
}
const MyButton = memo ((props:PropsWithChildren<MyButtonProps>) => {
  return (
    <div>
      <button className={props.className} disabled={props.isDisabled} onClick={props.onClick}>{props.children}</button>
    </div>
  );
});

export default (MyButton); 