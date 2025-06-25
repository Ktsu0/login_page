import BtnsFooter from './BtnsFooter';
import styles from './footer.module.scss';

function Footer() {
  const BtnsIcons = [
    { iconClass: "icon fa-brands fa-github iconone", id: "btnGithub" },
    { iconClass: "icon fa-brands fa-whatsapp icontwo", id: "btnWhatsapp" },
    { iconClass: "icon fa-brands fa-instagram icontheer animate-drop", id: "btnInstagram" }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.btns_footer}>
        {BtnsIcons.map(({ id, iconClass }) => (
          <BtnsFooter key={id} id={id} iconClass={iconClass} />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
