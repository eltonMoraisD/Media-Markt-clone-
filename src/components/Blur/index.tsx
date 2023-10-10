import styles from "./styles.module.scss";

interface IAppProps {
  handleMenuToggle?: React.MouseEventHandler<HTMLButtonElement>;
  handleSideSearchToggle?: React.MouseEventHandler<HTMLButtonElement>;
  // blur: any;
}

const Blur: React.FunctionComponent<IAppProps> = ({
  handleMenuToggle,
  handleSideSearchToggle,
  // blur,
}) => {
  return (
    <button
      className={styles.blur}
      onClick={(e) => {
        if (handleMenuToggle) {
          return handleMenuToggle(e);
        } else if (handleSideSearchToggle) {
          return handleSideSearchToggle(e);
        }
      }}
    />
  );
};

export default Blur;
