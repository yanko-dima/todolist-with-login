import css from './Layout.module.css';

export const Layaut = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
